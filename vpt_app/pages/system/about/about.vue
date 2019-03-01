<template>
	<view class="main-content">
		<view style='display:flex;flex-direction:column;padding:40px 0;' @tap="goToLogs">
			<image src="../../../static/logo.png" style="border-radius:5px;align-self:center;height:140rpx;width:140rpx;" />
			<text style="align-self:center;padding-top:5px;font-size:14px;text-decoration:underline">v1.1</text>
		</view>
		<view style="width:100%">
			<uni-collapse>
				<uni-collapse-item name="aboutus" title="About Us">
					<view style="padding: 30upx;">
						我们是来自墨尔本的IT从业人员，曾从事于中国，澳洲多家知名IT企业，见证了互联网技术对人类改善自己的生活所产生的重大影响。作为一个年轻、有梦想的团队，我们希望这款微信小程序能够为墨尔本通勤者带来极大便利。
					</view>
				</uni-collapse-item>
				<uni-collapse-item name="privacy" title="Privacy Policy">
					<view style="padding: 30upx;">
						我们承诺不会存储、打印任何关于用户相关的数据。所有数据经https加密传输，请放心使用。
						正式条款正在制定中...
					</view>
				</uni-collapse-item>
				<!-- <uni-collapse-item name="contact" title="Contact Us">
					<view style="padding: 30upx;">
						
					</view>
				</uni-collapse-item> -->
			</uni-collapse>
		</view>
		<view style="position: fixed;bottom: 10upx;">
			<view class="cp">© 2019 上海嗨街网络技术有限公司. All rights reserved.</view>
		</view>
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
