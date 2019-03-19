<script>
	import util from '@/common/js/util.js'
	import net from '@/common/js/netUtil.js'
	import con from '@/common/js/constant.js'
	import event from "@/common/js/event.js"
	import init from "@/common/js/data.js"
	import vline from "@/common/js/vline.js"

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
			this.initTabBar();
			this.initFirstTimeEntry();
			this.initRoutes();
			this.initStopNameMap();
			this.initRouteStop();
			this.initDirections();
			this.initPastTime();
			//this.initStopInfoMap();
			uni.removeStorageSync("fullTimetables");

			wx.getSystemInfo({
				success: (res) => {
					this.windowHeight = (res.windowHeight * (750 / res.windowWidth));
					uni.setStorageSync("windowHeight", this.windowHeight);
				}
			})
			//this.loadCards();
		},

		methods: {

			initTabBar() {
				let routeType = uni.getStorageSync("seletecRouteType");
				if (routeType == 0) {
					uni.setNavigationBarTitle({title: 'Train Timetable'});
					uni.setTabBarItem({
						iconPath: 'static/images/train-inactive.png',
						selectedIconPath: 'static/images/train.png',
						text: "Train",
						index: 0,
					})
				} else if (routeType == 3) {
					uni.setNavigationBarTitle({title: 'V/Line Timetable'});
					uni.setTabBarItem({
						iconPath: 'static/images/train-inactive.png',
						selectedIconPath: 'static/images/vline.png',
						index: 0,
						text: 'V/Line',
					})
				}
			},

			initDirections() {
				if (!uni.getStorageSync("directions")) {
					uni.setStorageSync("directions", init.initDirections());
				}

				if (!uni.getStorageSync("vLineDirections")) {
					uni.setStorageSync("vLineDirections", vline.initVLineDirections());
				}
			},

			initStopNameMap() {
				if (!uni.getStorageSync('stopNameMap')) {
					uni.setStorageSync('stopNameMap', init.initStopNameList());
				}
				if (!uni.getStorageSync('vLineStopNameMap')) {
					uni.setStorageSync('vLineStopNameMap', vline.initVLineStopNameList());
				}
			},

			initRouteStop() {
				if (!uni.getStorageSync("routeStopMap")) {
					uni.setStorageSync("routeStopMap", init.initRouteStopList());
				}
				if (!uni.getStorageSync("vLineRouteStopMap")) {
					uni.setStorageSync("vLineRouteStopMap", vline.initVLineRouteStopList());
				}
			},

			initStopInfoMap() {
				if (!uni.getStorageSync("stopInfoMap")) {
					uni.setStorageSync("stopInfoMap", init.initShopInfoList());
				}
			},

			initRoutes() {
				if (!uni.getStorageSync("routes")) {
					let json = init.initRoutes();
					uni.setStorageSync("routes", json.routes);
				}
			},

			initPastTime() {
				if (!uni.getStorageSync("pastTime")) {
					uni.setStorageSync("pastTime", 10);
				}
			},

			initFirstTimeEntry() {
				if (!uni.getStorageSync("themeColor")) {
					uni.setStorageSync("themeColor", "#0072ce");
				}
				if (!uni.getStorageSync("seletecRouteType")) {
					uni.setStorageSync("seletecRouteType", 0);
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
