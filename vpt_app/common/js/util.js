import con from '@/common/js/constant.js'
import net from '@/common/js/netUtil.js'
import {Train, VLine, Bus, Tram, NightBus} from "@/common/js/Transport.js"
const train = new Train();
const vline = new VLine();
const bus = new Bus();
const tram = new Tram();
const nightBus = new NightBus();

function getLocation(callback) {
	
	let routeType = uni.getStorageSync("selectedRouteType");
	uni.getLocation({
		type: 'wgs84', //'gcj02',
		success: (res) => {
			let body = {
				"latitude": res.latitude, //res.latitude  : -37.8204,
				"longitude": res.longitude, //res.longitude 145.00199999999995//
				"routeType": routeType,
			}
			net.netUtil(con.STOP_GPS_URL, 'GET', body, res => {
				if (res.data) {
					this.getRouteHandler(routeType).setNearMeStops(res.data);
					if (callback) {
						callback(res.data);
					}
				}
			});
		}
	});
}

function getRouteHandler(routeType) {
	let tmp = uni.getStorageSync("selectedRouteType");
	let rt = tmp ? tmp : 0; //first time entry, assign the defautl value 0;
	if(routeType >= 0) {
		rt = routeType;
		uni.setStorageSync("selectedRouteType", rt);
	} 
	if (rt ==1) {
		return tram;
	} if (rt == 2) {
		return bus;
	} else if (rt == 3) {
		return vline;
	} else if (rt ==4) {
		return nightBus
	}else {
		return train;
	}
}

module.exports = {
	getLocation: getLocation,
	getRouteHandler: getRouteHandler,
}
