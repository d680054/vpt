package com.hj.vpt.utils;

import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.TypeReference;
import com.google.common.collect.HashBiMap;
import com.hj.vpt.model.*;
import lombok.extern.slf4j.Slf4j;
import org.apache.commons.io.FileUtils;
import org.apache.commons.lang3.StringUtils;
import org.springframework.web.client.HttpClientErrorException;
import org.springframework.web.client.RestClientException;
import org.springframework.web.client.RestTemplate;

import java.io.File;
import java.io.IOException;
import java.nio.charset.Charset;
import java.util.*;
import java.util.concurrent.ConcurrentHashMap;

/**
 * This is class is used to initialise all the static data from ptv.
 *
 * @author David.Zheng
 * @date 2019-03-03
 */
@Slf4j
public class VPTUtils {

    public static final String ROUTE_STOP = "/v3/stops/route/%s/route_type/%s";

    public static final String STOP_DETAIL = "/v3/stops/%s/route_type/%s?stop_amenities=true&stop_ticket=true";

    public static final String FILE_LOCATION = "./vpt/data/";

    private RestTemplate restTemplate = new RestTemplate();


    /**
     * fetch all the directions
     *
     * @throws Exception
     */
    public void fetchDirection() throws Exception {
        log.info("loading all the Terminals");
        Map<String, String> DIRECTION_MAP = new ConcurrentHashMap<>();
        Map<Integer, List<Integer>> routeMap = new HashMap();
        routeMap.put(0, Arrays.asList(1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 13, 14, 15, 16, 17, 1482));
        //routeMap.put(3, Arrays.asList(1512, 1706, 1710, 1717, 1718, 1719, 1720, 1721, 1722, 1723, 1724, 1725, 1726, 1727, 1728, 1731, 1732, 1733, 1734, 1735, 1737, 1738, 1740, 1744, 1745, 1749, 1751, 1755, 1756, 1758, 1759, 1760, 1761, 1762, 1767, 1768, 1773, 1774, 1775, 1776, 1782, 1783, 1784, 1823, 1824, 1837, 1838, 1848, 1849, 1853, 1908, 1912, 1914, 1915, 4871, 5838, 7601));
        //routeMap.put(2, Arrays.asList(786,789,821,822,823,825,834,841,844,845,847,848,850,851,854,855,860,861,862,867,869,870,884,927,928,929,931,932,935,937,939,945,946,948,950,952,953,954,955,957,959,960,961,962,963,964,970,971,972,973,974,975,977,979,980,982,999,1000,1007,1013,1015,1019,1023,1026,1030,1123,1143,1150,1173,1174,1175,1176,1294,1295,1296,1297,1300,1301,1302,1303,1304,1305,1306,1307,1308,1309,1310,1311,1312,1314,1318,1319,1320,1322,1341,1342,1344,1345,1346,1350,1355,1357,1365,1373,1374,1375,1379,1396,1399,1400,1439,1440,1441,1443,1444,1446,1447,1448,1449,1450,1452,1461,1464,1469,1470,1474,1475,1493,1494,1495,1506,1510,1511,1515,1524,1532,1533,1538,1539,1545,1551,1571,1574,1575,1577,1579,1586,1587,1595,1596,1608,1609,1610,1611,1624,1632,1658,1659,1660,1664,1665,1666,1667,1673,1878,1879,1909,1910,1916,1917,1918,1921,1925,1935,1947,1991,1995,2055,2079,2089,2126,2285,2293,2294,2295,2339,2342,2349,2505,2768,2808,2813,2895,2896,2897,2913,2916,2919,2922,2925,2928,2931,2934,2937,2943,2982,3287,3321,3322,3324,3346,3354,3365,3374,3377,3380,3394,3398,3401,3408,3411,3420,3423,3438,3448,3453,3483,4543,4663,4664,4711,4733,4736,4745,4747,4748,4755,4757,4758,4761,4769,4780,4786,4789,4792,4795,4798,4802,4805,4849,4855,4861,4864,4896,5023,5038,5041,5048,5051,5052,5055,5062,5063,5069,5105,5108,5125,5126,5132,5135,5331,5332,5333,5334,5335,5368,5369,5370,5371,5375,5377,5378,5379,5382,5385,5415,5460,5480,5481,5510,5537,5540,5589,5607,5634,5664,5671,5675,5681,5684,5700,5701,5704,5722,5738,5741,5746,5747,5748,5767,5768,5770,5809,5812,5814,5827,5834,5837,5841,5843,5844,5845,5846,6572,6647,6648,6649,6716,7318,7395,7440,7441,7442,7445,7446,7453,7455,7456,7461,7462,7464,7522,7531,7613,7617,7620,7624,7627,7700,7703,7723,7726,7762,7765,7768,7771,7772,7776,7779,7782,7785,7788,7791,7797,7891,7953,8074,8080,8084,8095,8114,8118,8122,8125,8128,8132,8135,8139,8142,8174,8177,8185,8224,8229,8232,8233,8243,8246,8250,8263,8272,8275,8302,8306,8307,8317,8361,8362,8365,8373,8399,8430,8435,8452,8457,8462,8482,8483,8484,8485,8486,8487,8488,8489,8490,8493,8494,8507,8508,8514,8517,8561,8564,8565,8567,8568,8569,8570,8571,8572,8579,8582,8590,8591,8596,8599,8602,8606,8611,8614,8615,8618,8621,8624,8627,8630,8639,8645,8648,8651,8654,8657,8660,8677,8680,8681,8682,8700,8708,8710,8714,8765,8871,8878,8879,8883,8887,8912,8922,8923,8924,8925,8934,8983,8988,10827,10830,10839,10842,10846,10854,10861,10863,10864,10900,10903,10904,10917,10923,10924,10927,10933,10937,10940,10952,10955,10958,10961,10964,10967,10980,10990,10994,11003,11096,11109,11112,11118,11121,11205,11286,11289,11290,11291,11296,11297,11300,11303,11304,11305,11306,11307,11308,11309,11313,11318,11319,11320,11323,11326,11329,11337,11342,11354,11357,11360,11363,11366,11369,11372,11375,11378,11381,11384,11387,11390,11393,11397,11446,11455,11456,11457,11458,11461,11462,11464,11465,11466,11472,11473,11474,11475,11478,11504,11507,11510,11513,11516,11519,11523,11524,11525,11526,11527,11528,11532,11536,11539,11552,11575,11578,11591,11597,11600,11603,11606,11609,11616,11617,11618,11619,11620,11621,11622,11623,11624,11625,11626,11627,11629,11630,11631,11632,11633,11634,11635,11653,11664,11694,11697,11700,11702,11703,11704,11711,11713,11714,11716,12743,12746,12749,12750,12753,12766,12767,12769,12779,12780,13024,13025,13027,13028,13057,13066,13067,13088,13089,13090,13091,13092,13095,13107,13109,13113,13115,13117,13119,13121,13127,13132,13134,13135,13138,13140,13165,13166,13167,13168,13169,13170,13171,13172,13173,13174,13175,13176,13177,13178,13179,13251,13252,13253,13254,13255,13256,13257,13263,13266,13267,13268,13269,13270,13271,13281,13343,13349,13350,13352,13353,13408,13426,13454,13455,13457,13459,13467));

        routeMap.forEach((route, routeIds) -> {
            routeIds.forEach(routeId -> {
                String uri = String.format(URLHelper.URI_DIRECTION_BY_ROUTE, routeId);
                try {
                    String signedURL = URLHelper.buildSignedURL(uri);
                    DirectionWrapper list = restTemplate.getForObject(signedURL, DirectionWrapper.class);
                    list.getDirections().forEach(direction -> {
                        DIRECTION_MAP.put(String.valueOf(direction.getDirectionId()), direction.getDirectionName());
                    });
                } catch (Exception e) {
                    e.printStackTrace();
                }
            });
        });

        writeJSONToFile(DIRECTION_MAP, "./directions.json", false);
        log.info("After initialization the {} directions", DIRECTION_MAP.size());
    }


