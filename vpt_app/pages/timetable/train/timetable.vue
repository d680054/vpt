<template>
	<view class="content uni-column" style="flex: 1;">
		<uni-nav-bar left-icon="bars" right-icon="refreshempty" @click-left="openDrawer" @click-right="refreshTimeTable"
		 status-bar="true" color="#F8F8F8" background-color="#0072ce" shadow="false">
			<view style="font-weight: 500;">Time Table</view>
			<!-- <view slot="left">left</view>
			<view slot="right">right</view> -->
		</uni-nav-bar>
		<uni-drawer :visible="showDrawer" mode="left" @close="closeDrawer('left')">
			<view style="padding:80upx 45upx 45upx;font-weight:500;">Victoria Public Transport</view>
			<uni-list>
				<uni-list-item title="Train" @click="closeDrawer" show-arrow="false" thumb="../../../static/images/train.png"></uni-list-item>
				<uni-list-item title="V/Line" @click="comingsoon" show-arrow="false" thumb="../../../static/images/train-inactive.png"></uni-list-item>
				<uni-list-item title="Tram" @click="comingsoon" show-arrow="false" thumb="../../../static/images/tram-inactive.png"></uni-list-item>
				<uni-list-item title="Bus" @click="comingsoon" show-arrow="false" thumb="../../../static/images/bus-inactive.png"></uni-list-item>
				<uni-list-item title="SkyBus" @click="comingsoon" show-arrow="false" thumb="../../../static/images/bus-inactive.png"></uni-list-item>
				<uni-list-item title="Setting" @click="gotoSetting"></uni-list-item>
				<uni-list-item title="About" @click="gotoAbout"></uni-list-item>
			</uni-list>
		</uni-drawer>

		<view class="header-box">
			<view @tap="gotoLineSelect">
				<image style="width:25px;height:25px" src="../../../static/images/track.png"></image>
				<text>{{trainLines}}</text>
			</view>
			<view @tap="gotoStopSelect">
				<image style="width:28px;height:28px" src="../../../static/images/stop.png"></image>
				<text>{{stopName}}</text>
			</view>
			<picker @change="pickDirection" :range="directionArr">
				<image style="display:flex;width:25px;height:25px" src="../../../static/images/filter.png"></image>
			</picker>
		</view>
		<view style="flex-direction: column;">
			<scroll-view scroll-y :style="scrollHeight" class="uni-list main_container">
				<view class="container" hover-class="uni-list-cell-hover" v-for="(item,index) in timetables" :key="index" @tap="openRunDetail"
				 :data-runid="item.runId" :data-terminal="item.terminal" :data-routeid="item.routeId" :data-departtime="item.departureLocalTime"
				 data-status="status">
					<view class="uni-list-cell-navigate cell-align" :style="item.greyCell">
						<view style="flex-direction: column;">
							<view style="align-items:center;padding:4upx;width:500rpx">
								<view v-if="item.minorDelay" class="disruption-circle" style="background-color:#1ba035;"/>
								<view v-else class="disruption-circle" :style="serviceStatus[item.routeId]"></view>
								<text class="terminal">{{item.terminal}}</text>
								<text class="express" v-show="item.express"> - Express</text>
							</view>
							<view class="departingInfo">
								{{item.departureLocalTime}}<span v-show="item.platform"> - Platform {{item.platform}}</span>
							</view>
						</view>
						<!-- <view class="timing">
							<text v-if="item.gap > 0">&nbsp;In {{item.gapText}}mins</text>
							<text v-else-if="item.gap < 0">&nbsp;Left {{item.gapText}}mins ago</text>
							<text v-else>&nbsp;NOW</text>
						</view> -->
					</view>
					<view class="timing" style="background: #6A6D73;" v-if="item.gap < 0">
						<text>Left\n {{item.gapText}}mins</text>
					</view>
					<view class="timing" v-else>
						<text v-if="item.gap > 0">In\n {{item.gapText}}mins</text>
						<text v-else>&nbsp;NOW</text>
					</view>

				</view>
			</scroll-view>
		</view>
	</view>
