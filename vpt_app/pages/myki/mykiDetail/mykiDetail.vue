<template>
	<view class="main" :style="windowHeight">
		<view style="display:block;">
			<unik-modal ref="unikModal" :modalTitle="modalTitle" @confirmModal="confirmModal" @cancelModal="cancelModal">
				<input class="uni-input" v-model="nickname" :focus="focus" cursor-spacing=20 maxlength=20 placeholder="nickname" />
			</unik-modal>
		</view>
		<!-- <swiper class="swiper" :current="currentIndex" indicator-dots="true" circular="true" duration="500" @change="onSlideChangeEnd"> -->
		<swiper class="swiper" :current-item-id="currentCardNum" indicator-dots="true" circular="true" duration="500" @change="onSlideChangeEnd">
			<swiper-item class="item" v-if="item.show" :item-id="item.cardNum" v-for="(item,index) in cards" :key="index">
				<view class="card" :style="item.color">
					<view class="line">
						<view>MYKI MONEY</view>
						<view style="font-size:20px;">{{item.mykiMoney}}</view>
					</view>
					<view class="card-icon">
						<view>
							<view>
								<image src="../../../static/images/myki_logo_2.jpg" style="border-radius:50px;height:40px;width:40px;" />
							</view>
							<view style="padding-left:20px;align-items: center;font-size: 45upx;">{{item.nickname}}</view>
						</view>
						<!-- <view @tap="config" :data-cardnum="item.cardNum">
							<image src="../../../static/images/config.png" style="padding-left:5px; height:18px;width: 18px;" />
						</view> -->
					</view>
					<view class="line">
						<view>{{item.type}}</view>
						<view>{{item.cardNum}}</view>
					</view>
					<view class="line" style="font-size:14px">
						<view>{{item.holder}}</view>
						<view>
							Exp. {{item.expiry}}
							<view v-if=item.expired>
								<image src="../../../static/images/warning.png" style="padding-left:5px; height:18px;width: 18px;" />
							</view>
						</view>
					</view>
				</view>
				<view class="card-config">
					<view style="align-items: center;">
						<image src="../../../static/images/refresh.png" style="padding-right:5px; height:20px;width: 20px;" />Last
						updated
					</view>
					<view @tap="config" :data-cardnum="item.cardNum">
						<image src="../../../static/images/config.png" style="padding-left:5px; height:22px;width: 22px;" />
					</view>
				</view>
				<scroll-view scroll-y class="scroll" :style="scrollHeight" v-if="item.transactions">
					<view class="transaction" v-for="(transaction,index1) in item.transactions" :key="index1">
						<view class="trans-date">{{transaction.date}}</view>
						<view style="flex-direction: column;width:100%;align-items: center;">
							<view class="trans-item" v-for="(transactionDetail,index2) in transaction.transactionDetailList" :key="index2">
								<view style="flex:1;justify-content: center;align-items: center;">
									<view v-if="transactionDetail.credit ==''">
										<image src="../../../static/images/train.png" style="height:28px;width: 28px;" />
									</view>
									<view v-else>
										<image src="../../../static/images/top-up.png" style="height:32px;width: 32px;" />
									</view>

								</view>
								<view class="trans-right-container">
									<view style="justify-content:space-between">
										<view>{{transactionDetail.type}}</view>
										<view>{{transactionDetail.time}}</view>
									</view>
									<view style="justify-content:space-between">
										<view style="font-weight: 500;color:#55565a" v-if="transactionDetail.desc !=''">{{transactionDetail.desc}}</view>
										<view style="color:#707276;font-weight: 300;" v-if="transactionDetail.zone !=''">Zone
											{{transactionDetail.zone}}</view>
									</view>
									<view style="color:red" v-if="transactionDetail.debit != ''">-{{transactionDetail.debit}} (Balance
										{{transactionDetail.balance}})</view>
									<view style="color:green" v-if="transactionDetail.credit !=''">+{{transactionDetail.credit}} (Balance
										{{transactionDetail.balance}})</view>
								</view>
							</view>
						</view>
					</view>
				</scroll-view>
				<view class="no-trans" v-else>
					<image src="../../../static/images/no-history.png" style="padding: 50upx 0 20upx 0;height:50px;width:50px"></image>
					<view>
						No Transactions
					</view>
					<view style="font-size:28upx;font-weight:400;">
						transactions may be delayed by up to 24 hours
					</view>
				</view>
			</swiper-item>
		</swiper>


	</view>
</template>