    /**
     * initialise the stops
     * <p>
     * STOP_MAP---> "Box Hill": 1026,
     * ROUTE_STOP_MAP --->
     *
     * @throws Exception
     */
    public void initializeStops(int routeType) throws Exception {
        log.info("loading all the stops");
        HashBiMap<Integer, String> STOP_MAP = HashBiMap.create();
        Map<String, Integer> STOP_REVERSE_MAP = HashBiMap.create();
        Map<Integer, List<Integer>> ROUTE_STOP_MAP = new ConcurrentHashMap<>();
        //int[] routeIds = new int[]{1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 13, 14, 15, 16, 17};  //"station"
        //int[] routeIds = new int[]{1512, 1706, 1710, 1717, 1718, 1719, 1720, 1721, 1722, 1723, 1724, 1725, 1726, 1727, 1728, 1731, 1732, 1733, 1734, 1735, 1737, 1738, 1740, 1744, 1745, 1749, 1751, 1755, 1756, 1758, 1759, 1760, 1761, 1762, 1767, 1768, 1773, 1774, 1775, 1776, 1782, 1783, 1784, 1823, 1824, 1837, 1838, 1848, 1849, 1853, 1908, 1912, 1914, 1915, 4871, 5838, 7601};
        int[] routeIds = new int[]{786,789};
        for (int i : routeIds) {
            String uri = String.format(URLHelper.URI_STOP_BY_ROUTE, i, routeType);
            String signedURL = URLHelper.buildSignedURL(uri);
            StopWrapper list = restTemplate.getForObject(signedURL, StopWrapper.class);
            list.getStops().forEach(stop -> {
                //STOP_Map
                String name = stop.getStopName();//StringUtils.removeEndIgnoreCase(stop.getStopName(), "railway station").trim();
                try {
                    STOP_MAP.putIfAbsent(stop.getStopId(), name);
                }catch(IllegalArgumentException e) {
                    STOP_MAP.putIfAbsent(stop.getStopId(), name+Math.random()+"harded");
                }
                //ROUTE_STOP_MAP
                ROUTE_STOP_MAP.computeIfAbsent(stop.getStopId(), x -> new ArrayList<>()).add(i);
            });
        }

        STOP_REVERSE_MAP = STOP_MAP.inverse();
        writeJSONToFile(STOP_REVERSE_MAP, "bus_stopName.json", false);
        writeJSONToFile(ROUTE_STOP_MAP, "bus_routeStop.json", false);

        log.info("After initialization the {} stops", STOP_MAP.size());
    }


