<template>
	<view v-if="loginPage" class="loginPage">
		<view class="logo">
			<view>
				<image src="../../static/images/myki_logo.jpeg" mode="aspectFit" class="logoimg"></image>
			</view>
			<view class="tip">
				To check your myki balance, log in to your myki online account
			</view>
		</view>
		<view class="content">
			<view style="flex-direction:column;width:100%;">
				<view class=" has-mgtb-10 ">
					<input type="text" maxlength="20" v-model="login.username" placeholder="myki username" class="is-input1 " @input="BindInput"
					 data-val="username" confirm-type="next" />
				</view>
				<view>
					<input password type="text" maxlength="20" v-model="login.password" placeholder="myki password" class="is-input1"
					 @input="BindInput" data-val="password" confirm-type="done" />
				</view>

				<view style="font-size:32upx;padding-left: 20upx;padding-top: 20upx;">
					<checkbox value="this.rememberme" @tap="tapRememberMe" />
					Remember me
				</view>
				<view style="font-size:32upx;padding-left: 20upx;padding-top: 10upx;">
					<checkbox value="this.policy" @tap="tapPolicy" />
					<navigator url="#" hover-class="">
						I accept the <text class="is-blue">\t Privacy Policy</text>
					</navigator>
				</view>

				<view class="loginbtn has-mgtb-30">
					<button :loading="login.loading" @tap="defaultHandlerLogin"> {{ login.loading ? "Login...":"Login"}} </button>
				</view>
			</view>
		</view>

	</view>
	<view v-else class="cardPanel" :style="cardPanel">
		<view v-if="showRefresh" style="flex-direction:column; align-items: center;margin-bottom: 380upx;">
			<image src="../../static/images/opps.png" style="height:120px;width:150px"/>
			<text>Opps!Something wrong with server</text>
			<view style="align-items: center;"><text space="nbsp">click \t</text> <image src="../../static/images/refresh.png" style="height:20px;width:20px" @tap="refresh"/> <text space="nbsp">\t to try again</text></view>
		</view>	
		<view style="justify-content:flex-end;padding:25upx;" @tap="config">
			<image src="../../static/images/config-blue.png" style="padding-left:5px; height:25px;width:25px;" />
		</view>
		<view class="mykiList">
			<view class="card" :style="item.color" v-if="item.show" v-for="(item,index) in cards" :key="index" :data-current="index"
			 :data-cardnum="item.cardNum" @tap="gotoCardDetail">
				<view>
					<image src="../../static/images/myki_logo_2.jpg" style="border-radius:50px;height:35px;width:35px;" />
				</view>
				<view style="flex-direction: column;">
					<view>{{item.cardNum}}</view>
					<view style="padding-top: 18upx;font-weight: bold;font-size:45upx;">{{item.nickname!=null? item.nickname:item.holder}}</view>
				</view>
				<view style="flex-direction: column;align-items:flex-end">
					<view style="font-size:28upx">Available</view>
					<view style="font-weight: bold;">{{item.mykiMoney}}</view>
				</view>
			</view>
		</view>
	</view>
