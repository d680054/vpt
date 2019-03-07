package com.hj.vpt.model;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;
import org.apache.commons.lang3.StringUtils;

import java.util.Map;

/**
 * @author David.Zheng
 * @date 2019-03-04
 */
@Data
public class StopInfo {

    private int stopId;

    private String stopName;

    private String stationType;

    private String zone;

    private boolean toilet;

    private boolean taxiRank;

    @JsonProperty("stop")
    private void unpackNested(Map<String, Object> stop) {
        this.stopId = (Integer) stop.get("stop_id");
        this.stopName = (String) stop.get("stop_name");
        this.stationType = (String) stop.get("station_type");
        Map<String, String> stop_ticket = (Map<String, String>) stop.get("stop_ticket");
        this.zone = StringUtils.remove(stop_ticket.get("zone"), "Zone").trim();
        Map<String, Object> stop_amenities = (Map<String, Object>) stop.get("stop_amenities");
        this.toilet = (Boolean)stop_amenities.get("toilet");
        this.taxiRank = (Boolean)stop_amenities.get("taxi_rank");
    }

}
