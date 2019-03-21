package com.hj.vpt.model;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;

import java.io.Serializable;

/**
 * @author David.Zheng
 * @date 2019-01-08
 */
@Data
public class Stop implements Serializable {

    @JsonProperty("stop_id")
    private Integer stopId;

    @JsonProperty("stop_name")
    private String stopName;

    @JsonProperty("route_type")
    private int routeType;
}
