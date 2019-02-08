<script>
	import util from '@/common/js/util.js'
	import net from '@/common/js/netUtil.js'
	import con from '@/common/js/constant.js'
	import event from "@/common/js/event.js"
	import init from "@/common/js/data.js"

	export default {
		onLaunch: function() {

			util.getLocation(nearme => {
				if (nearme && nearme.length > 0) {
					let selectedStop = uni.getStorageSync("selectedStop");
					let ret = nearme.filter(s => s == selectedStop['stopName']);
					if (ret.length == 0) {
						let stopNameMap = uni.getStorageSync("stopNameMap");
						let stopId = stopNameMap[nearme[0]];
						uni.setStorageSync("selectedStop", {
							'stopName': nearme[0],
							'stopId': stopId,
						});
						let hotKeywordList = ['Flinders Street', 'Southern Cross', 'Melbourne Central', 'Flagstaff', 'Parliament'];
						let ret = hotKeywordList.filter(s => s == nearme[0]);
						if (ret.length == 0) {
							let routeStopMap = uni.getStorageSync("routeStopMap");
							let lines = routeStopMap[stopId];
							uni.setStorageSync("selectedRouteIds", lines);
						}
						event.emit('DataChanged', 'Log-Page-Btn-Press');
					}
				}
			});
			this.initRoutes();
			this.initStopNameMap();
			this.initRouteStop();
			this.initDirections();
			uni.removeStorageSync("fullTimetables");
			this.loadCards();
		},

		onShow: function() {
			//console.log('App Show')
		},
		onHide: function() {
			//console.log('App Hide')
		},
		methods: {

			initDirections() {
				if (!uni.getStorageSync("directions")) {
					uni.setStorageSync("directions", init.initDirections());
				}
			},
			initStopNameMap() {
				if (!uni.getStorageSync('stopNameMap')) {
					uni.setStorageSync('stopNameMap', init.initStopNameList());
				};
			},

			initRoutes() {
				if (!uni.getStorageSync("routes")) {
					let json = init.initRoutes();
					let trainRoutesMap = {};
					uni.setStorageSync("routes", json.routes);
					json.routes.filter(item => {
						if (item.route_type == 0) {
							trainRoutesMap[item.route_id] = item.route_name;
						}
					});
					uni.setStorageSync("trainRoutesMap", trainRoutesMap);
				}
			},

			initRouteStop() {
				if (!uni.getStorageSync("routeStopMap")) {
					uni.setStorageSync("routeStopMap", init.initRouteStopList());
				}
			},

			loadCards() {
				let rememberme = uni.getStorageSync("rememberme");
				if (rememberme) {
					let body = {
						username: rememberme.username,
						password: rememberme.password,
					}
					net.netUtil(con.MYKI_CARDS_URL, 'GET', body, res => {
						if (res.statusCode === 200 && res.data) {
							let hiddenCards = uni.getStorageSync("hiddenCards");
							res.data.forEach(c => {
								if (hiddenCards && hiddenCards.includes(c.cardNum)) {
									c.show = false;
								}
							})

							uni.setStorageSync("cards", res.data);
						}
					}, false);
				}
			}
			// 				let err, res;
			// 				[err, res] = await uni.request({
			// 					url: con.DIRECTION_URL,
			// 					data: {}
			// 				});
			// 				console.log("数据：", err, res.data);
		}


	}
</script>

<style>
	/*每个页面公共css */
	@import "./common/uni.css";

	page,
	view {
		display: flex;
		/* uni-app默认使用flex布局。因为flex布局有利于跨更多平台，尤其是采用原生渲染的平台。如不了解flex布局，请参考http://www.w3.org/TR/css3-flexbox/。若不需要flex布局可删除本行*/
	}
</style>
