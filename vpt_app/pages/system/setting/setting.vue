<template>
	<view style="width:100%;">
		<view style="flex-direction: column;width:100%;">
			<view class="section"><text>Personal</text></view>
			<uni-list>
				<picker @change="setPastTime" :range="pastTimeArr" :value="pastTimeIndex" range-key="name">
					<uni-list-item title="Time buffer" note="The amount of time to cover past trains" show-arrow="false" thumb="../../../static/images/timer.png"></uni-list-item>
				</picker>
					<uni-list-item title="City commuter" note="Auto-filter the citybound trains in the morning(weekdays only)" show-arrow="false" show-switch="true" :switch-checked="cityCommuter" @switchChange="switchCommuter" thumb="../../../static/images/city.png"></uni-list-item>
			</uni-list>
			<!-- <view class="section"><text>Location</text></view>
			<uni-list>
				<uni-list-item title="Time buffer" note="The amount of time to cover past trains" show-arrow="false" thumb="../../../static/images/timer.png">
				</uni-list-item>
			</uni-list> -->
		</view>
	</view>
</template>

<script>
	import uniList from '@/components/uni-list/uni-list.vue'
	import uniListItem from '@/components/uni-list-item/uni-list-item.vue'

	export default {
		components: {
			uniList,
			uniListItem,
		},

		data() {
			return {
				cityCommuter: false,
				pastTimeIndex: 2,
				pastTimeArr: [{'name':'2 mins','value':'2'}, 
							  {'name':'5 mins','value':'5'},
							  {'name':'10 mins','value':'10'},
							  {'name':'20 mins','value':'20'},
							  {'name':'30 mins','value':'30'}],
			};
		},
		
		onLoad:function(){
			let pastTime = uni.getStorageSync("pastTime");
			this.pastTimeIndex = this.pastTimeArr.findIndex(v=>v.value==pastTime);
			this.cityCommuter = uni.getStorageSync("cityCommuter");
		},
		
		methods: {
			setPastTime(e) {
				let index = e.target.value;
				uni.setStorageSync("pastTime", this.pastTimeArr[index].value);
			},
			
			switchCommuter(e) {
				uni.setStorageSync("cityCommuter", e.value);
			}
		}
	}
</script>

<style>
	.section {
		padding: 20upx 30upx;
		font-weight: bold;
		background-color: #0072CE;
		color: white;
		font-weight: bold;
	}

</style>
