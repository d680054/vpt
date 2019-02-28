package com.hj.vpt.service;

import com.hj.vpt.model.myki.MykiInfo;
import com.hj.vpt.model.myki.MykiSession;
import com.hj.vpt.model.myki.MykiTransaction;
import lombok.extern.slf4j.Slf4j;
import org.apache.commons.lang3.StringUtils;
import org.apache.commons.lang3.time.DateUtils;
import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.*;
import org.springframework.stereotype.Service;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.client.RestTemplate;

import java.io.IOException;
import java.text.ParseException;
import java.time.LocalDate;
import java.time.ZoneId;
import java.time.format.DateTimeFormatter;
import java.time.format.FormatStyle;
import java.util.*;

/**
 * @author David.Zheng
 * @date 2019-01-28
 */
@Slf4j
@Service
public class MykiServiceImpl implements MykiService {

    @Autowired
    private RestTemplate restTemplate;

    public static final String[] CARD_COLORS = new String[]{"background:#c2d840", "background:#55565a", "background:#b51d2b"};
    public static final String LOGIN_URL = "https://www.mymyki.com.au/NTSWebPortal/login.aspx";
    public static final String MYKI_ACCOUNT_URL = "https://www.mymyki.com.au/NTSWebPortal/Registered/MyMykiAccount.aspx?menu=My+myki+account";
    public static final String MYKI_DETAIL_URL = "https://www.mymyki.com.au/NTSWebPortal/Registered/";
    public static final String MYKI_TRANSACTION_URL = "https://www.mymyki.com.au/NTSWebPortal/Registered/ManageMyCard.aspx";
    public static final String USER_AGENT = "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/71.0.3578.98 Safari/537.36";

