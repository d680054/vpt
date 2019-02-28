<template>
	<view style="width:100%;">
		<view style="flex-direction: column;width:100%;">
			<view style="padding: 20upx 30upx;font-weight: 400;"><text>Personal</text></view>
			<uni-list>
				<picker @change="setPastTime" :range="pastTimeArr">
					<uni-list-item title="Time buffer" note="The amount of time to cover past trains" show-arrow="false" thumb="../../../static/images/train.png"></uni-list-item>
				</picker>
			</uni-list>
			<view style="padding: 20upx 30upx;"><text>Location</text></view>
			<uni-list>
				<uni-list-item title="Time buffer" note="The amount of time to cover past trains" show-arrow="false" thumb="../../../static/images/train.png"></uni-list-item>
			</uni-list>
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
				pastTimeArr: [0, 5, 10],
			};
		},
		methods: {
			setPastTime(e) {
				let index = e.target.value;
				uni.setStorageSync("pastTime", this.pastTimeArr[index]);
			}
		}
	}
</script>

<style>

</style>