    /**
     * initialise the routes
     * <p>
     * 8 - hursbridge line
     * 1 - alamein line
     *
     * @param routeType
     * @return
     */
    public List<RouteWrapper.Route> initRoutes(int routeType) {
        String url = "https://timetableapi.ptv.vic.gov.au/v3/routes?devid=3000969&signature=602DAAA6BFB77BC2DF5B40FA15F3953FD974F3DF";
        RouteWrapper routeWrapper = restTemplate.getForObject(url, RouteWrapper.class);
        log.info("Fetch Routes: " + routeWrapper.getRoutes().size());
        StringBuilder routeIds = new StringBuilder();
        routeWrapper.getRoutes().forEach(route -> {
            if (route.getRouteType() == routeType) {
                routeIds.append(route.getRouteId() + ",");
            }
        });
        log.info("the routeids: " + StringUtils.removeEnd(routeIds.toString(), ","));
        return routeWrapper.getRoutes();
    }

    /**
     * Generate the stop zone information
     * taxi, toilet, cctv, info
     *
     * @return
     */
    public Map generateStopZone() throws IOException {
        List<Stop> stops = loadStopList("basic_stops.json");//loadAllStops();
        Map<String, StopInfo> map = loadStopInfo();
        int i = map.size();
        for (; i < stops.size(); i++) {
            Stop stop = stops.get(i);
            StopInfo stopInfo = null;
            try {
                stopInfo = getStopInfo(stop);
            } catch (InterruptedException e) {
                break;
            }
            map.put(String.valueOf(stopInfo.getStopId()), stopInfo);
        }

        this.writeJSONToFile(map, "stopInfo.json", false);
        log.info("total size: " + stops.size());
        return map;
    }


