package com.hj.vpt;

import com.hj.vpt.utils.PTVUtils;
import lombok.extern.slf4j.Slf4j;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cache.CacheManager;
import org.springframework.cache.annotation.CacheEvict;
import org.springframework.cache.annotation.EnableCaching;
import org.springframework.cache.concurrent.ConcurrentMapCache;
import org.springframework.cache.support.SimpleCacheManager;
import org.springframework.context.annotation.Bean;
import org.springframework.scheduling.annotation.EnableScheduling;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.web.client.RestTemplate;

import java.util.Arrays;
import java.util.Map;

@Slf4j
@EnableCaching
@EnableScheduling
@SpringBootApplication
public class VPTApplication {

    public static final String DEP_CACHE = "departures";

    public static final String STATIC_CACHE = "static";

    public static void main(String[] args) throws Exception {
        SpringApplication.run(VPTApplication.class, args);
//        PTVUtils ptvUtils = new PTVUtils();
//        ptvUtils.writeJSONToFile(ptvUtils.generateStopZone());
    }

    @Bean
    RestTemplate restTemplate() {
        return new RestTemplate();
    }

    @Bean
    public CacheManager cacheManager() {
        SimpleCacheManager cm = new SimpleCacheManager();
        cm.setCaches(Arrays.asList(
                new ConcurrentMapCache(DEP_CACHE),
                new ConcurrentMapCache(STATIC_CACHE)));
        return cm;

    }

    @CacheEvict(allEntries = true, value = {DEP_CACHE})
    @Scheduled(cron = "0 0 0 * * *",zone = "Australia/Melbourne")
    public void reportCacheEvict() {
        System.out.println("Flush Cache: " + DEP_CACHE);
    }


}

