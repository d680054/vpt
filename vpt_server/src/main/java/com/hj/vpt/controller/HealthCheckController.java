package com.hj.vpt.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import static org.springframework.http.HttpStatus.OK;

/**
 * @author David.Zheng
 * @date 2019-01-29
 */
@RestController
@RequestMapping("/")
public class HealthCheckController {

    @ResponseStatus(OK)
    @RequestMapping(value = "/ping", method = RequestMethod.HEAD, produces = "application/json")
    public void ping() {

    }

}
