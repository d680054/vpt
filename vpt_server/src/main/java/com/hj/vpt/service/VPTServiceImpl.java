package com.hj.vpt.service;

import com.alibaba.fastjson.JSONArray;
import com.alibaba.fastjson.JSONObject;
import com.hj.vpt.model.*;
import com.hj.vpt.utils.URLHelper;
import lombok.extern.slf4j.Slf4j;
import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.core.ParameterizedTypeReference;
import org.springframework.http.HttpMethod;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.sql.Timestamp;
import java.time.Instant;
import java.time.temporal.ChronoUnit;
import java.util.*;
import java.util.concurrent.ConcurrentHashMap;
import java.util.stream.Collectors;

import static com.hj.vpt.service.InitServiceImpl.TERMINAL_MAP;

/**
 * @author David.Zheng
 * @date 2019-01-08
 */
@Slf4j
@Service
public class PTVServiceImpl implements PTVService {

    @Value("#{${route.train.fullStops}}")
    private Map<Integer, String> routeFullStops;

    @Autowired
    private RestTemplate restTemplate;

    @Override
    public Collection<Disruption> fetchDisruption(String routeType) throws Exception {
        Map<Integer, Disruption> disruptionMap = new ConcurrentHashMap<>();
        String uri = String.format(URLHelper.URI_DISRUPTION_BY_ROUTE);
        String signedURL = URLHelper.buildSignedURL(uri + "?route_types=" + routeType);
        final String response = restTemplate.getForObject(signedURL, String.class);
        JSONObject json = JSONObject.parseObject(response);

        String disruptionMode = "metro_train";
        switch (Integer.valueOf(routeType)) {
            case 0:
                disruptionMode = "metro_train";  //train
                break;
            case 1:
                disruptionMode = "metro_tram";   //tram
                break;
            case 2:
                disruptionMode = "metro_bus";  //bus
                break;
            case 3:
                disruptionMode = "regional_train";  //vline
                break;
            case 4:
                disruptionMode = "night_bus";   //night bus
                break;
        }

        JSONArray disruptionArray = json.getJSONObject("disruptions").getJSONArray(disruptionMode);
        for (Object d : disruptionArray) {
            for (Object r : ((JSONObject) d).getJSONArray("routes")) {
                int routeId = ((JSONObject) r).getInteger("route_id");
                Timestamp toDate = ((JSONObject) d).getTimestamp("to_date");

                if (Objects.isNull(toDate)) {
                    Timestamp lastUpdated = ((JSONObject) d).getTimestamp("last_updated");
                    if (lastUpdated.toInstant().plus(3, ChronoUnit.HOURS).isBefore(Instant.now())) continue;
                }
                Disruption disruption = disruptionMap.getOrDefault(routeId, new Disruption(routeId));
                disruption.addDesc(((JSONObject) d).getString("description"));
                disruption.setColour(((JSONObject) d).getString("colour"));
                disruptionMap.put(routeId, disruption);
            }
        }
        return disruptionMap.values();
    }

    /**
     * 获取该站点当天的所有线路
     *
     * @param routeType
     * @param stopId
     * @return
     * @throws Exception
     */
    @Cacheable("departures")
    public List<DepartureTerminal> fetchDepartures(String stopId, String routeType) throws Exception {
        String uri = String.format(URLHelper.URI_DEP_BY_STOP, routeType, stopId);
        String signedURL = URLHelper.buildSignedURL(uri);
        DepartureWrapper<DepartureTerminal> departureWrapper = restTemplate.exchange(signedURL,
                HttpMethod.GET, null,
                new ParameterizedTypeReference<DepartureWrapper<DepartureTerminal>>() {
                }).getBody();

        return departureWrapper.getDepartures();
    }

    public List<DepartureTerminal> fetchESTDepartures(String stopId, String routeType, Integer routeId) {
        String uri = String.format(URLHelper.URI_DEP_BY_ROUTE_STOP, routeType, stopId, routeId);
        try {
            String signedURL = URLHelper.buildSignedURL(uri);
            DepartureWrapper<DepartureTerminal> departureWrapper = restTemplate.exchange(signedURL,
                    HttpMethod.GET, null,
                    new ParameterizedTypeReference<DepartureWrapper<DepartureTerminal>>() {
                    }).getBody();
            return departureWrapper.getDepartures();
        } catch (Exception e) {
            log.error("Exception:" + e.getMessage());
        }
        return Arrays.asList();
    }

