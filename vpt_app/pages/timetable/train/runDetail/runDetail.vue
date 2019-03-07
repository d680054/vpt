<template>
	<view class="content" style="flex: 1;flex-direction: column;width:100%;">
		<view class="header-box">
			<view style="justify-content:space-between;font-size:16px;">
				<view>{{line}} Line</view>
				<view>{{departTime}}</view>
			</view>
			<view style="justify-content:space-between;font-size:1.1em;font-weight:bold;">
				<view>{{terminal}}</view>
				<view style="align-items: center;" @tap="getMore">
					<text style="padding-right: 12upx;">{{status}}</text>
					<view class="goodservice-circle" v-if="isGoodService" />
					<view :class="statusColor" v-else>
						<view class="circle"></view>
						<faicon type="info" size="18"></faicon>
					</view>
				</view>
			</view>
		</view>
		<view class="notice-bar" v-show="showNotice" @tap="getMore">
			<view class="uni-list-cell" v-for="(item,index) in descriptions" :key="index">
				<view class="uni-list-cell-navigate disruption-info">
					{{item}}
				</view>
			</view>
		</view>
		<view style="flex-direction: column;">
			<scroll-view scroll-y :style="scrollHeight" class="uni-list">
				<view class="uni-list-cell" hover-class="uni-list-cell-hover" v-for="(item,index) in stops" :key="index"
				 :data-stopid="item.stopId">
					<view class="uni-list-cell-navigate color-bar" :style="item.barColor">
						<span v-if="!item.skip">
							<view style="align-items:center">
								<text class="stop-name">{{item.stopName}}</text>
							</view>
							<view style="padding-top: 8upx;font-size: 33upx;font-weight: 700;color:#6a6d73">
								{{item.departureLocalTime}} - {{item.gapText}} mins travel time
							</view>
						</span>
						<view sytle='height:70px;' v-else>
							<text style="font-size:1em;padding:20upx;font-weight:bold;">-------</text>
						</view>
						<!-- <view>
						 <image src="../../../../static/images/cctv.png" style="height:20px;width:20px;"></image>
						 <image src="../../../../static/images/wc.png" style="height:20px;width:20px;"></image>
						 <image src="../../../../static/images/taxi.png" style="height:20px;width:20px;"></image>
						</view>	 -->
					</view>
				</view>
			</scroll-view>
		</view>

	</view>
</template>

<script>
	import net from '@/common/js/netUtil.js'
	import con from '@/common/js/constant.js'
	import moment from '@/common/js/moment.min.js'
	import uniIcon from '@/components/uni-icon/uni-icon.vue'

	export default {
		components: {
			uniIcon
		},
		data() {
			return {
				stops: [],
				trainRoutesMap: uni.getStorageSync("trainRoutesMap"),
				line: '',
				terminal: '',
				departTime: '',
				scrollHeight: "height:1000px",
				status: 'Good Service',
				statusColor: '',
				descriptions: [],
				showNotice: false,
				isGoodService: true,
			};
		},

		onLoad: function(e) {
			this.terminal = e.terminal;
			this.line = e.line;
			this.departTime = e.departTime;
			let stopInfoMap = uni.getStorageSync("stopInfoMap");
			let body = {
				routeType: '0',
				runId: e.runId
			}
			net.netUtil(con.STOP_URL, 'GET', body, res => {
				if (res.data) {
					let stopId = uni.getStorageSync("selectedStop")['stopId'];
					let selectedDepartureUTCTime = res.data.filter(stop => stop.stopId == stopId)[0].scheduledDepartureUTC;

					this.stops = res.data.filter(stop => {
						var m1 = moment(stop.scheduledDepartureUTC),
							m2 = moment(selectedDepartureUTCTime),
							du = moment.duration(m1 - m2, 'ms').get('minutes');
						if (du > 0) {
							stop.gapText = du;
							if(stop.stopId&&stopInfoMap[stop.stopId].zone == 1) {
								stop.barColor = "border-left:10px solid #ffca06";
							} else 
							{
								stop.barColor = "border-left:10px solid #21c3eb";
							}
							return stop;
						}
					});
				}
			});

			let disruptions = uni.getStorageSync("disruptions");
			if (disruptions) {
				let disruption = disruptions.filter(d => d.routeId == e.routeId);
				if (disruption.length > 0) {
					this.status = disruption[0].type;
					this.descriptions = disruption[0].descriptions;
					if (this.status.indexOf('Info') != -1) {
						this.statusColor = 'info';
					} else if (this.status.indexOf('Minor') != -1) {
						this.statusColor = 'minor';
						this.showNotice = true;
					} else if (this.status.indexOf('Major') != -1) {
						this.statusColor = 'major';
						this.showNotice = true;
					} else if (this.status.indexOf('Suspended') != -1) {
						this.statusColor = 'suspended';
						this.showNotice = true;
					}
					this.statusColor = this.statusColor + ' wave solid';
					this.isGoodService = false;
				}
			}

			uni.setNavigationBarTitle({
				title: e.stop + ' Station'
			});

		},
		onReady: function() {
			wx.getSystemInfo({
				success: (res) => {
					this.scrollHeight = "height:" + (res.windowHeight - 83) + "px";
				}
			})
		},
		methods: {
			getMore: function() {
				this.showNotice = !this.showNotice;
			},
			
			gotoStopDetail(e) {
				let dataset = e.currentTarget.dataset;
				let stopId = dataset.stopid;
				console.info("stopId:" + stopId);
				uni.navigateTo({
					url: './stopDetail/stopDetail?stopId=' + stopId
				})
			}
		}
	}
