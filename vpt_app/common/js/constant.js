//url相关
const BASE_URL = "http://47.75.7.246:8080";
//const BASE_URL = "http://localhost:8080"

//登录
const DEPARTURE_URL = BASE_URL + "/api/ptv/departures/";
const STOP_URL = BASE_URL + "/api/ptv/patterns/";
const STOP_GPS_URL = BASE_URL + "/api/ptv/nearme/";
const DIRECTION_URL = BASE_URL + "/api/ptv/initDirections";
const STOP_NAME_MAP_URL = BASE_URL+"/api/ptv/initStopReverse";
const ROUTE_STOP_MAP_URL = BASE_URL + "/api/ptv/initRouteStop";

const HEADERS = {
  'content-type': 'application/json',
  'Authorization': 'Basic ZDY4MDA1NDppcXdLODI0IWMxMlI='
};


module.exports = {
  BASE_URL: BASE_URL,
  DEPARTURE_URL: DEPARTURE_URL,
	STOP_URL: STOP_URL,
	STOP_GPS_URL: STOP_GPS_URL,
	STOP_NAME_MAP_URL: STOP_NAME_MAP_URL,
	DIRECTION_URL: DIRECTION_URL,
	ROUTE_STOP_MAP_URL:ROUTE_STOP_MAP_URL,
  HEADERS: HEADERS,
}
