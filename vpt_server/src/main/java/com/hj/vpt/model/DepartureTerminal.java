package com.hj.vpt.model;

import com.fasterxml.jackson.annotation.JsonAlias;
import com.hj.vpt.service.InitServiceImpl;
import lombok.Data;

/**
 * @author David.Zheng
 * @date 2019-01-08
 */
@Data
public class DepartureTerminal extends Departure {

    private String terminal;

    @JsonAlias({"route_id", "routeId"})
    private Integer routeId;

    @JsonAlias({"platform_number", "platform"})
    private String platform;

    private boolean express;

    public String getTerminal() {
        Run run = InitServiceImpl.TERMINAL_MAP.get(getRunId());
        if (run != null) {
            return run.getDestinationName();
        } else return "";
    }

    public boolean getExpress() {
        Run run = InitServiceImpl.TERMINAL_MAP.get(getRunId());
        if(run != null)  {
            return run.getExpressStopCount() > 0;
        } else {
            return false;
        }
        //return PTVServiceImpl.TERMINAL_Map.get(getRunId()).getExpressStopCount() > 0;
    }
}
