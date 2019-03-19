package com.hj.vpt.model;

import com.fasterxml.jackson.annotation.JsonAlias;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonRootName;
import lombok.Data;

import java.util.Map;

/**
 * @author David.Zheng
 * @date 2019-03-15
 */
@Data
public class Route {

    @JsonAlias({"route_type", "routeType"})
    private int routeType;

    @JsonAlias({"route_id", "routeId"})
    private int routeId;

    public static Class Route

}
