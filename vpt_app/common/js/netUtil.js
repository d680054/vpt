//var CON = require('./constan.js');
import CON from '@/common/js/constant.js'

/**
 * 网络请求的统一封装
 * params url地址 body网络请求中的body callback成功回调
 * 返回 格式res:{code:1/-1, errMsg, data} 1成功 -1失败
 * 包含统一的加载中 加载失败提示
 * **/
function netUtil(url, method, body, callBack, loading) {

	this.netHeadsUtil(url, method, CON.HEADERS, body, callBack, loading);
}

function netHeadsUtil(url, method, heads, body, callBack, loading) {
	if (loading === undefined || loading) uni.showLoading({
		title: 'loading...'
	})
	var callBackData = {};
	//微信请求 
	uni.request({
		url: url,
		header: heads,
		method: method,
		data: body,
		success: function(res) {
			if (200 <= res.statusCode && res.statusCode <= 299 || res.statusCode === 403) {
				callBack(res);
				if (loading === undefined || loading) uni.hideLoading();
			} else if (res.statusCode === 404 || res.statusCode === 400) {
				uni.showToast({
					title: "Not Data",
					duration: 1500,
					mask: true
				})
			} else if (500 <= res.statusCode && res.statusCode <= 599) {
				uni.showToast({
					title: "Server error, please try again",
					duration: 1500,
					mask: true
				})
			}
			setTimeout(function() {
				uni.hideToast()
			}, 1000)

		},
		fail: function(res) {
			if (res.errMsg.includes("timeout")) {
				uni.showToast({
					title: "Server is busy, please try later",
					icon:"none",
					duration: 3000,
					mask: true
				})
			} else {
				uni.showToast({
					title: "check your network",
					icon:"none",
					duration: 3000,
					mask: true
				})
			}
			setTimeout(function() {
				uni.hideToast()
			}, 1500)
		}
	});
}



module.exports = {
	netUtil: netUtil,
	netHeadsUtil: netHeadsUtil,
}
