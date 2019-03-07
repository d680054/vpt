package com.hj.vpt.utils;

import com.alibaba.fastjson.JSON;
import com.google.common.collect.Maps;
import com.hj.vpt.model.Stop;
import com.hj.vpt.model.StopInfo;
import com.hj.vpt.model.StopWrapper;
import lombok.extern.slf4j.Slf4j;
import org.apache.commons.io.FileUtils;
import org.springframework.web.client.RestTemplate;

import java.io.File;
import java.io.IOException;
import java.nio.charset.Charset;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

/**
 * This is class is used to initialise all the static data from ptv.
 *
 * @author David.Zheng
 * @date 2019-03-03
 */
@Slf4j
public class PTVUtils {

    public static final String ROUTE_STOP = "/v3/stops/route/%s/route_type/%s";

    public static final String STOP_DETAIL = "/v3/stops/%s/route_type/%s?stop_amenities=true&stop_ticket=true";

    private RestTemplate restTemplate = new RestTemplate();


    /**
     * write the json object to file
     *
     * @param jsonObject
     * @throws IOException
     */
    public void writeJSONToFile(Object jsonObject) throws IOException {
        File file = new File("./StopZone.json");
        String json = JSON.toJSONString(jsonObject);
        FileUtils.writeStringToFile(file, json, Charset.forName("UTF-8"));
    }

    /**
     * Generate the stop zone information
     *
     * @return
     */
    public Map generateStopZone() throws IOException {
        Map<String, StopInfo> map = Maps.newConcurrentMap();
        List<Integer> stopIds = listAllTrainStopIds();
        stopIds.forEach(id-> {
            StopInfo stopInfo = getStopInfo(id);
            map.put(String.valueOf(stopInfo.getStopId()), stopInfo);
        });

        log.info("total size: "+stopIds.size());
        return map;
    }


    /**
     *
     * @param stopId
     */
    private StopInfo getStopInfo(Integer stopId) {
        String uri = String.format(STOP_DETAIL, stopId, 0);
        try {
            String signedURL = URLHelper.buildSignedURL(uri);
            return restTemplate.getForObject(signedURL, StopInfo.class);
        } catch (Exception e) {
            e.printStackTrace();
        }
        return null;
    }

    /**
     * list all the train stop ids
     *
     * @return
     */
    private List<Integer> listAllTrainStopIds() {
        List<Stop> stops = listAllTrainStops();
        return stops.stream().map(Stop::getStopId).collect(Collectors.toList());
    }

    /**
     * aggregate all the train stops
     *
     * @return
     */
    private List<Stop> listAllTrainStops() {
        List<Stop> stops = new ArrayList<>();
        int[] routeIds = new int[]{1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 13, 14, 15, 16, 17};
        for (int i : routeIds) {
            stops.addAll(listStopsByRoute(0, i));
        }
        return stops;
    }

    /**
     * Lists all the stops by the route type and id
     *
     * @param routeType
     * @param routeId
     * @return
     */
    private List<Stop> listStopsByRoute(int routeType, int routeId) {
        String uri = String.format(ROUTE_STOP, routeId, routeType);
        String signedURL = null;
        try {
            signedURL = URLHelper.buildSignedURL(uri);
            StopWrapper list = restTemplate.getForObject(signedURL, StopWrapper.class);
            return list.getStops();
        } catch (Exception e) {
            e.printStackTrace();
        }
        return Arrays.asList();
    }


}
