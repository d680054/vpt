package com.hj.vpt.model;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;

import java.io.Serializable;

/**
 * @author David.Zheng
 * @date 2019-01-08
 */
@Data
public class Run implements Serializable {

    @JsonProperty("run_id")
    private int runId;

    @JsonProperty("destination_name")
    private String destinationName;

    @JsonProperty("express_stop_count")
    private int expressStopCount;

    private String status; //cancelled or scheduled
}
