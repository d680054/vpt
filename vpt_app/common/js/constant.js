//url相关
//const BASE_URL = "https://vpt.hjaustralia.com";
const BASE_URL = "https://localhost:8080" 

//登录
const DEPARTURE_URL = BASE_URL + "/api/ptv/departures/";
const STOP_URL = BASE_URL + "/api/ptv/patterns/";
const STOP_GPS_URL = BASE_URL + "/api/ptv/nearme/";
const DIRECTION_URL = BASE_URL + "/api/ptv/initDirections";
const STOP_NAME_MAP_URL = BASE_URL+"/api/ptv/initStopReverse";
const ROUTE_URL = BASE_URL+"/api/ptv/initRoutes";
const ROUTE_STOP_MAP_URL = BASE_URL + "/api/ptv/initRouteStop";
const DISRUPTION_URL = BASE_URL + "/api/ptv/disruptions";

const MYKI_CARDS_URL = BASE_URL + "/api/ptv/myki/getCards";
const MYKI_DETAIL_URL = BASE_URL + "/api/ptv/myki/getCardDetail";

const HEADERS = {
  'content-type': 'application/json',
  'Authorization': 'Basic ***REMOVED***'
};


module.exports = {
  BASE_URL: BASE_URL,
  DEPARTURE_URL: DEPARTURE_URL,
	STOP_URL: STOP_URL,
	STOP_GPS_URL: STOP_GPS_URL,
	STOP_NAME_MAP_URL: STOP_NAME_MAP_URL,
	DIRECTION_URL: DIRECTION_URL,
	ROUTE_STOP_MAP_URL: ROUTE_STOP_MAP_URL,
	ROUTE_URL:ROUTE_URL,
	DISRUPTION_URL: DISRUPTION_URL,
	MYKI_CARDS_URL: MYKI_CARDS_URL,
	MYKI_DETAIL_URL: MYKI_DETAIL_URL,
	HEADERS: HEADERS,
}