</script>

<style>
	.main_container {
		position: relative;
		width: 750rpx;
		height: 100vh;
		/* background: #FD9494; */
	}

	.container {
		/* position: absolute; */
		/*使用absolute的原因是因为为了防止第一个子视图有margin-top时，造成顶部留白的情况*/
		left: 0;
		top: 0;
		width: 100%;
	}


	.header-box {
		display: flex;
		padding: 30upx 10px;
		justify-content: space-around;
		flex-direction: column;
		border-bottom: #929292 1px solid;
		background-color: #0072CE;
		color: whitesmoke;
		height:100upx;
	}

	.good {
		background-color: #66cc33;
	}

	.goodservice-circle {
		height: 28upx;
		width: 28upx;
		border-radius: 50%;
		/* display: inline-block; */
		background-color: #66cc33;
	}

	.notice-bar {
		flex-direction: column;
		background-color: #fffbe8;
		position: absolute;
		top: 162upx;
		width: 100%;
		z-index: 1;
	}

	.disruption-info {
		background-color: #f78248;
		color: white;
		font-size: 30upx;
		line-height: 40upx;
		border-bottom: 1upx solid white;
	}
	
	.color-bar {
		flex-direction:row;
		padding-left:10px;
		margin:1px 0;
	}
	
	.stop-name {
		font-size:1.1em;
		padding-left:10upx;
		font-weight:bold;
	}

	.wave {
		position: relative;
		width: 60upx;
		height: 60upx;
		border-radius: 50%;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.wave .circle {
		position: absolute;
		border-radius: 50%;
		opacity: 0;
	}



	/* 波动效果 */
	.wave.solid .circle {
		width: 100%;
		height: 100%;
		background: #fff;
	}

	.wave.solid .circle:first-child {
		animation: circle-opacity 2s infinite;
	}

	.wave.solid.info {
		color: #66cc33;
	}

	.wave.solid.info .circle {
		background: #66cc33;
	}

	.wave.solid.minor {
		color: #ee9b00;
	}

	.wave.solid.minor .circle {
		background: #ee9b00;
	}

	.wave.solid.major {
		color: #66cc33;
	}

	.wave.solid.major .circle {
		background: #66cc33;
	}

	.wave.solid.suspended {
		color: #1f1f1f;
	}

	.wave.solid.suspended .circle {
		background: #1f1f1f;
	}

	@keyframes circle-opacity {
		from {
			opacity: 1;
			transform: scale(0);
		}

		to {
			opacity: 0;
			transform: scale(1);
		}
	}
</style>
