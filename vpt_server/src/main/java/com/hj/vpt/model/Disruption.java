package com.hj.vpt.model;

import com.google.common.collect.ImmutableMap;
import lombok.Data;

import java.util.ArrayList;
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

    private String type;

    private String colour;

    private List<String> descriptions = new ArrayList<>();

    public Disruption(int routeId) {
        this.routeId = routeId;
    }


    public void addDesc(String desc) {
        descriptions.add(desc);
    }

    public void setColour(String color) {
        if (colorOrdering.get(color) < colorOrdering.getOrDefault(this.colour, 999)) {
            this.colour = color;
        }
    }

    public String getType() {
        return colorMap.get(colour);
    }

}
