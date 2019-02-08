import moment from '@/common/js/moment.min.js'
import con from '@/common/js/constant.js'
import net from '@/common/js/netUtil.js'

function formatTime(time) {
	if (typeof time !== 'number' || time < 0) {
		return time
	}

	var hour = parseInt(time / 3600)
	time = time % 3600
	var minute = parseInt(time / 60)
	time = time % 60
	var second = time

	return ([hour, minute, second]).map(function(n) {
		n = n.toString()
		return n[1] ? n : '0' + n
	}).join(':')
}

function convertUTCTime(UTCTime) {
	var options = {
		timeZone: "Australia/Melbourne",
		year: 'numeric',
		month: 'numeric',
		day: 'numeric',
		hour: 'numeric',
		minute: 'numeric',
		second: 'numeric'
	};

	var formatter = new Intl.DateTimeFormat([], options);

	//var UTCTime = "2017-09-03T02:00:00Z";
	console.log(UTCTime);
	var localTime = formatter.format(new Date(UTCTime));
	//var currentTime = formatter.format(new Date());
	//console.log(currentTime, localTime);
	return localTime;
}

function getLocation(callback) {
	
	uni.getLocation({
		type: 'wgs84',//'gcj02',
		success: (res) => {
			//console.log('GPS：[' + res.latitude +':'+res.longitude + ']');
			let body = {
				"latitude": res.latitude, //res.latitude  : -37.731856,
				"longitude": res.longitude,//res.longitude 145.100844 //
			}
			net.netUtil(con.STOP_GPS_URL, 'GET', body, res => {
				if (res.data) {
					uni.setStorageSync('nearMeStops', res.data);
					if (callback) {
						callback(res.data);
					}
				}
			});
		}
	});
}

function formatLocation(longitude, latitude) {
	if (typeof longitude === 'string' && typeof latitude === 'string') {
		longitude = parseFloat(longitude)
		latitude = parseFloat(latitude)
	}

	longitude = longitude.toFixed(2)
	latitude = latitude.toFixed(2)

	return {
		longitude: longitude.toString().split('.'),
		latitude: latitude.toString().split('.')
	}
}
var dateUtils = {
	UNITS: {
		'年': 31557600000,
		'月': 2629800000,
		'天': 86400000,
		'小时': 3600000,
		'分钟': 60000,
		'秒': 1000
	},
	humanize: function(milliseconds) {
		var humanize = '';
		for (var key in this.UNITS) {
			if (milliseconds >= this.UNITS[key]) {
				humanize = Math.floor(milliseconds / this.UNITS[key]) + key + '前';
				break;
			}
		}
		return humanize || '刚刚';
	},
	format: function(dateStr) {
		var date = this.parse(dateStr)
		var diff = Date.now() - date.getTime();
		if (diff < this.UNITS['天']) {
			return this.humanize(diff);
		}
		var _format = function(number) {
			return (number < 10 ? ('0' + number) : number);
		};
		return date.getFullYear() + '/' + _format(date.getMonth() + 1) + '/' + _format(date.getDay()) + '-' +
			_format(date.getHours()) + ':' + _format(date.getMinutes());
	},
	parse: function(str) { //将"yyyy-mm-dd HH:MM:ss"格式的字符串，转化为一个Date对象
		var a = str.split(/[^0-9]/);
		return new Date(a[0], a[1] - 1, a[2], a[3], a[4], a[5]);
	}
};

module.exports = {
	formatTime: formatTime,
	formatLocation: formatLocation,
	dateUtils: dateUtils,
	convertUTCTime: convertUTCTime,
	getLocation: getLocation,
}
