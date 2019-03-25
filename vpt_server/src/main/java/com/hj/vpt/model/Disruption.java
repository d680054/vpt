package com.hj.vpt.model;

import com.google.common.collect.ImmutableMap;
import lombok.Data;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * @author David.Zheng
 * @date 2019-01-13
 */
@Data
public class Disruption {

    final static Map<String, String> colorMap = ImmutableMap.of("#1f1f1f", "Part Suspended", "#e5492d", "Major Delays", "#ee9b00", "Minor Delays", "#ffd500", "Info");

    final static Map<String, Integer> colorOrdering = ImmutableMap.of("#1f1f1f", 1, "#e5492d", 2, "#ee9b00", 3, "#ffd500", 4);

    private int routeId;

    private String color;

    private String grade;

    private Map<String,String> descriptions = new HashMap<>();

    public Disruption(int routeId) {
        this.routeId = routeId;
    }


    public void addDesc(String type, String desc) {
        descriptions.put(type, desc);
    }

    public void setColour(String color) {
        if (colorOrdering.get(color) < colorOrdering.getOrDefault(this.color, 999)) {
            this.color = color;
        }
    }

    public String getGrade() {
        return colorMap.get(color);
    }

}
