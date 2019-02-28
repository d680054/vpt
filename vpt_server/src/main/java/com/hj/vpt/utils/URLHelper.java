package com.hj.vpt.utils;

import javax.crypto.Mac;
import javax.crypto.spec.SecretKeySpec;
import java.security.Key;

/**
 * @author David.Zheng
 * @date 2019-01-08
 */
public class URLHelper {

    private final static String BASE_URL = "http://timetableapi.ptv.vic.gov.au";

    private final static String PRIVATE_KEY = "5da6816b-8063-4748-8fa8-d63c9811d3e9";

    private final static int DEVELOPER_ID = 3000969;

    public final static String URI_DEP_BY_ROUTE_STOP = "/v3/departures/route_type/%s/stop/%s/route/%s?max_results=3";

    public final static String URI_DEP_BY_STOP = "/v3/departures/route_type/%s/stop/%s";

    public final static String URI_STOP_BY_ROUTE = "/v3/stops/route/%s/route_type/%s";

    public final static String URI_RUN_BY_ROUTE ="/v3/runs/route/%s/route_type/%s";

    public final static String URI_DISRUPTION_BY_ROUTE = "/v3/disruptions";

    public final static String URI_PATTERN_BY_RUN_ROUTE = "/v3/pattern/run/%s/route_type/%s";

    public final static String URI_DIRECTION_BY_ROUTE = "/v3/directions/route/%s";

    public final static String URI_STOP_BY_GPS = "/v3/stops/location/%s,%s?route_types=0&max_results=5&max_distance=10000";

    public final static String URI_STOP_INFO = "/v3/stops/%s/route_type/0?stop_location=true&stop_amenities=true&stop_accessibility=true&stop_contact=true&stop_ticket=true";

    public static String buildSignedURL(final String uri) throws Exception {
        String HMAC_SHA1_ALGORITHM = "HmacSHA1";
        StringBuffer uriWithDeveloperID = new StringBuffer().append(uri).append(uri.contains("?") ? "&" : "?")
                .append("devid=" + DEVELOPER_ID);
        byte[] keyBytes = PRIVATE_KEY.getBytes();
        byte[] uriBytes = uriWithDeveloperID.toString().getBytes();
        Key signingKey = new SecretKeySpec(keyBytes, HMAC_SHA1_ALGORITHM);
        Mac mac = Mac.getInstance(HMAC_SHA1_ALGORITHM);
        mac.init(signingKey);
        byte[] signatureBytes = mac.doFinal(uriBytes);
        StringBuffer signature = new StringBuffer(signatureBytes.length * 2);
        for (byte signatureByte : signatureBytes) {
            int intVal = signatureByte & 0xff;
            if (intVal < 0x10) {
                signature.append("0");
            }
            signature.append(Integer.toHexString(intVal));
        }
        StringBuffer url = new StringBuffer(BASE_URL).append(uri).append(uri.contains("?") ? "&" : "?")
                .append("devid=" + DEVELOPER_ID).append("&signature=" + signature.toString().toUpperCase());
        return url.toString();
    }
}