</template>

<script>
	import net from '@/common/js/netUtil.js'
	import con from '@/common/js/constant.js'
	import util from '@/common/js/util.js'
	import moment from '@/common/js/moment.min.js'
	import uniDrawer from "@/components/uni-drawer/uni-drawer.vue"
	import uniNavBar from "@/components/uni-nav-bar/uni-nav-bar.vue"
	import uniList from '@/components/uni-list/uni-list.vue'
	import uniListItem from '@/components/uni-list-item/uni-list-item.vue'
	import event from "@/common/js/event.js"

	export default {
		components: {
			uniDrawer,
			uniNavBar,
			uniList,
			uniListItem,
		},

		data() {
			return {
				showDrawer: false,
				showRigth: false,
				showLeft: true,
				title: 'Drawer',

				fullTimetables: [],
				timetables: [],
				trainLines: '',
				stopName: '',
				stopId: '',
				trainRoutesMap: [],
				directionIndex: 0,
				scrollHeight: "1000upx",
				directionArr: [],
				directionIds: [],
				pastTime: 10,
				index: 0,
				serviceStatus: ["background-color:#66cc33;", "background-color:#66cc33;", "background-color:#66cc33;",
					"background-color:#66cc33;", "background-color:#66cc33;", "background-color:#66cc33;",
					"background-color:#66cc33;", "background-color:#66cc33;", "background-color:#66cc33;", "background-color:good;",
					"background-color:#66cc33;", "background-color:#66cc33;", "background-color:#66cc33;",
					"background-color:#66cc33;", "background-color:#66cc33;", "background-color:#66cc33;",
					"background-color:#66cc33;", "background-color:#66cc33;", "background-color:#66cc33;",
					"background-color:#66cc33;",
				],
				status: "background-color:#66cc33;",

			};
		},

		onLoad: function() {
			event.on('DataChanged', this, function(data) {
				let selectedStop = uni.getStorageSync("selectedStop");
				this.stopName = selectedStop['stopName'];
				this.stopId = selectedStop['stopId'];
				this.renderLines();
				this.forceLoadingTimetable();
			})
			this.fetchServiceStatus();
		},

		onUnload: function() {
			event.remove('DataChanged', this);
		},

		onReady: function() {
			wx.getSystemInfo({
				success: (res) => {
					//#ifdef APP-PLUS
					this.scrollHeight = "height:" + (res.windowHeight - 100) + "px";
					//#endif
					//#ifdef MP-WEIXIN
					this.scrollHeight = "height:" + (res.windowHeight - 120) + "px";
					//#endif
				}
			})
		},

		onShow: function() {
			this.pastTime = uni.getStorageSync("pastTime");
			if(!this.pastTime && this.pastTime!=0) {
				this.pastTime = 10;
			}
			this.initDefaultStop();
			this.loadTimetable();
			this.renderLines();
		},

		onPullDownRefresh() {
			this.forceLoadingTimetable(uni.stopPullDownRefresh());
		},

		onShareAppMessage(res) {
			return {
				title: 'Victoria Public Transport',
				path: '/pages/timetable/train/timetable'
			}
		},

		methods: {
			loadTimetable() {
				this.fullTimetables = uni.getStorageSync("fullTimetables");
				if (!this.fullTimetables) {
					this.forceLoadingTimetable();
				}
			},

			forceLoadingTimetable(callback) {
				let selectedRouteIds = uni.getStorageSync("selectedRouteIds");
				if (selectedRouteIds.indexOf('all') != -1) {
					selectedRouteIds.splice(selectedRouteIds.indexOf('all'), 1);
				}
				let body = {
					routeType: '0',
					stopId: this.stopId,
					routeIds: selectedRouteIds.join()
				}
				net.netUtil(con.DEPARTURE_URL, 'GET', body, res => {
					if (res.data) {
						this.fullTimetables = this.filterTheTimetable(res.data);
						this.timetables = this.fullTimetables;
						uni.setStorageSync("fullTimetables", this.fullTimetables);
						uni.setStorageSync("timetables", this.timetables);
						this.initDirections(this.timetables);

						// 						if (callback) {
						// 							callback;
						// 						}
					}
				});
			},

			renderLines() {
				let routeIds = uni.getStorageSync("selectedRouteIds");
				this.trainRoutesMap = uni.getStorageSync("trainRoutesMap");
				if (routeIds.length == 1) {
					this.trainLines = this.trainRoutesMap[routeIds[0]];
				} else if (routeIds.length > 1) {
					let number = routeIds.length == 18 ? 17 : routeIds.length;
					this.trainLines = number + " lines"
				}
			},

			/**
			 * 初始默认火车站
			 */
			initDefaultStop() {
				let selectedStop = uni.getStorageSync("selectedStop");
				if (selectedStop && Object.keys(selectedStop).length > 0) {
					this.stopName = selectedStop['stopName'];
					this.stopId = selectedStop['stopId'];
				} else {
					//第一次进入, 使用gps最近的车站
					let nearme = uni.getStorageSync("nearMeStops");
					if (nearme && Object.keys(nearme).length > 0) {
						this.stopName = nearme[0];
						this.stopId = uni.getStorageSync('stopNameMap')[this.stopName];
					} else {
						this.stopName = "Flinders Street";
						this.stopId = "1071";
						uni.setStorageSync("selectedStop", {
							'stopName': "Flinders Street",
							'stopId': "1071",
						});
						let routeStopMap = uni.getStorageSync("routeStopMap");
						uni.setStorageSync("selectedRouteIds", routeStopMap[this.stopId]);
					}
				}
			},

			/**
			 * 格式化时间
			 */
			filterTheTimetable(timetables) {
				return timetables.filter(item => {
					if (moment(item.estimatedDepartureUTC).isAfter(moment.utc().subtract(this.pastTime, 'minutes'))) {
						let du = moment.duration(moment(item.estimatedDepartureUTC) - moment(), 'ms');
						item.gap = moment(item.estimatedDepartureUTC).diff(moment(), 'minutes');
						if (item.gap < 0) {
							item.greyCell = "background-color:#e7e7e7";
						}
						var h = "";
						if (du.get('hours') > 0) {
							h = du.get('hours') + "h "
						}
						item.gapText = h + Math.abs(du.get('minutes'));
						if(moment(item.estimatedDepartureUTC).isAfter(moment(item.scheduledDepartureUTC).add(2,'minutes'))) {
							item.minorDelay = true;
						}
						return item;
					}
				})
			},

			/**
			 * 
			 */
			fetchServiceStatus() {
				let body = {
					routeType: '0',
				}
				net.netUtil(con.DISRUPTION_URL, 'GET', body, res => {
					if (res.data) {
						uni.setStorage({
							key: "disruptions",
							data: res.data
						})
						res.data.forEach(d => {
							d.colour = "#ffd500" == d.colour ? "#66cc33" : d.colour
							this.serviceStatus[d.routeId] = "background-color:" + d.colour;
							this.status = "1"
						})
					}
				});
			},

			openRunDetail(e) {
				let dataset = e.currentTarget.dataset;
				let runId = dataset.runid;
				let terminal = dataset.terminal;
				let departTime = dataset.departtime;
				let routeId = dataset.routeid;
				let line = this.trainRoutesMap[routeId];
				let stop = this.stopName;
				let statusColor = dataset.statuscolor;
				uni.navigateTo({
					url: './runDetail/runDetail?runId=' + runId + '&terminal=' + terminal + '&line=' + line + '&departTime=' +
						departTime + '&routeId=' + routeId + '&stop=' + stop
				});
			},

			/**
			 * 初始化所有的方向
			 */
			initDirections(timetables) {
				this.directionArr = [];
				this.directionIds = [];
				this.directionArr.push("All Directions");
				this.directionIds.push("888");
				this.timetables.forEach(run => {
					if (this.directionIds.indexOf(run.directionId) == -1) {
						this.directionIds.push(run.directionId);
					}
				})

				let directions = uni.getStorageSync("directions");
				if (this.directionIds && directions) {
					this.directionIds.forEach(d => {
						if (d != 888) {
							this.directionArr.push(directions[d]);
						}
					})
				}
			},

			/**
			 * 选择火车方向
			 */
			pickDirection(e) {
				let index = e.target.value;
				if (this.directionIds[index] == 888) {
					this.timetables = this.fullTimetables;
				} else {
					this.timetables = this.fullTimetables.filter(t => t.directionId == this.directionIds[index]);
				}
			},

			changeDirection() {
				let directions = uni.getStorageSync("directions");
				if (directions) {
					let totalSize = directions.length;
					if (this.directionIndex == totalSize) {
						this.directionIndex = 0;
						this.timetables = this.fullTimetables;
					} else {
						this.timetables = this.fullTimetables.filter(t => t.directionId == directions[this.directionIndex]);
						this.directionIndex++;
					}
					uni.setStorageSync("timetables", this.timetables);
				}
			},

			refreshTimeTable() {
				this.forceLoadingTimetable();
			},

			openDrawer(e) {
				this.showDrawer = true;
			},

			closeDrawer() {
				this.showDrawer = false;
			},

			gotoLineSelect() {
				uni.navigateTo({
					url: './lineSelect/lineSelect'
				})
			},

			gotoStopSelect() {
				uni.navigateTo({
					url: './stopSelect/stopSelect'
				})
			},

			gotoSetting() {
				uni.navigateTo({
					url: '/pages/system/setting/setting'
				})
			},

			gotoAbout() {
				uni.navigateTo({
					url: '/pages/system/about/about'
				})
			},

			comingsoon() {
				console.info('click');
				uni.showToast({
					title: "coming soon...",
					icon: "none",
					duration: 1500,
				})
			}

		}
	}
