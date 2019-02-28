package com.hj.vpt.model;

import com.fasterxml.jackson.annotation.JsonAlias;
import lombok.Data;

/**
 * @author David.Zheng
 * @date 2019-01-13
 */
@Data
public class Direction {

    @JsonAlias({"direction_id", "directionId"})
    private int directionId;

    @JsonAlias({"direction_name", "directionName"})
    private String directionName;
}
