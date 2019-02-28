package com.hj.vpt.service;

import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.TypeReference;
import com.google.common.collect.HashBiMap;
import com.hj.vpt.model.DirectionWrapper;
import com.hj.vpt.model.Run;
import com.hj.vpt.model.RunWrapper;
import com.hj.vpt.model.StopWrapper;
import com.hj.vpt.utils.URLHelper;
import lombok.extern.slf4j.Slf4j;
import org.apache.commons.io.FileUtils;
import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import javax.annotation.PostConstruct;
import java.io.File;
import java.nio.charset.Charset;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;

/**
 * @author David.Zheng
 * @date 2019-01-13
 */
@Slf4j
@Service
public class InitServiceImpl implements InitService{

    @Autowired
    private RestTemplate restTemplate;

    public static HashBiMap<Integer, String> STOP_MAP = HashBiMap.create();

    public static Map<String, Integer> STOP_REVERSE_MAP = HashBiMap.create();

    public static Map<Integer, Run> TERMINAL_MAP = new ConcurrentHashMap<>();

    public static Map<Integer, List<Integer>> ROUTE_STOP_MAP = new ConcurrentHashMap<>();

    public static Map<Integer, String> DIRECTION_MAP = new ConcurrentHashMap<>();

    @PostConstruct
    public void fetchDirection() throws Exception {
        int[] routeIds = new int[]{1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 13, 14, 15, 16, 17, 1482};
        for (int i : routeIds) {
            String uri = String.format(URLHelper.URI_DIRECTION_BY_ROUTE, i);
            String signedURL = URLHelper.buildSignedURL(uri);
            DirectionWrapper list = restTemplate.getForObject(signedURL, DirectionWrapper.class);
            list.getDirections().forEach(direction -> {
                DIRECTION_MAP.put(direction.getDirectionId(), direction.getDirectionName());
            });
        }

        log.info("After initialization the {} directions", DIRECTION_MAP.size());

    }

    @PostConstruct
    public void initialiseStops() throws Exception {
        log.info("loading all the stops");
        int[] routeIds = new int[]{1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 13, 14, 15, 16, 17};
        //int[] routeIds = new int[]{1482};
        for (int i : routeIds) {
            String uri = String.format(URLHelper.URI_STOP_BY_ROUTE, i, 0);
            String signedURL = URLHelper.buildSignedURL(uri);
            StopWrapper list = restTemplate.getForObject(signedURL, StopWrapper.class);
            list.getStops().forEach(stop -> {
                STOP_MAP.put(stop.getStopId(), StringUtils.removeEndIgnoreCase(stop.getStopName(), "station").trim());
                ROUTE_STOP_MAP.computeIfAbsent(stop.getStopId(),  x -> new ArrayList<>()).add(i);
            });
        }

        STOP_REVERSE_MAP = STOP_MAP.inverse();

        log.info("After initialization the {} stops", STOP_MAP.size());
    }

    /**
     * TODO: maybe don't need to cache
     *
     * @throws Exception total 61969 61970, 62579
     */
    @PostConstruct
    @Scheduled(cron = "0 3 0 1/1 * *",zone = "Australia/Melbourne")
    public void initialiseTerminals() throws Exception {
        log.info("loading all the Terminals");
        int[] routeIds = new int[]{1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 13, 14, 15, 16, 17, 1482};
        for (int i : routeIds) {
            String uri = String.format(URLHelper.URI_RUN_BY_ROUTE, i, 0);
            String signedURL = URLHelper.buildSignedURL(uri);
            RunWrapper list = restTemplate.getForObject(signedURL, RunWrapper.class);
            list.getRuns().forEach((run -> {
                TERMINAL_MAP.put(run.getRunId(), run);
            }));
        }

//        File file = new File("./terminals.json");
//        String json = FileUtils.readFileToString(file, Charset.forName("UTF-8"));
//        TERMINAL_MAP = JSON.parseObject(json, new TypeReference<Map<Integer, Run>>(){});

//        String json = JSON.toJSONString(TERMINAL_MAP);
//        FileUtils.writeStringToFile(file, json, Charset.forName("UTF-8"));

        log.info("After initialization the {} terminals", TERMINAL_MAP.size());
    }

    @Override
    public Map<String, Integer> getStopReverseMap() {
        return STOP_REVERSE_MAP;
    }

    @Override
    public Map<Integer, String> getDirectionMap() {
        return DIRECTION_MAP;
    }

    @Override
    public Map<Integer, List<Integer>> getRouteStopMap() {
        return ROUTE_STOP_MAP;
    }

    @Override
    public String initRoutes() {
        String url = "https://timetableapi.ptv.vic.gov.au/v3/routes?devid=3000969&signature=602DAAA6BFB77BC2DF5B40FA15F3953FD974F3DF";
        return restTemplate.getForObject(url, String.class);
    }
}
