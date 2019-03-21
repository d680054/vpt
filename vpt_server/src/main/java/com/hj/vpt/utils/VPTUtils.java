package com.hj.vpt.utils;

import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.TypeReference;
import com.google.common.collect.HashBiMap;
import com.hj.vpt.model.*;
import lombok.extern.slf4j.Slf4j;
import org.apache.commons.io.FileUtils;
import org.apache.commons.lang3.StringUtils;
import org.springframework.web.client.HttpClientErrorException;
import org.springframework.web.client.RestClientException;
import org.springframework.web.client.RestTemplate;

import java.io.File;
import java.io.IOException;
import java.nio.charset.Charset;
import java.util.*;
import java.util.concurrent.ConcurrentHashMap;

/**
 * This is class is used to initialise all the static data from ptv.
 *
 * @author David.Zheng
 * @date 2019-03-03
 */
@Slf4j
public class VPTUtils {

    public static final String ROUTE_STOP = "/v3/stops/route/%s/route_type/%s";

    public static final String STOP_DETAIL = "/v3/stops/%s/route_type/%s?stop_amenities=true&stop_ticket=true";

    public static final String FILE_LOCATION = "./vpt/data/";

    private RestTemplate restTemplate = new RestTemplate();


    /**
     * fetch all the directions
     *
     * @throws Exception
     */
    public void fetchDirection() throws Exception {
        log.info("loading all the Terminals");
        Map<String, String> DIRECTION_MAP = new ConcurrentHashMap<>();
        Map<Integer, List<Integer>> routeMap = new HashMap();
        //routeMap.put(0, Arrays.asList(1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 13, 14, 15, 16, 17, 1482));
        routeMap.put(3, Arrays.asList(1512, 1706, 1710, 1717, 1718, 1719, 1720, 1721, 1722, 1723, 1724, 1725, 1726, 1727, 1728, 1731, 1732, 1733, 1734, 1735, 1737, 1738, 1740, 1744, 1745, 1749, 1751, 1755, 1756, 1758, 1759, 1760, 1761, 1762, 1767, 1768, 1773, 1774, 1775, 1776, 1782, 1783, 1784, 1823, 1824, 1837, 1838, 1848, 1849, 1853, 1908, 1912, 1914, 1915, 4871, 5838, 7601));

        routeMap.forEach((route, routeIds) -> {
            routeIds.forEach(routeId -> {
                String uri = String.format(URLHelper.URI_DIRECTION_BY_ROUTE, routeId);
                try {
                    String signedURL = URLHelper.buildSignedURL(uri);
                    DirectionWrapper list = restTemplate.getForObject(signedURL, DirectionWrapper.class);
                    list.getDirections().forEach(direction -> {
                        DIRECTION_MAP.put(String.valueOf(direction.getDirectionId()), direction.getDirectionName());
                    });
                } catch (Exception e) {
                    e.printStackTrace();
                }
            });
        });

        writeJSONToFile(DIRECTION_MAP, "./directions.json", false);
        log.info("After initialization the {} directions", DIRECTION_MAP.size());
    }


    /**
     * initialise the stops
     * <p>
     * STOP_MAP---> "Box Hill": 1026,
     * ROUTE_STOP_MAP --->
     *
     * @throws Exception
     */
    public void initializeStops() throws Exception {
        log.info("loading all the stops");
        int routeType = 3;
        HashBiMap<Integer, String> STOP_MAP = HashBiMap.create();
        Map<String, Integer> STOP_REVERSE_MAP = HashBiMap.create();
        Map<Integer, List<Integer>> ROUTE_STOP_MAP = new ConcurrentHashMap<>();
        //int[] routeIds = new int[]{1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 13, 14, 15, 16, 17};  //"station"
        int[] routeIds = new int[]{1512, 1706, 1710, 1717, 1718, 1719, 1720, 1721, 1722, 1723, 1724, 1725, 1726, 1727, 1728, 1731, 1732, 1733, 1734, 1735, 1737, 1738, 1740, 1744, 1745, 1749, 1751, 1755, 1756, 1758, 1759, 1760, 1761, 1762, 1767, 1768, 1773, 1774, 1775, 1776, 1782, 1783, 1784, 1823, 1824, 1837, 1838, 1848, 1849, 1853, 1908, 1912, 1914, 1915, 4871, 5838, 7601};

        for (int i : routeIds) {
            String uri = String.format(URLHelper.URI_STOP_BY_ROUTE, i, routeType);
            String signedURL = URLHelper.buildSignedURL(uri);
            StopWrapper list = restTemplate.getForObject(signedURL, StopWrapper.class);
            list.getStops().forEach(stop -> {
                //STOP_Map
//                String name = StringUtils.removeEndIgnoreCase(stop.getStopName(), "railway station").trim();
//                try {
//                    STOP_MAP.putIfAbsent(stop.getStopId(), name);
//                }catch(IllegalArgumentException e) {
//                    STOP_MAP.putIfAbsent(stop.getStopId(), name+Math.random()+"harded");
//                }
                //ROUTE_STOP_MAP
                ROUTE_STOP_MAP.computeIfAbsent(stop.getStopId(), x -> new ArrayList<>()).add(i);
            });
        }

        //STOP_REVERSE_MAP = STOP_MAP.inverse();

        writeJSONToFile(ROUTE_STOP_MAP, "vline_routeStop.json", false);

        log.info("After initialization the {} stops", STOP_MAP.size());
    }


