package com.hj.vpt.controller;

import com.google.common.collect.Lists;
import com.hj.vpt.model.myki.MykiInfo;
import com.hj.vpt.model.myki.MykiSession;
import com.hj.vpt.model.myki.MykiTransaction;
import com.hj.vpt.service.MykiService;
import lombok.extern.slf4j.Slf4j;
import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.util.DigestUtils;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;

/**
 * @author David.Zheng
 * @date 2019-01-28
 */
@Slf4j
@RestController
@RequestMapping("/api/ptv/myki")
public class MykiController {

    @Autowired
    private MykiService mykiService;

    @RequestMapping(value = "/getCards", method = RequestMethod.GET, produces = "application/json")
    public List<MykiInfo> getCards(@RequestParam(value = "username") String username,
                                   @RequestParam(value = "password") String password) {

        obtainSession(username, password);
        try {
            return mykiService.manageCards(genSessionKey(username, password));
        } catch (Exception e) {
            MykiService.SESSION_CACHE.remove(genSessionKey(username, password));
            e.printStackTrace();
        }

        return Lists.newArrayList();
    }

    @RequestMapping(value = "/getTransactions", method = RequestMethod.GET, produces = "application/json")
    public List<MykiTransaction> getTransactions(@RequestParam(value = "username") String username,
                                                 @RequestParam(value = "password") String password, @RequestParam(value = "cn") String cn) {
        obtainSessionAndActivation(username, password);
        String sessionKey = genSessionKey(username, password);


        return mykiService.getMykiTransactionByCardNumber(sessionKey, StringUtils.substringAfter(cn, "cno="));
    }

    /**
     *
     *
     * @param username
     * @param password
     * @return
     */
    private MykiSession obtainSession(String username, String password) {
        MykiSession session = MykiService.SESSION_CACHE.computeIfAbsent(genSessionKey(username, password), (k) -> {
            try {
                return mykiService.login(username, password);
            } catch (RuntimeException ex) {
                throw new ResponseStatusException(
                        HttpStatus.FORBIDDEN, "Login Failed!", ex);
            }
        });

        return session;
    }

    /**
     * ˚
     *
     * @param username
     * @param password
     * @return
     */
    private MykiSession obtainSessionAndActivation(String username, String password) {
        MykiSession session = MykiService.SESSION_CACHE.computeIfAbsent(genSessionKey(username, password), (k) -> {
            try {
                return mykiService.loginWithActivation(username, password);
            } catch (RuntimeException ex) {
                throw new ResponseStatusException(
                        HttpStatus.FORBIDDEN, "Login Failed!", ex);
            }
        });

        return session;
    }

    private String genSessionKey(String v1, String v2) {
        String combination = v1 + v2 + MykiService.MD5_SALT;
        return DigestUtils.md5DigestAsHex(combination.getBytes());
    }
}
