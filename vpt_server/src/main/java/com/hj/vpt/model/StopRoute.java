package com.hj.vpt.model;

import com.fasterxml.jackson.annotation.JsonAlias;
import lombok.Data;

/**
 * @author David.Zheng
 * @date 2019-01-10
 */
@Data
public class StopRoute {

    @JsonAlias({"stop_id", "stopId"})
    private int stopId;

    @JsonAlias({"route_id", "routeId"})
    private String route_id;

    private String stopName;

    private String[] routeIds;

}
