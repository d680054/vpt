package com.hj.vpt.service;

import java.util.List;
import java.util.Map;

/**
 * @author David.Zheng
 * @date 2019-01-13
 */
public interface InitService {

    Map<String, Integer> getStopReverseMap();

    Map<Integer, String> getDirectionMap();

    Map<Integer, List<Integer>> getRouteStopMap();

    String initRoutes();
}
