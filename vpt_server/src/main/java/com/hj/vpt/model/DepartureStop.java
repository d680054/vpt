package com.hj.vpt.model;

import com.hj.vpt.service.InitServiceImpl;
import lombok.Data;


/**
 * @author David.Zheng
 * @date 2019-01-08
 */
@Data
public class DepartureStop extends Departure{

    private String stopName;

//    public String getStopName() {
//        return InitServiceImpl.STOP_MAP.get(getStopId());
//    }
}