    public static final String LOGIN_EVENTVALIDATION = "/wEdAAmDwmmNS1MNA5XX+FJULgHzlWvBJAe1HI8ZSfy9T0VkSpOvawgEXWG/s6sgsnyFynPkgvH1Kg4LN23HnR3IXACbO0JWXv6tBEJgMVemNIyw0XYgfWVLH8Jr340y3cwZmyBymvxq4booWyuXnX6oEgklwf9sjnUNcWZG4cpRukWjQrmtGnnA8m02EiMAldqVbEJJ/jqfzpqoFCLu4LD4KZIiiEVyZA==";
    public static final String LOGIN_VIEWSTATE = "/wEPDwUKMTUwODg3NDI3Ng9kFgJmD2QWAgIDD2QWAgIBD2QWDAIBD2QWEmYPFgIeBGhyZWYFC34vaG9tZS5hc3B4ZAICDw8WAh4EVGV4dAUFTG9naW5kZAIDD2QWBGYPD2QWAh4Jb25rZXlkb3duBVZFbmFibGVFbnRlcigod2luZG93LmV2ZW50KSA/IHdpbmRvdy5ldmVudCA6IGFyZ3VtZW50c1swXSwnY3RsMDBfdXhIZWFkZXJfY3RsMDBfY3RsMDAnKWQCAg8QZGQWAWZkAgQPFgIeB29uY2xpY2sFEXtyZXR1cm4gUHJpbnQoKTt9ZAIFDxYEHgV0aXRsZQULTGFyZ2VyIFRleHQfAwUWe3JldHVybiBub3JtYWxGb250KCk7fWQCBg8PFgQeCEltYWdlVXJsBR5+L0luY2x1ZGUvSW1hZ2VzL2ljb25Mb2dpbi5naWYeB1Rvb2xUaXAFE0NsaWNrIGhlcmUgdG8gbG9naW5kZAIHDw8WAh8BZWRkAggPFgIeB1Zpc2libGVoZAIJD2QWAgIBDxYCHgNzcmMFGn4vSW5jbHVkZS9JbWFnZXMvbG9naW4uanBnZAIFD2QWAgIBEDwrAA0CAA8WAh4LXyFEYXRhQm91bmRnZAwUKwAJBR8wOjAsMDoxLDA6MiwwOjMsMDo0LDA6NSwwOjYsMDo3FCsAAhYOHwEFBEhvbWUeBVZhbHVlBQRIb21lHgtOYXZpZ2F0ZVVybAURfi8uLi9kZWZhdWx0LmFzcHgeB0VuYWJsZWRoHgpTZWxlY3RhYmxlZx4IRGF0YVBhdGgFIC8qW3Bvc2l0aW9uKCk9MV0vKltwb3NpdGlvbigpPTFdHglEYXRhQm91bmRnZBQrAAIWDh8BBQ9Ib3cgdG8gdXNlIG15a2kfCgUPSG93IHRvIHVzZSBteWtpHwsFIX4vLi4vSG93LXRvLXVzZS1teWtpL2RlZmF1bHQuYXNweB8MaB8NZx8OBSAvKltwb3NpdGlvbigpPTFdLypbcG9zaXRpb24oKT0yXR8PZxQrAAcFFzA6MCwwOjEsMDoyLDA6MywwOjQsMDo1FCsAAhYOHwEFCkFib3V0IG15a2kfCgUKQWJvdXQgbXlraR8LBSx+Ly4uL0hvdy10by11c2UtbXlraS9BYm91dC1teWtpL2RlZmF1bHQuYXNweB8MaB8NZx8OBTAvKltwb3NpdGlvbigpPTFdLypbcG9zaXRpb24oKT0yXS8qW3Bvc2l0aW9uKCk9MV0fD2dkFCsAAhYOHwEFClVzaW5nIG15a2kfCgUKVXNpbmcgbXlraR8LBSx+Ly4uL0hvdy10by11c2UtbXlraS9Vc2luZy1teWtpL2RlZmF1bHQuYXNweB8MaB8NZx8OBTAvKltwb3NpdGlvbigpPTFdLypbcG9zaXRpb24oKT0yXS8qW3Bvc2l0aW9uKCk9Ml0fD2dkFCsAAhYOHwEFClRoZSBmdXR1cmUfCgUKVGhlIGZ1dHVyZR8LBSt+L2NvbW1vbi9DTVMvVGhlRnV0dXJlLmFzcHg/bWVudT1UaGUgZnV0dXJlHwxoHw1nHw4FMC8qW3Bvc2l0aW9uKCk9MV0vKltwb3NpdGlvbigpPTJdLypbcG9zaXRpb24oKT0zXR8PZ2QUKwACFg4fAQUUTWFraW5nIG15a2kgeW91ciBrZXkfCgUUTWFraW5nIG15a2kgeW91ciBrZXkfCwU2fi8uLi9Ib3ctdG8tdXNlLW15a2kvTWFraW5nLW15a2kteW91ci1rZXkvZGVmYXVsdC5hc3B4HwxoHw1nHw4FMC8qW3Bvc2l0aW9uKCk9MV0vKltwb3NpdGlvbigpPTJdLypbcG9zaXRpb24oKT00XR8PZ2QUKwACFg4fAQUWSGVscGZ1bCB0aXBzIGFuZCBoaW50cx8KBRZIZWxwZnVsIHRpcHMgYW5kIGhpbnRzHwsFOH4vLi4vSG93LXRvLXVzZS1teWtpL0hlbHBmdWwtdGlwcy1hbmQtaGludHMvZGVmYXVsdC5hc3B4HwxoHw1nHw4FMC8qW3Bvc2l0aW9uKCk9MV0vKltwb3NpdGlvbigpPTJdLypbcG9zaXRpb24oKT01XR8PZ2QUKwACFg4fAQUJQWJvdXQgVFRBHwoFCUFib3V0IFRUQR8LBSt+Ly4uL0hvdy10by11c2UtbXlraS9BYm91dC1UVEEvZGVmYXVsdC5hc3B4HwxoHw1nHw4FMC8qW3Bvc2l0aW9uKCk9MV0vKltwb3NpdGlvbigpPTJdLypbcG9zaXRpb24oKT02XR8PZ2QUKwACFg4fAQUIR2V0IG15a2kfCgUIR2V0IG15a2kfCwUxfi9Db21tb24vZ2V0bXlraS9HZXRNeWtpT3B0aW9uLmFzcHg/bWVudT1HZXQgbXlraR8MZx8NZx8OBSAvKltwb3NpdGlvbigpPTFdLypbcG9zaXRpb24oKT0zXR8PZ2QUKwACFg4fAQULU2V0IHVwIG15a2kfCgULU2V0IHVwIG15a2kfCwUyfi9Db21tb24vYXV4aWxsYXJ5L3NldHVwbXlraS5hc3B4P21lbnU9U2V0IHVwIG15a2kfDGcfDWcfDgUgLypbcG9zaXRpb24oKT0xXS8qW3Bvc2l0aW9uKCk9NF0fD2cUKwAEBQswOjAsMDoxLDA6MhQrAAIWDh8BBQhBY3RpdmF0ZR8KBQhBY3RpdmF0ZR8LBTJ+L0NvbW1vbi9hdXhpbGxhcnkvQWN0aXZhdGVDYXJkLmFzcHg/bWVudT1BY3RpdmF0ZR8MaB8NZx8OBTAvKltwb3NpdGlvbigpPTFdLypbcG9zaXRpb24oKT00XS8qW3Bvc2l0aW9uKCk9MV0fD2dkFCsAAhYOHwEFCFJlZ2lzdGVyHwoFCFJlZ2lzdGVyHwsFNn4vQ29tbW9uL3JlZ2lzdGVyL1JlZ2lzdGVybXlraUFub255LmFzcHg/bWVudT1SZWdpc3Rlch8MZx8NZx8OBTAvKltwb3NpdGlvbigpPTFdLypbcG9zaXRpb24oKT00XS8qW3Bvc2l0aW9uKCk9Ml0fD2dkFCsAAhYOHwEFEVNldCB1cCB3ZWIgYWNjZXNzHwoFEVNldCB1cCB3ZWIgYWNjZXNzHwsFPH4vQ29tbW9uL3JlZ2lzdGVyL1NldHVwV2ViQWNjZXNzLmFzcHg/bWVudT1TZXQgdXAgd2ViIGFjY2Vzcx8MZx8NZx8OBTAvKltwb3NpdGlvbigpPTFdLypbcG9zaXRpb24oKT00XS8qW3Bvc2l0aW9uKCk9M10fD2dkFCsAAhYOHwEFC1RvcCB1cCBteWtpHwoFC1RvcCB1cCBteWtpHwsFPH4vQ29tbW9uL0Fub255bW91c1RvcFVwL2Fub255dG9wdXBteWtpLmFzcHg/bWVudT1Ub3AgdXAgbXlraR8MZx8NZx8OBSAvKltwb3NpdGlvbigpPTFdLypbcG9zaXRpb24oKT01XR8PZxQrAAIFAzA6MBQrAAIWDh8BBQ1DaG9vc2UgdG9wIHVwHwoFDUNob29zZSB0b3AgdXAfCwVAfi9Db21tb24vQW5vbnltb3VzVG9wVXAvYW5vbnlDaG9vc2VUb3BVcC5hc3B4P21lbnU9Q2hvb3NlIHRvcCB1cB8MZx8NZx8OBTAvKltwb3NpdGlvbigpPTFdLypbcG9zaXRpb24oKT01XS8qW3Bvc2l0aW9uKCk9MV0fD2dkFCsAAhYOHwEFFUNhcmQvQWNjb3VudCBSZXF1ZXN0cx8KBRVDYXJkL0FjY291bnQgUmVxdWVzdHMfCwU+fi9Db21tb24vQXV4aWxsYXJ5L0Zvcm1MaWJyYXJ5LmFzcHg/bWVudT1DYXJkL0FjY291bnQgUmVxdWVzdHMfDGcfDWcfDgUgLypbcG9zaXRpb24oKT0xXS8qW3Bvc2l0aW9uKCk9Nl0fD2cUKwAEBQswOjAsMDoxLDA6MhQrAAIWDh8BBRBBcHBseSBmb3IgcmVmdW5kHwoFEEFwcGx5IGZvciByZWZ1bmQfCwUlfi9Db21tb24vQ29tcGVuc2F0aW9uL1JlZnVuZG15a2kuYXNweB8MZx8NZx8OBTAvKltwb3NpdGlvbigpPTFdLypbcG9zaXRpb24oKT02XS8qW3Bvc2l0aW9uKCk9MV0fD2dkFCsAAhYOHwEFF0FwcGx5IGZvciByZWltYnVyc2VtZW50HwoFF0FwcGx5IGZvciByZWltYnVyc2VtZW50HwsFLH4vQ29tbW9uL0NvbXBlbnNhdGlvbi9SZWltYnVyc2VtZW50bXlraS5hc3B4HwxnHw1nHw4FMC8qW3Bvc2l0aW9uKCk9MV0vKltwb3NpdGlvbigpPTZdLypbcG9zaXRpb24oKT0yXR8PZ2QUKwACFg4fAQUMUmVwbGFjZSBteWtpHwoFDFJlcGxhY2UgbXlraR8LBSF+L0NvbW1vbi9SZXBsYWNlL1JlcGxhY2VNeWtpLmFzcHgfDGcfDWcfDgUwLypbcG9zaXRpb24oKT0xXS8qW3Bvc2l0aW9uKCk9Nl0vKltwb3NpdGlvbigpPTNdHw9nZBQrAAIWDh8BBRNDb21tdW5pdHkgZWR1Y2F0aW9uHwoFE0NvbW11bml0eSBlZHVjYXRpb24fCwUlfi8uLi9Db21tdW5pdHktZWR1Y2F0aW9uL2RlZmF1bHQuYXNweB8MaB8NZx8OBSAvKltwb3NpdGlvbigpPTFdLypbcG9zaXRpb24oKT03XR8PZxQrAAQFCzA6MCwwOjEsMDoyFCsAAhYOHwEFFkRpc2NvdmVyeSBjZW50cmUgZGlhcnkfCgUWRGlzY292ZXJ5IGNlbnRyZSBkaWFyeR8LBUh+L2NvbW1vbi9EaXNjb3ZlcnkvRGlzY292ZXJ5Q2VudGVyRGlhcnkuYXNweD9tZW51PURpc2NvdmVyeSBjZW50cmUgZGlhcnkfDGgfDWcfDgUwLypbcG9zaXRpb24oKT0xXS8qW3Bvc2l0aW9uKCk9N10vKltwb3NpdGlvbigpPTFdHw9nZBQrAAIWDh8BBRlCb29rIHRoZSBkaXNjb3ZlcnkgY2VudHJlHwoFGUJvb2sgdGhlIGRpc2NvdmVyeSBjZW50cmUfCwVKfi9jb21tb24vRGlzY292ZXJ5L0Jvb2tEaXNjb3ZlcnlDZW50ZXIuYXNweD9tZW51PUJvb2sgdGhlIGRpc2NvdmVyeSBjZW50cmUfDGgfDWcfDgUwLypbcG9zaXRpb24oKT0xXS8qW3Bvc2l0aW9uKCk9N10vKltwb3NpdGlvbigpPTJdHw9nZBQrAAIWDh8BBSVGdXR1cmUgbW9iaWxlIGRpc2NvdmVyeSBjZW50cmUgdmlzaXRzHwoFJUZ1dHVyZSBtb2JpbGUgZGlzY292ZXJ5IGNlbnRyZSB2aXNpdHMfCwVTfi9jb21tb24vRGlzY292ZXJ5L1ZpZXdGdXR1cmVWaXNpdHMuYXNweD9tZW51PUZ1dHVyZSBtb2JpbGUgZGlzY292ZXJ5IGNlbnRyZSB2aXNpdHMfDGgfDWcfDgUwLypbcG9zaXRpb24oKT0xXS8qW3Bvc2l0aW9uKCk9N10vKltwb3NpdGlvbigpPTNdHw9nZBQrAAIWDh8BBQpDb250YWN0IHVzHwoFCkNvbnRhY3QgdXMfCwUzfi9Db21tb24vQXV4aWxsYXJ5L0NvbnRhY3RpbmZvLmFzcHg/bWVudT1Db250YWN0IHVzHwxnHw1nHw4FIC8qW3Bvc2l0aW9uKCk9MV0vKltwb3NpdGlvbigpPThdHw9nFCsABQUPMDowLDA6MSwwOjIsMDozFCsAAhYOHwEFDENvbnRhY3QgbXlraR8KBQxDb250YWN0IG15a2kfCwUvfi9Db21tb24vQXV4aWxsYXJ5L0NvbnRhY3R1cy5hc3B4P21lbnU9RmVlZGJhY2sfDGcfDWcfDgUwLypbcG9zaXRpb24oKT0xXS8qW3Bvc2l0aW9uKCk9OF0vKltwb3NpdGlvbigpPTFdHw9nZBQrAAIWDh8BBRRDaGVjayBzdGF0dXMgcmVxdWVzdB8KBRRDaGVjayBzdGF0dXMgcmVxdWVzdB8LBUh+L0NvbW1vbi9BdXhpbGxhcnkvQW5vbnltb3VzUmVxdWVzdFN0YXR1cy5hc3B4P21lbnU9Q2hlY2sgc3RhdHVzIHJlcXVlc3QfDGgfDWcfDgUwLypbcG9zaXRpb24oKT0xXS8qW3Bvc2l0aW9uKCk9OF0vKltwb3NpdGlvbigpPTJdHw9nZBQrAAIWDh8BBQtTcG9uc29yc2hpcB8KBQtTcG9uc29yc2hpcB8LBSh+Ly4uL0NvbnRhY3QtdXMvU3BvbnNvcnNoaXAvZGVmYXVsdC5hc3B4HwxoHw1nHw4FMC8qW3Bvc2l0aW9uKCk9MV0vKltwb3NpdGlvbigpPThdLypbcG9zaXRpb24oKT0zXR8PZ2QUKwACFg4fAQUMT3VyIHBhcnRuZXJzHwoFDE91ciBwYXJ0bmVycx8LBSl+Ly4uL0NvbnRhY3QtdXMvT3VyLXBhcnRuZXJzL2RlZmF1bHQuYXNweB8MaB8NZx8OBTAvKltwb3NpdGlvbigpPTFdLypbcG9zaXRpb24oKT04XS8qW3Bvc2l0aW9uKCk9NF0fD2dkZGQCCQ9kFgQCAQ8WAh8BZWQCAg9kFgICBQ8PZBYCHwMFG3tyZXR1cm4gVmFsaWRhdGVCcm93c2VyKCk7fWQCCw9kFgICAQ8WAh8BBeUBPCEtLSBHZW5lcmF0ZWQgYnkgWFN0YW5kYXJkIHZlcnNpb24gMi4wLjAuMCBvbiAyMDEzLTEwLTI5VDEyOjIxOjUzIC0tPjxwPjxpbWcgYWx0PSJZb3UncmUgYWx3YXlzIHJlYWR5IHRvIHRyYXZlbCB3aXRoIG15a2kgYXV0byB0b3AgdXAuIiBoZWlnaHQ9IjI5OSIgaWQ9ImltZ19BZHZlcnRpc2UiIHJ1bmF0PSJzZXJ2ZXIiIHNyYz0ibXlraS1BdXRvLVRvcC1VcC5qcGciIHdpZHRoPSIxMzYiIC8+PC9wPmQCDQ9kFgICAQ8PFgIfB2hkFgpmDw8WAh8BZWRkAgIPEGRkFgFmZAIEDw9kFgIfAwUhe3JldHVybiBnZXRDb21hbmROYW1lKCdVcGRhdGUnKTt9ZAIFDw9kFgIfAwUhe3JldHVybiBnZXRDb21hbmROYW1lKCdTdWJtaXQnKTt9ZAIGDw9kFgIfAwUne3JldHVybiBDb25maXJtTmV3U2VhcmNoKCdOZXdTZWFyY2gnKTt9ZAIPD2QWAgIBD2QWAgIPDxYCHwEFBDIwMTlkGAEFHl9fQ29udHJvbHNSZXF1aXJlUG9zdEJhY2tLZXlfXxYBBRljdGwwMCR1eEhlYWRlciR1eExvZ2luSW1nh0JEXT2mt4FKxYRSj95yu2WQUJY=";

