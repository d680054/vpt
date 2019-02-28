package com.hj.vpt.service;

import com.hj.vpt.model.myki.MykiInfo;
import com.hj.vpt.model.myki.MykiSession;
import com.hj.vpt.model.myki.MykiTransaction;
import net.jodah.expiringmap.ExpiringMap;

import java.io.IOException;
import java.util.List;
import java.util.Map;
import java.util.concurrent.TimeUnit;

/**
 * @author David.Zheng
 * @date 2019-01-28
 */
public interface MykiService {

    String MD5_SALT = "*E0qZ@%$0dXB";

    //Cache<String, MykiSession> SESSION_CACHE = Caffeine.newBuilder().expireAfterWrite(5, TimeUnit.MINUTES).build();

    Map<String, MykiSession> SESSION_CACHE = ExpiringMap.builder().expiration(10, TimeUnit.MINUTES).build();

    MykiSession login(String name, String password);

    MykiSession loginWithActivation(String name, String password);

    List<MykiInfo> manageCards(String sessionKey) throws IOException;

    List<MykiTransaction> getMykiTransactionByCardNumber(String sessionKey, String cn);

}
