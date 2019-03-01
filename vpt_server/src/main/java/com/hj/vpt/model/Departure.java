package com.hj.vpt.model;

import com.fasterxml.jackson.annotation.JsonAlias;
import lombok.Data;
import lombok.extern.slf4j.Slf4j;
import org.apache.commons.lang3.StringUtils;

import java.time.Instant;
import java.time.LocalTime;
import java.time.ZoneId;
import java.time.format.DateTimeFormatter;

/**
 * @author David.Zheng
 * @date 2019-01-08
 */
@Slf4j
@Data
public class Departure {

    @JsonAlias({"stop_id", "stopId"})
    private int stopId;

    @JsonAlias({"run_id", "runId"})
    private Integer runId;

    @JsonAlias({"route_id", "routeId"})
    private Integer routeId;

    @JsonAlias({"direction_id", "directionId"})
    private int directionId;

    @JsonAlias({"scheduled_departure_utc", "scheduledDepartureUTC"})
    private String scheduledDepartureUTC;

    private String departureLocalTime; //用于展示计划发车时间

    @JsonAlias({"estimated_departure_utc", "estimatedDepartureUTC"})
    private String estimatedDepartureUTC; //用于实际发车时间间隔

    public String getDepartureLocalTime() {
        String departureTime = "";
        if (stopId != 0) {
            Instant timestamp = Instant.parse(this.scheduledDepartureUTC);
            LocalTime localTime = timestamp.atZone(ZoneId.of("Australia/Melbourne")).toLocalTime();
            DateTimeFormatter dateTimeFormatter = DateTimeFormatter.ofPattern("hh:mm a");

            departureTime = localTime.format(dateTimeFormatter);
        }

        return departureTime;
    }

    /**
     * if the
     *
     * @return
     */
    public String getEstimatedDepartureUTC() {
        Instant timestamp = Instant.parse(StringUtils.isEmpty(this.estimatedDepartureUTC) ? this.scheduledDepartureUTC : this.estimatedDepartureUTC);
        return timestamp.toString();
    }
}
