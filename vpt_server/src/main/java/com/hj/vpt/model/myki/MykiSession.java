package com.hj.vpt.model.myki;

import lombok.Data;

import java.util.Map;

/**
 * @author David.Zheng
 * @date 2019-02-02
 */
@Data
public class MykiSession {

    private String cookie;

    private Map<String, String> cookies;

    private String eventValidation;

    private String viewState;

}