    @Override
    public MykiSession login(String username, String password) {
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_FORM_URLENCODED);
        headers.set("User-Agent", USER_AGENT);

        MultiValueMap<String, String> p = new LinkedMultiValueMap<>();
        p.add("ctl00$uxContentPlaceHolder$uxUsername", username);
        p.add("ctl00$uxContentPlaceHolder$uxPassword", password);
        p.add("ctl00$uxContentPlaceHolder$uxLogin", "Login");
        p.add("__EVENTVALIDATION", LOGIN_EVENTVALIDATION);
        p.add("__VIEWSTATE", LOGIN_VIEWSTATE);

        //提交请求
        HttpEntity<MultiValueMap<String, String>> entity = new HttpEntity<MultiValueMap<String, String>>(p, headers);
        HttpEntity<String> response = restTemplate.exchange(LOGIN_URL, HttpMethod.POST, entity, String.class);

        if (((ResponseEntity<String>) response).getStatusCode().is2xxSuccessful()) {
            throw new RuntimeException();
        }
        HttpHeaders respheaders = response.getHeaders();
        List<String> set_cookie = respheaders.get(HttpHeaders.SET_COOKIE);
        StringBuilder cookie = new StringBuilder();
        set_cookie.forEach(s -> cookie.append(StringUtils.replaceIgnoreCase(s, "HTTPOnly", "")));
        MykiSession session = new MykiSession();
        session.setCookie(cookie.toString());