</script>

<style>
	.main_container {
		position: relative;
		background-color: #f7f7f7;
		/* width: 750rpx; */
		/* height: 100vh; */
	}

	.container {
		/* position: fixed; */
		/*使用absolute的原因是因为为了防止第一个子视图有margin-top时，造成顶部留白的情况*/
		/* left: 0;
		top: 0; */
		margin: 15upx 13upx;
		/* border: 1px solid #ddd; */
		border-left: 4px solid #0072ce;
		background-color: #fff;
		border-top-left-radius: 5px;
		border-bottom-left-radius: 5px;
		/* border-bottom: 1px solid #c7c7c7; */
		/* border-right: 2px solid #e9e9e9; */
	}

	.uni-media-list-body {
		height: auto;
	}

	.uni-media-list-text-top {
		line-height: 1.6em;
	}

	.header-box {
		width: 100%;
		display: flex;
		justify-content: space-around;
		align-items: center;
		height: 50px;
		background-color: #0072ce;
		color: white;
		font-weight: bold;
	}

	.header-box text {
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
		width: auto;
	}

	.cell-align {
		flex-direction: row;
		align-items: flex-start;
		height: 160rpx;
		border-bottom: 1px solid #c7c7c7;
		border-top: 1px solid #c7c7c7;
		white-space: nowrap;
		width: 100rpx;
	}

	.terminal {
		font-size: 1.1em;
		padding-left: 10upx;
		font-weight: bold;
		text-transform: uppercase;
	}

	.express {
		font-weight: bold;
		font-size: 0.7em;
		white-space: nowrap;
		text-overflow: ellipsis;
		overflow: hidden;
		/* width:140upx; */
	}

	.departingInfo {
		padding-top: 10upx;
		padding-left: 3upx;
		font-size: 33upx;
		font-weight: 700;
		color: #6a6d73;
		/*#8F8F94*/
	}

	.timing {
		align-items: center;
		justify-content: center;
		text-align: center;
		/* text-transform: uppercase; */
		font-weight: 400;
		font-size: 34rpx;
		align-self: center;
		width: 180upx;
		height: 160upx;
		background: #0072ce;
		color: white;
	}

	.disruption-circle {
		height: 25upx;
		width: 25upx;
		border-radius: 50%;
		display: inline-block;
	}
</style>
