import con from '@/common/js/constant.js'
import net from '@/common/js/netUtil.js'
import vline from '@/common/js/vline.js'
import train from '@/common/js/train.js'

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
	if (rt == 3) {
		uni.setTabBarItem({
			iconPath: 'static/images/train-inactive.png',
			selectedIconPath: 'static/images/vline.png',
			index: 0,
			text: 'V/Line',
		})
		return vline;

	} else {
		uni.setTabBarItem({
			iconPath: 'static/images/train-inactive.png',
			selectedIconPath: 'static/images/train.png',
			index: 0,
			text: "Train",
		})

		return train;
	}
}

module.exports = {
	getLocation: getLocation,
	getRouteHandler: getRouteHandler,
}
