package com.hj.vpt.service;

import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.TypeReference;
import com.hj.vpt.model.Run;
import com.hj.vpt.model.RunWrapper;
import com.hj.vpt.utils.URLHelper;
import lombok.extern.slf4j.Slf4j;
import org.apache.commons.io.FileUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import javax.annotation.PostConstruct;
import java.io.File;
import java.io.IOException;
import java.nio.charset.Charset;
import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;

/**
 * @author David.Zheng
 * @date 2019-01-13
 */
@Slf4j
@Service
public class InitServiceImpl {

    @Autowired
    private RestTemplate restTemplate;

    public static Map<Integer, Run> TERMINAL_MAP = new ConcurrentHashMap<>();

    public static final String FILE_LOCATION = "./vpt/data/";

    /**
     * TODO: maybe don't need to cache
     *
     * @throws Exception total 61969 61970, 62579
     */
    @PostConstruct
    @Scheduled(cron = "0 3 0 1/1 * *", zone = "Australia/Melbourne")
    public void initialiseTerminals() throws Exception {
        loadFromFile();
        //loadFromInternet();
    }


    /**
     * load terminals from local file
     *
     * @throws IOException
     */
    private void loadFromFile() throws IOException {
        File file = new File(FILE_LOCATION +"terminals.json");
        String json = FileUtils.readFileToString(file, Charset.forName("UTF-8"));
        TERMINAL_MAP = JSON.parseObject(json, new TypeReference<Map<Integer, Run>>() {
        });
    }

    /**
     * load terminals from internet
     *
     * @throws IOException
     */
    private void loadFromInternet() throws IOException {
        log.info("loading all the Terminals");
        Map<Integer, List<Integer>> routeMap = new HashMap();
        routeMap.put(0, Arrays.asList(1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 13, 14, 15, 16, 17, 1482));
        routeMap.put(3, Arrays.asList(1512, 1706, 1710, 1717, 1718, 1719, 1720, 1721, 1722, 1723, 1724, 1725, 1726, 1727, 1728, 1731, 1732, 1733, 1734, 1735, 1737, 1738, 1740, 1744, 1745, 1749, 1751, 1755, 1756, 1758, 1759, 1760, 1761, 1762, 1767, 1768, 1773, 1774, 1775, 1776, 1782, 1783, 1784, 1823, 1824, 1837, 1838, 1848, 1849, 1853, 1908, 1912, 1914, 1915, 4871, 5838, 7601));

        routeMap.forEach((route, routeIds) -> {
            routeIds.forEach(routeId -> {
                String uri = String.format(URLHelper.URI_RUN_BY_ROUTE, routeId, route);
                try {
                    String signedURL = URLHelper.buildSignedURL(uri);
                    RunWrapper list = restTemplate.getForObject(signedURL, RunWrapper.class);
                    list.getRuns().forEach((run -> {
                        TERMINAL_MAP.put(run.getRunId(), run);
                    }));
                } catch (Exception e) {
                    e.printStackTrace();
                }
            });
        });

        File file = new File(FILE_LOCATION +"terminals.json");
        String json = JSON.toJSONString(TERMINAL_MAP);
        FileUtils.writeStringToFile(file, json, Charset.forName("UTF-8"));

        log.info("After initialization the {} terminals", TERMINAL_MAP.size());
    }

}