<script>
	import net from '@/common/js/netUtil.js';
	import con from '@/common/js/constant.js';
	import unikModal from '@/components/uni-modal/uni-modal.vue';


	export default {
		components: {
			unikModal
		},
		data() {
			return {
				cards: Object,
				currentIndex: 0,
				currentCardNum: 0,
				windowHeight: "height:600px",
				scrollHeight: "height:330px",
				user: uni.getStorageSync("rememberme"),
				modalTitle: 'Edit Nickname',
				nickname: '',
				focus: false,
			};
		},

		onLoad: function(e) {
			this.currentIndex = e.current;
			this.currentCardNum = e.cardNum;
		},

		onShow: function(e) {
			this.cards = uni.getStorageSync("cards");
			this.cards.forEach(c => {
				if (c.cardNum == this.currentCardNum) {
					this.nickname = c.nickname == null ? '' : c.nickname;
				}
			});
		},

		onReady: function() {
			wx.getSystemInfo({
				success: (res) => {
					this.windowHeight = "height:" + res.windowHeight + "px";
					this.scrollHeight = "height:" + (res.windowHeight - 240) + "px";
				}
			})
		},

		onPullDownRefresh() {
			this.refreshTransaction(this.currentCardNum, uni.stopPullDownRefresh());
		},

		methods: {

			refreshTransaction(cardNum, stopRefresh) {
				let card = this.cards.filter(c => c.cardNum == cardNum)[0];
				let body = {
					username: this.user.username,
					password: this.user.password,
					cn: card.selfLink,
				}
				net.netUtil(con.MYKI_TRANSACTIONS_URL, 'GET', body, res => {
					if (res.data && res.data.length > 0) {
						this.cards.forEach(c => {
							if (c.cardNum == cardNum) {
								c.transactions = res.data;
								c.mykiMoney = res.data[0].transactionDetailList[0].balance;
							}
						});
						uni.setStorageSync("cards", this.cards);
					}
					stopRefresh;
				});
			},

			config(e) {
				let dataset = e.currentTarget.dataset;
				let cardnum = dataset.cardnum;
				uni.showActionSheet({
					itemList: ['Edit Card Name', 'Hide Card'],
					success: (res) => {
						if (res.tapIndex == 0) {
							this.$refs.unikModal.show();
							this.focus = true;
						} else if (res.tapIndex == 1) {
							let displayedCards = this.cards.filter(c => c.show);
							displayedCards.forEach((v, i) => {
								if (v.cardNum == cardnum) {
									v.show = false;
									if (++i >= displayedCards.length) i = 0;
									this.currentCardNum = displayedCards[i].cardNum;
								}
							})
							uni.setStorageSync("cards", this.cards);
						}
					}
				})
			},

			onSlideChangeEnd: function(e) {
				this.currentCardNum = e.detail.currentItemId;
				this.cards.forEach(c => {
					if (c.cardNum == this.currentCardNum) {
						this.nickname = c.nickname == null ? '' : c.nickname;
					}
				});

			},

			confirmModal: function(e) {
				this.cards.forEach(c => {
					if (c.cardNum == this.currentCardNum) {
						c.nickname = this.nickname;
					}
				});
				uni.setStorageSync("cards", this.cards);
			},
		}
	}
</script>

<style>
	.main {
		width: 100%;
		justify-content: center;
	}

	.uni-input {
		background: #f7f7f7;
		width: 100%;
		padding: 10rpx;
		border-radius: 1px;
	}

	.swiper {
		width: 100%;
		height: 100%;
		font-weight: bold;
		color: white;
	}

	.item {
		align-items: center;
		display: flex;
		flex-direction: column;
		background-color: #e7e7e7;
	}

	.card {
		/* border: 1px solid #0072CE; */
		width: 94%;
		height: 210px;
		border-radius: 8px;
		margin-top: 20rpx;
		flex-direction: column;
		justify-content: space-between;
	}

	.card .line {
		padding: 15px 20px;
		justify-content: space-between;
		text-transform: uppercase;
		font-size: 17px;
	}

	.card-icon {
		padding: 0px 20px;
		padding-bottom: 5px;
		align-items: center;
		justify-content: space-between;
	}

	.card-config {
		justify-content: space-between;
		align-items: center;
		width: 90%;
		color: #55565a;
		font-size: 28rpx;
		font-weight: 400;
		padding: 10rpx 0;
	}

	.scroll {
		padding-bottom: 30upx;
		padding-left: 0px;
		padding-right: 0px;
		background-color: #e7e7e7;
	}

	.transaction {
		color: #5c6370;
		flex-direction: column;
		align-items: center;
		width: 100%;
		font-weight: 400;
		margin-top: -20rpx;
	}

	.trans-date {
		align-self: flex-start;
		padding-left: 20px;
		padding-top: 40rpx;
		padding-bottom: 10rpx;
		font-size: 33rpx;
	}

	.trans-item {
		background: white;
		width: 90%;
		font-size: 29rpx;
		padding-top: 6rpx;
	}

	.trans-right-container {
		flex-direction: column;
		flex: 5;
		border-bottom: 1px solid #e7e7e7;
		padding: 20upx
	}

	.trans-item:first-of-type {
		border-top-left-radius: 5px;
		border-top-right-radius: 5px;
	}

	.trans-item:last-of-type {
		border-bottom-left-radius: 5px;
		border-bottom-right-radius: 5px;
	}

	.no-trans {
		align-items: center;
		flex-direction: column;
		width: 80%;
		color: #6a6d73;

	}
</style>