    /**
     * find all the stops(stop Id and stop name),
     *
     * @return
     */
    public Set<Stop> loadAllStops() {
        Map<Integer, List<Integer>> routeMap = new HashMap();
        //routeMap.put(0, Arrays.asList(1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 13, 14, 15, 16, 17, 1482));
        routeMap.put(3, Arrays.asList(1512, 1706, 1710, 1717, 1718, 1719, 1720, 1721, 1722, 1723, 1724, 1725, 1726, 1727, 1728, 1731, 1732, 1733, 1734, 1735, 1737, 1738, 1740, 1744, 1745, 1749, 1751, 1755, 1756, 1758, 1759, 1760, 1761, 1762, 1767, 1768, 1773, 1774, 1775, 1776, 1782, 1783, 1784, 1823, 1824, 1837, 1838, 1848, 1849, 1853, 1908, 1912, 1914, 1915, 4871, 5838, 7601));
        Set<Stop> stops = new HashSet<>();
        routeMap.forEach((route, routeIds) -> {
            routeIds.forEach(routeId -> {
                stops.addAll(listStopsByRoute(route, routeId));
            });
        });

        this.writeJSONToFile(stops, "basic_stops.json", false);

        return stops;
    }


    /**
     * Get Stop Info by the stop
     *
     * @param stop
     */
    private StopInfo getStopInfo(Stop stop) throws InterruptedException {
        String uri = String.format(STOP_DETAIL, stop.getStopId(), stop.getRouteType());
        StopInfo stopInfo = new StopInfo();
        stopInfo.setStopId(stop.getStopId());
        stopInfo.setStopName(stop.getStopName());
        try {
            Thread.sleep(200);
            String signedURL = URLHelper.buildSignedURL(uri);
            stopInfo = restTemplate.getForObject(signedURL, StopInfo.class);
        } catch (RestClientException e) {
            if (e instanceof HttpClientErrorException.BadRequest && ((HttpClientErrorException.BadRequest) e).getRawStatusCode() == 400) {
                List<Stop> stops = loadStopList("retry_basic_stops.json");
                stops.add(stop);
                this.writeJSONToFile(stops, "retry_basic_stops.json", false);
            } else if (((HttpClientErrorException.Forbidden) e).getRawStatusCode() == 403) {
                throw new InterruptedException("Pause");
            }
        } catch (Exception e) {
            log.info(e.getMessage());
        }
        return stopInfo;
    }

    /**
     * Lists all the stops by the route type and id
     *
     * @param routeType
     * @param routeId
     * @return
     */
    private Set<Stop> listStopsByRoute(int routeType, int routeId) {
        String uri = String.format(ROUTE_STOP, routeId, routeType);
        String signedURL = null;
        try {
            signedURL = URLHelper.buildSignedURL(uri);
            StopWrapper list = restTemplate.getForObject(signedURL, StopWrapper.class);
            return list.getStops();
        } catch (Exception e) {
            e.printStackTrace();
        }
        return new HashSet<>();
    }


    /**
     * write the json object to file
     *
     * @param jsonObject
     * @throws IOException
     */
    private void writeJSONToFile(Object jsonObject, String fileName, boolean append) {
        File file = new File(FILE_LOCATION + fileName);
        String json = JSON.toJSONString(jsonObject);
        try {
            FileUtils.writeStringToFile(file, json, Charset.forName("UTF-8"), append);
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    /**
     * load basic stop from file
     *
     * @throws IOException
     */
    private List<Stop> loadStopList(String filename) {
        File file = new File(FILE_LOCATION + filename);
        if (file.exists()) {
            try {
                String json = FileUtils.readFileToString(file, Charset.forName("UTF-8"));
                return JSON.parseArray(json, Stop.class);
            } catch (IOException e) {
                throw new RuntimeException(e);
            }
        } else {
            return new ArrayList<>();
        }
    }

    /**
     * load stop info from file
     *
     * @throws IOException
     */
    private Map<String, StopInfo> loadStopInfo() throws IOException {
        File file = new File(FILE_LOCATION + "stopInfo.json");
        if (file.exists()) {
            String json = FileUtils.readFileToString(file, Charset.forName("UTF-8"));
            return JSON.parseObject(json, new TypeReference<Map<String, StopInfo>>() {
            });
        } else {
            return new ConcurrentHashMap<>();
        }
    }


}