</template>
<script>
	import net from '@/common/js/netUtil.js'
	import con from '@/common/js/constant.js'

	export default {
		data() {
			return {
				cards: [],
				loginPage: true,
				rememberme: false,
				policy: false,
				readyToSubmit: true,
				cardPanel: "position: fixed",
				windowHeight: "",
				platform:"",
				showRefresh: false,
				login: {
					loading: false,
					username: "",
					password: ""
				},

			}
		},

		onLoad: function() {
				let mykiLogin = uni.getStorageSync("rememberme")
				if (mykiLogin) {
					this.loginPage = false;
					this.cards = uni.getStorageSync("cards");
					if(!this.cards || this.cards.length == 0) {
						this.showRefresh = true;
					}
				} else {
					this.loginPage = true;
				}
				
				const res = uni.getSystemInfoSync();
				this.windowHeight = (res.windowHeight * (750 / res.windowWidth));
				this.platform = res.platform;
			},

			onShow: function() {
				if (!this.loginPage) {
					this.cards = uni.getStorageSync("cards").filter(c => c.show);
					this.calWindowHeight();
				}
			},
			
			onShareAppMessage(res) {
				return {
					title: 'Victoria Public Transport',
					path: '/pages/timetable/train/timetable'
				}
			},
			
// 			onPullDownRefresh() {
// 				this.loadingCards(uni.stopPullDownRefresh());
// 			},

			methods: {
				loadingCards(u, p, showIcon) {
					let body = {
						username: u,
						password: p,
					}
					net.netUtil(con.MYKI_CARDS_URL, 'GET', body, res => {
						if (res.statusCode === 403) {
							uni.showModal({
								title: "Error",
								content: "your username or password is wrong",
								showCancel: false,
							})
						} else if (res.data) {
							this.cards = res.data;
							this.calWindowHeight();
							uni.setStorageSync("cards", this.cards);
							this.loginPage = false;
							this.showRefresh= false;
							if (this.rememberme) {
								uni.setStorageSync("rememberme", body);
							}
							if(this.cards.length == 0) {
								this.showRefresh=true;
							}
						}
						this.login.loading = false;
						this.readyToSubmit = true;

					}, showIcon);
				},

				defaultHandlerLogin: function() {
					if (this.policy) {
						if (this.login.username.trim() == "" || this.login.password.trim() == "") {
							uni.showModal({
								title: "Error",
								content: "The username or password is blank",
								showCancel: false,
							})
						} else {
							if (this.readyToSubmit) {
								this.login.loading = true;
								this.readyToSubmit = false;
								this.loadingCards(this.login.username, this.login.password, false);
							}
						}
					} else {
						uni.showModal({
							title: "Error",
							content: "You have to agree the Privacy Policy to continue",
							showCancel: false,
						})
					}
				},

				BindInput: function(e) {
					var dataval = e.currentTarget.dataset.val;
					this.login[dataval] = e.detail.value;
				},

				tapRememberMe: function(e) {
					this.rememberme = !this.rememberme;
				},

				tapPolicy: function(e) {
					this.policy = !this.policy;
				},

				calWindowHeight: function(e) {
					let cards = this.cards.filter(c => c.show == true);
					if (cards && cards.length * 170 > this.windowHeight -100) {
						this.cardPanel = "position: relative";
					} else {
						//#ifdef MP-WEIXIN
						if(this.platform == "ios") {
							this.cardPanel = "height:" + (this.windowHeight) + "rpx";
						} else {
							this.cardPanel = "position: fixed";
						}
						//#endif
						
						//#ifdef APP-PLUS
						this.cardPanel = "height:" + (this.windowHeight - 120) + "rpx";
						//#endif
					}
				},

				config: function(e) {
					uni.showActionSheet({
						itemList: ['Show Hidden Cards', 'Logout'],
						success: (res) => {
							if (res.tapIndex == 0) {
								uni.navigateTo({
									url: './listHiddenMyki/listHiddenMyki',
								});

							} else if (res.tapIndex == 1) {
								uni.showModal({
									content: 'Are you sure to logout?',
									cancelText: 'Cancel',
									confirmText: 'OK',
									success: (res) => {
										if (res.confirm) {
											this.login.username = "";
											this.login.password = "";
											this.policy = false;
											this.rememberme = false;
											this.loginPage = true;
											uni.removeStorageSync("rememberme");
										}
									},
								})

							}
						}
					})
				},
				
				refresh:function(e) {
					let mykiLogin = uni.getStorageSync("rememberme");
					let username = this.login.username? this.login.username: mykiLogin.username;
					let password = this.login.password? this.login.password: mykiLogin.password;
					
					this.loadingCards(username, password, true);
				},

				gotoCardDetail: function(e) {
					let cardNum = e.currentTarget.dataset.cardnum;
					let current = e.currentTarget.dataset.current;
					uni.navigateTo({
						url: './mykiDetail/mykiDetail?cardNum=' + cardNum + '&current=' + current,
					});
				}
			}
		}
</script>

<style>
	page {
		/* height: 100%; */
		background-color: #ececec;
	}

	.loginPage {
		flex-direction: column;
		width: 100%;
		align-items: center;
	}

	.logo {
		margin-top: 80rpx;
		flex-direction: column;
		align-items: center;
	}

	.cardPanel {
		flex: 1;
		bottom: 0;
		width: 100%;
		flex-direction: column;
	}

	.content {
		width: 85%;
		margin: 0 auto;
	}

	.tip {
		color: #6a6d73;
		line-height: 40upx;
		width: 85%;
		font-size: 30upx;
		font-weight: 500;
		padding: 40upx 0;
	}

	.has-mgtb-10 {
		margin-bottom: 10rpx;
	}

	.has-mgtb-20 {
		margin-bottom: 20rpx;
	}

	.has-mgtb-30 {
		margin-top: 30rpx;
	}

	.loginbtn button {
		margin-top: 20rpx;
		height: 88rpx;
		width: 100%;
		line-height: 88rpx;
		color: #333839;
		font-size: 42rpx;
		border-radius: 44rpx;
		outline: 0;
		display: block;
		margin: 0;
		font-family: inherit;
		background: #bed600;
		opacity: 0.8;
		font-weight: bold;
	}

	button:after {
		border: 2rpx solid #f2f2f2;
	}

	.logoimg {
		width: 200rpx;
		height: 200rpx;
		border-radius: 50%;
	}

	.is-blue {
		color: #2A62FF !important;
	}

	.is-input1 {
		height: 88rpx;
		width: 100%;
		line-height: 88rpx;
		padding: 12rpx;
		color: #353535;
		font-size: 32rpx;
		box-sizing: border-box;
		appearance: none;
		border: 2rpx solid #e5e5e5;
		box-shadow: none;
		border-radius: 44rpx;
		outline: 0;
		display: block;
		padding-left: 30rpx;
		margin: 0;
		font-family: inherit;
		background: #fff;
		resize: none;
	}


	.mykiList {
		justify-content: flex-end;
		flex: 1;
		align-items: center;
		flex-direction: column;
	}

	.card {
		color: white;
		/* background-color: #F78248; */
		border-top-right-radius: 10px;
		border-top-left-radius: 10px;
		height: 170upx;
		width: 95%;
		flex-direction: row;
		justify-content: space-around;
		padding-top: 15px;
		margin-bottom: -10px;
		border-top: 1px solid #e7e7e7;
		/* 		background: linear-gradient(orange 0%,
			#F78248 30%); */
	}

	.close {
		padding: 30upx;
	}
</style>
