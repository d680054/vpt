package com.hj.vpt.controller;

import com.hj.vpt.model.DepartureStop;
import com.hj.vpt.model.DepartureTerminal;
import com.hj.vpt.model.Disruption;
import com.hj.vpt.service.InitService;
import com.hj.vpt.service.PTVService;
import lombok.extern.slf4j.Slf4j;
import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.time.Instant;
import java.util.ArrayList;
import java.util.Collection;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

import static java.time.temporal.ChronoUnit.MINUTES;

/**
 * @author David.Zheng
 * @date 2019-01-08
 */
@Slf4j
@RestController
@RequestMapping("/api/ptv")
public class PTVController {

    @Autowired
    private PTVService ptvService;

    @Autowired
    private InitService initService;

    @RequestMapping(value = "/departures", method = RequestMethod.GET, produces = "application/json")
    public List<DepartureTerminal> fetchDepartures(@RequestParam("routeType") String routeType,
                                                   @RequestParam("stopId") String stopId,
                                                   @RequestParam("routeIds") List<Integer> routeIds) throws Exception {
        long a = System.currentTimeMillis();
        List<DepartureTerminal> list = ptvService.fetchDepartures(stopId, routeType);
        List<DepartureTerminal> departures = new ArrayList<>();
        for (DepartureTerminal terminal : list) {
            if (routeIds.contains(terminal.getRouteId())
                    && Instant.parse(terminal.getScheduledDepartureUTC()).plus(31, MINUTES).isAfter(Instant.now())) {
                departures.add(terminal);
            }
        }
        long b = System.currentTimeMillis();
        log.info("first loading: " + (b - a));


        if (routeIds.size() < 9 && true) {
            List<DepartureTerminal> estDepartures =
                    routeIds.parallelStream().map(routeId -> ptvService.fetchESTDepartures(stopId, routeType, routeId)).flatMap(Collection::stream)
                            .collect(Collectors.toList());
            estDepartures.forEach(estDeparture -> {
                if (StringUtils.isNotEmpty(estDeparture.getEstimatedDepartureUTC())) {
                    departures.stream().filter(d -> d.getRunId().equals(estDeparture.getRunId())).findFirst()
                            .ifPresent(d -> {
                                d.setEstimatedDepartureUTC(estDeparture.getEstimatedDepartureUTC());
                            });
                }
            });
        }

        log.info("second loading: " + (System.currentTimeMillis() - b));

        return departures;
        //return list.stream().filter(departureTerminal -> routeIds.contains(departureTerminal.getRouteId())).collect(Collectors.toList());
    }

    @RequestMapping(value = "/disruptions", method = RequestMethod.GET, produces = "application/json")
    public Collection<Disruption> fetchDisruptions(@RequestParam("routeType") String routeType) throws Exception {
        return ptvService.fetchDisruption(routeType);
    }

    @RequestMapping(value = "/patterns", method = RequestMethod.GET, produces = "application/json")
    public List<DepartureStop> fetchPatterns(@RequestParam("routeType") String routeType, @RequestParam("runId") Integer runId) throws Exception {
        return ptvService.fetchPatterns(runId, routeType);
    }

    @RequestMapping(value = "/nearme", method = RequestMethod.GET, produces = "application/json")
    public List<String> fetchStopByGPS(@RequestParam("latitude") String latitude, @RequestParam("longitude") String longitude) throws Exception {
        return ptvService.fetchStopByGPS(latitude, longitude);
    }

    @RequestMapping(value = "/getRouteIdsByStopId", method = RequestMethod.GET, produces = "application/json")
    public Set<Integer> getRoutesByStopId(@RequestParam("stopId") String stopId) throws Exception {
        //init stopRoutes; <1077,[8,10,11..]>
        List<DepartureTerminal> list = ptvService.fetchDepartures("0", stopId);
        Set<Integer> stopRoutes = list.stream().map(x -> x.getRouteId())
                .collect(Collectors.toSet());

        return stopRoutes;
    }

//    @RequestMapping(value = "/initStopReverse", method = RequestMethod.GET, produces = "application/json")
//    public Map<String, Integer> initData() throws Exception {
//        //init stopNameMap;<'flinders', 1077>
//        return initService.getStopReverseMap();
//    }
//
//    @RequestMapping(value = "/initRouteStop", method = RequestMethod.GET, produces = "application/json")
//    public Map<Integer, List<Integer>> getRouteStopMap() {
//        return initService.getRouteStopMap();
//    }
//
//    @RequestMapping(value = "/initDirections", method = RequestMethod.GET, produces = "application/json")
//    public Map<Integer, String> initDirection() throws Exception {
//        return initService.getDirectionMap();
//    }
//
//    @RequestMapping(value = "/initRoutes", method = RequestMethod.GET, produces = "application/json")
//    public String initRoutes() {
//        return initService.initRoutes();
//    }

}
