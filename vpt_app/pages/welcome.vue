<template>
	<view>


	</view>
</template>

<script>
	export default {
		data() {
			return {

			};
		},

		onLoad: function() {
			//this.app();
			uni.showLoading({
				title: "loading..."
			});
			var interval = setInterval(function() {
				let directions = uni.getStorageSync("directions");
				let routes = uni.getStorageSync("routes");
				let stopNameMap = uni.getStorageSync("stopNameMap");
				let routeStopMap = uni.getStorageSync("routeStopMap");
				console.info('check inteval');
				if (directions && routes && stopNameMap && routeStopMap) {
					clearInterval(interval);
					uni.switchTab({
						url: './timetable/train/timetable',
					})

					uni.hideLoading();
				}
			}, 10);
		},
	}
</script>

<style>

</style>
