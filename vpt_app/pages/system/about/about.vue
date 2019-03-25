<template>
	<view class="main-content">
		<view style='display:flex;flex-direction:column;padding:40px 0;'>
			<image src="../../../static/logo.png" style="border-radius:5px;align-self:center;height:140rpx;width:140rpx;" />
			<text style="align-self:center;padding-top:5px;font-size:14px;">v1.1</text>
		</view>
		<view style="width:100%">
			<uni-collapse>
				<uni-collapse-item name="aboutus" title="About Us">
					<view style="padding: 30upx;">
						We are an IT practitioner from Melbourne, we hope that this app will bring great convenience to the Melbourne commuters.
					</view>
				</uni-collapse-item>
				<uni-collapse-item name="privacy" title="Privacy Policy">
					<view style="padding: 30upx;">
						We promise not to store and print any user-related data. All data is encrypted and transmitted via https, please feel free to use it.
					</view>
				</uni-collapse-item>
				<uni-collapse-item name="contact" title="Contact Us">
					<view style="padding: 30upx;">
						Email: vptaustralia@gmail.com
					</view>
				</uni-collapse-item>
			</uni-collapse>
		</view>
		<!-- #ifdef MP-WEIXIN -->
		<view style="position: fixed;bottom: 10upx;">
			<view class="cp">© 2019 上海嗨街网络技术有限公司. All rights reserved.</view>
		</view>
		<!-- #endif -->
	</view>
</template>

<script>
	import uniCollapse from '@/components/uni-collapse/uni-collapse.vue'
	import uniCollapseItem from '@/components/uni-collapse-item/uni-collapse-item.vue'

	export default {
		components: {
			uniCollapse,
			uniCollapseItem
		},

		data() {
			return {

			};
		},

		methods: {

			clickCollapse: function(e) {
				//clickCollapse
			},
			
			goToLogs() {
				uni.navigateTo({
					url: './logs/logs'
				})
			},
		},
	}
</script>

<style>
	page {
		height: 100%;
	}

	.main-content {
		/* justify-content: space-between; */
		align-items: center;
		background: #f5f5f9;
		width: 100%;
		display: flex;
		flex-direction: column;
		height: 100%;
	}

	.question-item {
		border-bottom: 1px solid #e9e9e9;
		padding: 14px 0px 11px 20px;
		display: flex;
		background-color: white;
		flex-direction: row;
		color: #1d1d1d;
		justify-content: space-between;
		font-size: 32rpx;
	}

	.question-item .indicator {
		height: 50rpx;
		width: 50rpx;
		display: flex;
		padding-right: 10px;
	}

	.cp {
		font-size: 12px;
		text-align: center;
		width: 100%;
		color: #a6a6a6;
		padding: 10px 0 5px 0;
	}
</style>
