package com.hj.vpt.model;

import lombok.Data;

import java.util.List;

/**
 * @author David.Zheng
 * @date 2019-01-08
 */
@Data
public class DepartureWrapper<T extends Departure> {
    private List<T> departures;
}
