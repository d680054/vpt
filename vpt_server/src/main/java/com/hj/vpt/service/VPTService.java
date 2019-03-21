package com.hj.vpt.service;

import com.hj.vpt.model.DepartureStop;
import com.hj.vpt.model.DepartureTerminal;
import com.hj.vpt.model.Disruption;

import java.util.Collection;
import java.util.List;

/**
 * @author David.Zheng
 * @date 2019-01-08
 */
public interface VPTService {

    Collection<Disruption> fetchDisruption(String routeType) throws Exception;

    List<DepartureTerminal> fetchDepartures(String stopId, String routeType) throws Exception;

    List<DepartureTerminal> fetchESTDepartures(String stopId, String routeType, Integer routeId);

    List<DepartureStop> fetchPatterns(Integer runId, String routeType) throws Exception;

    List<String> fetchStopByGPS(String latitude, String longitude, String routeType) throws Exception;

}