    /**
     * initialise the routes
     * <p>
     * 8 - hursbridge line
     * 1 - alamein line
     *
     * @param routeType
     * @return
     */
    public List<RouteWrapper.Route> initRoutes(int routeType) {
        String url = "https://timetableapi.ptv.vic.gov.au/v3/routes?devid=3000969&signature=602DAAA6BFB77BC2DF5B40FA15F3953FD974F3DF";
        RouteWrapper routeWrapper = restTemplate.getForObject(url, RouteWrapper.class);
        log.info("Fetch Routes: " + routeWrapper.getRoutes().size());
        StringBuilder routeIds = new StringBuilder();
        routeWrapper.getRoutes().forEach(route -> {
            if (route.getRouteType() == routeType) {
                routeIds.append(route.getRouteId() + ",");
            }
        });
        log.info("the routeids: " + StringUtils.removeEnd(routeIds.toString(), ","));
        return routeWrapper.getRoutes();
    }

    /**
     * Generate the stop zone information
     * taxi, toilet, cctv, info
     *
     * @return
     */
    public Map generateStopZone() throws IOException {
        List<Stop> stops = loadStopList("basic_stops.json");//loadAllStops();
        Map<String, StopInfo> map = loadStopInfo();
        int i = map.size();
        for (; i < stops.size(); i++) {
            Stop stop = stops.get(i);
            StopInfo stopInfo = null;
            try {
                stopInfo = getStopInfo(stop);
            } catch (InterruptedException e) {
                break;
            }
            map.put(String.valueOf(stopInfo.getStopId()), stopInfo);
        }

        this.writeJSONToFile(map, "stopInfo.json", false);
        log.info("total size: " + stops.size());
        return map;
    }


    /**
     * find all the stops(stop Id and stop name),
     *
     * @return
     */
    public Set<Stop> loadAllStops() {
        Map<Integer, List<Integer>> routeMap = new HashMap();
        //routeMap.put(0, Arrays.asList(1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 13, 14, 15, 16, 17, 1482));
        routeMap.put(3, Arrays.asList(1512, 1706, 1710, 1717, 1718, 1719, 1720, 1721, 1722, 1723, 1724, 1725, 1726, 1727, 1728, 1731, 1732, 1733, 1734, 1735, 1737, 1738, 1740, 1744, 1745, 1749, 1751, 1755, 1756, 1758, 1759, 1760, 1761, 1762, 1767, 1768, 1773, 1774, 1775, 1776, 1782, 1783, 1784, 1823, 1824, 1837, 1838, 1848, 1849, 1853, 1908, 1912, 1914, 1915, 4871, 5838, 7601));
        Set<Stop> stops = new HashSet<>();
        routeMap.forEach((route, routeIds) -> {
            routeIds.forEach(routeId -> {
                stops.addAll(listStopsByRoute(route, routeId));
            });
        });

        this.writeJSONToFile(stops, "basic_stops.json", false);

        return stops;
    }


    /**
     * Get Stop Info by the stop
     *
     * @param stop
     */
    private StopInfo getStopInfo(Stop stop) throws InterruptedException {
        String uri = String.format(STOP_DETAIL, stop.getStopId(), stop.getRouteType());
        StopInfo stopInfo = new StopInfo();
        stopInfo.setStopId(stop.getStopId());
        stopInfo.setStopName(stop.getStopName());
        try {
            Thread.sleep(200);
            String signedURL = URLHelper.buildSignedURL(uri);
            stopInfo = restTemplate.getForObject(signedURL, StopInfo.class);
        } catch (RestClientException e) {
            if (e instanceof HttpClientErrorException.BadRequest && ((HttpClientErrorException.BadRequest) e).getRawStatusCode() == 400) {
                List<Stop> stops = loadStopList("retry_basic_stops.json");
                stops.add(stop);
                this.writeJSONToFile(stops, "retry_basic_stops.json", false);
            } else if (((HttpClientErrorException.Forbidden) e).getRawStatusCode() == 403) {
                throw new InterruptedException("Pause");
            }
        } catch (Exception e) {
            log.info(e.getMessage());
        }
        return stopInfo;
    }

    /**
     * Lists all the stops by the route type and id
     *
     * @param routeType
     * @param routeId
     * @return
     */
    private Set<Stop> listStopsByRoute(int routeType, int routeId) {
        String uri = String.format(ROUTE_STOP, routeId, routeType);
        String signedURL = null;
        try {
            signedURL = URLHelper.buildSignedURL(uri);
            StopWrapper list = restTemplate.getForObject(signedURL, StopWrapper.class);
            return list.getStops();
        } catch (Exception e) {
            e.printStackTrace();
        }
        return new HashSet<>();
    }


    /**
     * write the json object to file
     *
     * @param jsonObject
     * @throws IOException
     */
    private void writeJSONToFile(Object jsonObject, String fileName, boolean append) {
        File file = new File(FILE_LOCATION + fileName);
        String json = JSON.toJSONString(jsonObject);
        try {
            FileUtils.writeStringToFile(file, json, Charset.forName("UTF-8"), append);
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    /**
     * load basic stop from file
     *
     * @throws IOException
     */
    private List<Stop> loadStopList(String filename) {
        File file = new File(FILE_LOCATION + filename);
        if (file.exists()) {
            try {
                String json = FileUtils.readFileToString(file, Charset.forName("UTF-8"));
                return JSON.parseArray(json, Stop.class);
            } catch (IOException e) {
                throw new RuntimeException(e);
            }
        } else {
            return new ArrayList<>();
        }
    }

    /**
     * load stop info from file
     *
     * @throws IOException
     */
    private Map<String, StopInfo> loadStopInfo() throws IOException {
        File file = new File(FILE_LOCATION + "stopInfo.json");
        if (file.exists()) {
            String json = FileUtils.readFileToString(file, Charset.forName("UTF-8"));
            return JSON.parseObject(json, new TypeReference<Map<String, StopInfo>>() {
            });
        } else {
            return new ConcurrentHashMap<>();
        }
    }


}