    /**
     * 获取某条线路的每个站点停靠的详细信息
     *
     * @param runId
     * @param routeType
     * @return
     * @throws Exception
     */
    @Cacheable("departures")
    public List<DepartureStop> fetchPatterns(Integer runId, String routeType) throws Exception {
        List<Integer> cityLoopStops = Arrays.asList(1071, 1181, 1068, 1120, 1155);
        String uri = String.format(URLHelper.URI_PATTERN_BY_RUN_ROUTE, runId, routeType);
        String signedURL = URLHelper.buildSignedURL(uri);
        DepartureWrapper<DepartureStop> departureWrapper = restTemplate.exchange(signedURL,
                HttpMethod.GET, null,
                new ParameterizedTypeReference<DepartureWrapper<DepartureStop>>() {
                }).getBody();

        Run run = TERMINAL_MAP.get(runId);
        if (run != null && run.getExpressStopCount() > 0) {
            List<DepartureStop> rawDepartureStops = departureWrapper.getDepartures();
            if (rawDepartureStops.size() > 0) {
                int routeId = rawDepartureStops.get(0).getRouteId();
                if (routeFullStops.get(routeId) != null) {
                    String[] stops = routeFullStops.get(routeId).split(",");
                    List<String> standards = Arrays.asList(stops);
                    List<DepartureStop> departureStops = new ArrayList<>();
                    for (String s : standards) {
                        Optional<DepartureStop> departureStopOptional = rawDepartureStops.stream().filter(d -> d.getStopId() == Integer.valueOf(s)).findFirst();
                        //make sure the first stop is not null
                        if (departureStopOptional.isPresent() || departureStops.size() != 0) {
                            if (departureStopOptional.isPresent()) {
                                departureStops.add(departureStopOptional.get());
                            } else {
                                //excludes the city loop stations
                                if (!cityLoopStops.contains(Integer.valueOf(s))) {
                                    departureStops.add(this.addTimeToSkippedStop(departureStops));
                                }
                            }
                        }
                    }

                    Collections.sort(departureStops, Comparator.comparing(o -> Instant.parse(o.getScheduledDepartureUTC())));
                    // if last stop is null, remove it
                    if (departureStops.get(departureStops.size() - 1).isSkip()) {
                        Collections.reverse(departureStops);
                        int i = 0;
                        for (; i < departureStops.size(); i++) {
                            if (!departureStops.get(i).isSkip()) {
                                departureStops = departureStops.subList(i, departureStops.size());
                                Collections.reverse(departureStops);
                                break;
                            }
                        }
                    }
                    return departureStops;
                }
            }
        }

        return departureWrapper.getDepartures();
    }

    public List<String> fetchStopByGPS(String latitude, String longitude) throws Exception {
        String uri = String.format(URLHelper.URI_STOP_BY_GPS, latitude, longitude);
        String signedURL = URLHelper.buildSignedURL(uri);
        StopWrapper list = restTemplate.getForObject(signedURL, StopWrapper.class);
        List<String> stops = list.getStops().stream().map(x -> StringUtils.trim(x.getStopName())).collect(Collectors.toList());
        return stops;
    }

    /**
     * add the timestamp to the skipped stop as the express run will skip some stops
     * based on the direction will add/min 10secs to the departure utc time.
     *
     * @param departureStops all of the stops of the current run
     * @return the skipped the stop with stop_id=0 and departure utc time
     */
    private DepartureStop addTimeToSkippedStop(List<DepartureStop> departureStops) {
        DepartureStop d = new DepartureStop();
        DepartureStop p = departureStops.get(departureStops.size() - 1);
        d.setDirectionId(p.getDirectionId());
        d.setStopId(p.getStopId());
        d.setSkip(true);
        String departureTime = p.getScheduledDepartureUTC();
        if (p.getDirectionId() != 1) {//outbound city, align with the standards stops
            d.setScheduledDepartureUTC(Instant.parse(departureTime).plusSeconds(10).toString());
        } else {
            d.setScheduledDepartureUTC(Instant.parse(departureTime).minusSeconds(10).toString());
        }

        return d;
    }

}