        log.info("generated new session");
        return session;
    }


    @Override
    public List<MykiInfo> manageCards(String sessionKey) throws IOException {
        long a = System.currentTimeMillis();
        MykiSession mykiSession = SESSION_CACHE.get(sessionKey);

        List<MykiInfo> mykiInfoList = new ArrayList<>();
        Map<String, String> body = new HashMap<>();
        body.put("ctl00$ScriptManager1", "ctl00$uxContentPlaceHolder$Panel|ctl00$uxContentPlaceHolder$uxTimer");
        body.put("__EVENTTARGET", "ctl00$uxContentPlaceHolder$uxTimer");
        body.put("__ASYNCPOST", "true");

        Document doc = Jsoup.connect(MYKI_ACCOUNT_URL).userAgent(USER_AGENT).ignoreHttpErrors(true)
                .header("Cookie", mykiSession.getCookie()).data(body).timeout(20000).post();
        Element mykiTable = doc.getElementById("ctl00_uxContentPlaceHolder_uxMyCards");

        Elements trs = mykiTable.getElementsByTag("tr");
        int index = 0;
        for (Element tr : trs) {
            MykiInfo mykiInfo = new MykiInfo();
            Elements tds = tr.getElementsByTag("td");
            if (tds.size() > 3) {
                mykiInfo.setCardNum(tds.get(0).text());
                mykiInfo.setHolder(tds.get(1).text());
                mykiInfo.setMykiMoney(tds.get(2).text());
                mykiInfo.setMykiPass(tds.get(3).text());
                mykiInfo.setColor(CARD_COLORS[(3 + index++) % 3]);
                mykiInfo.setSelfLink(tds.get(0).getElementsByTag("a").get(0).attr("href"));
                mykiInfoList.add(mykiInfo);
            }
        }

        log.info("manageCards:" + (System.currentTimeMillis() - a));

        mykiInfoList.stream().forEach(mykiInfo -> {
            this.getCardDetail(sessionKey, mykiInfo);
        });

        return mykiInfoList;
    }

    /**
     * get the transaction by card number
     *
     * @param sessionKey
     * @param cn
     * @return
     */
    public List<MykiTransaction> getMykiTransactionByCardNumber(String sessionKey, String cn) {

        long a = System.currentTimeMillis();
        MykiSession mykiSession = SESSION_CACHE.get(sessionKey);
        List<MykiTransaction> mykiTransactions = new ArrayList<>();
        try {
            String url = "https://www.mymyki.com.au/NTSWebPortal/Registered/MYTransactionsInfo.aspx?cn=" + cn;
            //String url = "http://localhost:8081/NTSWebPortal/Registered/MYTransactionsInfo.aspx?cn="+ cn;
            Document doc = Jsoup.connect(url).userAgent(USER_AGENT).header("Cookie", mykiSession.getCookie()).followRedirects(false).timeout(20000).get();
            Element detailTable = doc.getElementById("ctl00_uxContentPlaceHolder_uxMykiTxnHistory");
            if (detailTable != null) {
                Elements trs = detailTable.getElementsByTag("tr");
                for (Element tr : trs) {
                    Elements tds = tr.getElementsByTag("td");
                    if (tds.size() > 7) {
                        String date = tds.get(0).text();
                        String formattedDate = DateTimeFormatter.ofLocalizedDate(FormatStyle.FULL).format(LocalDate.parse(date, DateTimeFormatter.ofPattern("dd/MM/yyyy")));

                        MykiTransaction mykiTransaction = mykiTransactions.stream().filter(t -> t.getDate().equals(formattedDate)).findAny().orElseGet(() -> {
                            MykiTransaction newMykiTransaction = new MykiTransaction();
                            mykiTransactions.add(newMykiTransaction);
                            return newMykiTransaction;
                        });
                        mykiTransaction.setDate(formattedDate);
                        MykiTransaction.TransactionDetail transactionDetail = new MykiTransaction.TransactionDetail();
                        transactionDetail.setTime(StringUtils.substringBeforeLast(tds.get(1).text(), ":"));
                        transactionDetail.setType(tds.get(2).text());
                        transactionDetail.setService(tds.get(3).text());
                        transactionDetail.setZone(StringUtils.remove(tds.get(4).text(), "-"));
                        transactionDetail.setDesc(StringUtils.remove(tds.get(5).text(), "-"));
                        transactionDetail.setCredit(StringUtils.remove(tds.get(6).text(), "-"));
                        transactionDetail.setDebit(StringUtils.remove(tds.get(7).text(), "-"));
                        transactionDetail.setBalance(tds.get(8).text());
                        mykiTransaction.addTransactionDetail(transactionDetail);
                    }
                }

            }
        } catch (IOException e) {
            e.printStackTrace();
        }

        log.info("transaction:" + (System.currentTimeMillis() - a));
        return mykiTransactions;
    }

    /**
     * @param sessionKey
     * @param mykiInfo
     * @return
     */
    private MykiInfo getCardDetail(String sessionKey, MykiInfo mykiInfo) {
        MykiSession mykiSession = SESSION_CACHE.get(sessionKey);
        String url = StringUtils.replaceIgnoreCase(MYKI_DETAIL_URL + mykiInfo.getSelfLink(), "Manage my card", "Manage%20my%20card");
        try {
            Document doc = Jsoup.connect(url).userAgent(USER_AGENT).header("Cookie", mykiSession.getCookie()).timeout(15000).get();

            mykiSession.setEventValidation(doc.getElementById("__EVENTVALIDATION").val());
            mykiSession.setViewState(doc.getElementById("__VIEWSTATE").val());
            SESSION_CACHE.put(sessionKey, mykiSession);

            Element detailTable = doc.getElementById("ctl00_uxContentPlaceHolder_uxCardDetailsPnl");
            if (detailTable != null) {
                Element tbody = detailTable.tagName("tbody");
                mykiInfo.setType(tbody.select("td:matches(type)").get(0).nextElementSibling().text());
                mykiInfo.setExpiry(tbody.select("td:matches(expiry)").get(0).nextElementSibling().text());
                mykiInfo.setStatus(tbody.select("td:matches(status)").get(0).nextElementSibling().text());
                mykiInfo.setLastTransaction(tbody.select("td:matches(transaction)").get(0).nextElementSibling().text());

                Date date = DateUtils.parseDate(mykiInfo.getLastTransaction(), "dd MMM yyyy hh:mm:ss a");
                LocalDate lastTransDate = date.toInstant().atZone(ZoneId.of("Australia/Sydney")).toLocalDate();

                if (lastTransDate.plusMonths(6).isAfter(LocalDate.now())) {
                    log.info("the num:" + mykiInfo.getCardNum());
                    this.getMykiTransaction(mykiSession, mykiInfo);
                }
            }
        } catch (IOException | ParseException e) {
            e.printStackTrace();
        }

        return mykiInfo;
    }

    private void getMykiTransaction(MykiSession mykiSession, MykiInfo mykiInfo) {
        List<MykiTransaction> mykiTransactions = new ArrayList<>();

        Map<String, String> p = new HashMap<>();
        p.put("__EVENTTARGET", "ctl00$uxContentPlaceHolder$uxMyTransactions");
        p.put("ctl00$uxContentPlaceHolder$uxCardList", mykiInfo.getCardNum());
        p.put("__EVENTVALIDATION", mykiSession.getEventValidation());
        p.put("__VIEWSTATE", mykiSession.getViewState());

        try {
            Document doc = Jsoup.connect(MYKI_TRANSACTION_URL).userAgent(USER_AGENT).header("Cookie", mykiSession.getCookie()).data(p).timeout(10000).followRedirects(true).post();
            Element detailTable = doc.getElementById("ctl00_uxContentPlaceHolder_uxMykiTxnHistory");
            if (detailTable != null) {
                Elements trs = detailTable.getElementsByTag("tr");
                for (Element tr : trs) {
                    Elements tds = tr.getElementsByTag("td");
                    if (tds.size() > 7) {
                        String date = tds.get(0).text();
                        String formattedDate = DateTimeFormatter.ofLocalizedDate(FormatStyle.FULL).format(LocalDate.parse(date, DateTimeFormatter.ofPattern("dd/MM/yyyy")));

                        MykiTransaction mykiTransaction = mykiTransactions.stream().filter(t -> t.getDate().equals(formattedDate)).findAny().orElseGet(() -> {
                            MykiTransaction newMykiTransaction = new MykiTransaction();
                            mykiTransactions.add(newMykiTransaction);
                            return newMykiTransaction;
                        });
                        mykiTransaction.setDate(formattedDate);
                        MykiTransaction.TransactionDetail transactionDetail = new MykiTransaction.TransactionDetail();
                        transactionDetail.setTime(StringUtils.substringBeforeLast(tds.get(1).text(), ":"));
                        transactionDetail.setType(tds.get(2).text());
                        transactionDetail.setService(tds.get(3).text());
                        transactionDetail.setZone(StringUtils.remove(tds.get(4).text(), "-"));
                        transactionDetail.setDesc(StringUtils.remove(tds.get(5).text(), "-"));
                        transactionDetail.setCredit(StringUtils.remove(tds.get(6).text(), "-"));
                        transactionDetail.setDebit(StringUtils.remove(tds.get(7).text(), "-"));
                        transactionDetail.setBalance(tds.get(8).text());
                        mykiTransaction.addTransactionDetail(transactionDetail);
                    }
                }
                mykiInfo.setTransactions(mykiTransactions);
            }
        } catch (IOException e) {
            e.printStackTrace();
        }

    }


    /**
     * login and active the session
     *
     * @param username
     */
    public MykiSession loginWithActivation(String username, String password) {

        long a = System.currentTimeMillis();
        MykiSession mykiSession = this.login(username, password);
        HttpHeaders headers = new HttpHeaders();
        headers.set("Cookie", mykiSession.getCookie());
        headers.setContentType(MediaType.APPLICATION_FORM_URLENCODED);
        headers.set("User-Agent", USER_AGENT);
        MultiValueMap<String, String> p = new LinkedMultiValueMap<>();
        p.add("ctl00$ScriptManager1", "ctl00$uxContentPlaceHolder$Panel|ctl00$uxContentPlaceHolder$uxTimer");
        p.add("__EVENTTARGET", "ctl00$uxContentPlaceHolder$uxTimer");
        p.add("__ASYNCPOST", "true");
        HttpEntity<MultiValueMap<String, String>> entity = new HttpEntity<MultiValueMap<String, String>>(p, headers);

        restTemplate.exchange(MYKI_ACCOUNT_URL, HttpMethod.POST, entity, String.class);
        log.info("activation:" + (System.currentTimeMillis() - a));

        return mykiSession;

    }
}
