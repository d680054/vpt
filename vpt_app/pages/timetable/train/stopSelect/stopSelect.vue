<template>
	<view class="content" style="flex-direction: column;flex:1;">
		<view style="display:block;">
			<unik-modal ref="unikModal" :modalTitle="modalTitle" :sureText="sureText" @confirmModal="confirmModal" >
				<text>Sure to delete the history？</text>
			</unik-modal>
		</view>
		<view class="searchBox">
			<view class="inputBox">
				<input type="text" :placeholder="defaultKeyword" @input="inputChange" v-model="keyword" @confirm="doSearch(false)"
				 placeholder-class="placeholder-class" confirm-type="search">
			</view>
			<!-- <view class="searchBtn" @tap="doSearch(false)">Go</view> -->
			<view>
				<image @tap="locateMe(true)" style="width:25px;height:25px" src="../../../../static/images/locateMe.png"></image>
			</view>
		</view>
		<view class="search-keyword" @touchstart="blur">
			<scroll-view class="keywordListBox" v-show="isShowKeywordList" scroll-y>
				<view class="keywordEntry" hover-class="keywordEntryTap" v-for="row in keywordList" wx:key="row.keyword">
					<view class="keywordText" @tap="doSearch(row.keyword)">
						<rich-text :nodes="row.htmlStr"></rich-text>
					</view>
					<view class="keywordImg" @tap="setkeyword(row)">
						<image src="../../../../static/images/back.png"></image>
					</view>
				</view>
			</scroll-view>
			<scroll-view class="keywordBox" v-show="!isShowKeywordList" scroll-y>
				<view class="keyword-block" v-if="oldKeywordList.length>0">
					<view class="keyword-list-header">
						<view>Histroy</view>
						<view>
							<image @tap="oldDelete" src="../../../../static/images/delete.png"></image>
						</view>
					</view>
					<view class="keyword">
						<view v-for="key in oldKeywordList" @tap="doSearch(key)" wx:key="key">{{key}}</view>
					</view>
				</view>
				<view class="keyword-block">
					<view class="keyword-list-header">
						<view>Hot</view>
						<view>
							<image :src="'../../../../static/images/hot.png'"></image>
						</view>
					</view>
					<view class="keyword" v-if="forbid==''">
						<view v-for="key in hotKeywordList" @tap="doSearch(key)" wx:key="key">{{key}}</view>
					</view>
				</view>
				<view class="keyword-block">
					<view class="keyword-list-header">
						<view>Near me</view>
						<view>
							<image @tap="locateMe(false)" src="../../../../static/images/gps.png"></image>
						</view>
					</view>
					<view class="keyword">
						<view v-for="key in gpsKeywordList" @tap="doSearch(key)" wx:key="key">{{key}}</view>
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
	import unikModal from '@/components/uni-modal/uni-modal.vue';

	export default {
		components: {
			unikModal
		},
		data() {
			return {
				sureText: "OK",
				defaultKeyword: "",
				keyword: "",
				oldKeywordList: [],
				hotKeywordList: [],
				gpsKeywordList: [],
				keywordList: [],
				forbid: '',
				isShowKeywordList: false,
				stopNameMap: [],
				routeStopMap: [],
				routeHandler: util.getRouteHandler(),
			}
		},

		onLoad() {
			uni.setNavigationBarColor({
				frontColor: '#ffffff',
				backgroundColor: this.routeHandler.theme,
			});
			uni.setNavigationBarTitle({
				title: 'Select ' + this.routeHandler.name + ' Stop'
			});
			this.stopNameMap = this.routeHandler.stopNameList();
			this.routeStopMap = this.routeHandler.routeStopList();
			this.init();
		},

		methods: {
			init() {
				this.loadGPSKeyword();
				this.loadDefaultKeyword();
				this.loadHistoryKeyword();
				this.loadHotKeyword();
			},
			
			blur() {
				uni.hideKeyboard();
				this.isShowKeywordList = false;
			},
			//加载默认搜索关键字
			loadDefaultKeyword() {
				//定义默认搜索关键字，可以自己实现ajax请求数据再赋值,用户未输入时，以水印方式显示在输入框，直接不输入内容搜索会搜索默认关键字
				this.defaultKeyword = "Flinders Street";
			},
			//加载历史搜索,自动读取本地Storage
			loadHistoryKeyword() {
				this.oldKeywordList = this.routeHandler.getSearchHistory();
			},
			//加载热门搜索
			loadHotKeyword() {
				//定义热门搜索关键字
				this.hotKeywordList = this.routeHandler.hotKeywords();
			},
			//加载gps周边的站点
			loadGPSKeyword() {
				this.gpsKeywordList = uni.getStorageSync('nearMeStops')[this.routeHandler.type];
			},

			//
			locateMe(search) {
				util.getLocation(ret => {
					this.gpsKeywordList = ret;
					if (ret[0] && search) {
						this.doSearch(ret[0]);
					}
				})
			},
			//监听输入
			inputChange(event) {
				var keyword = event.detail.value;
				if (!keyword) {
					this.keywordList = [];
					this.isShowKeywordList = false;
					return;
				}
				this.isShowKeywordList = true;
				let tipList = this.searchCache(keyword);
				this.keywordList = this.drawCorrelativeKeyword(tipList, keyword);

			},
			//高亮关键字
			drawCorrelativeKeyword(keywords, keyword) {
				var len = keywords.length,
					keywordArr = [];
				for (var i = 0; i < len; i++) {
					var row = keywords[i];
					//定义高亮#9f9f9f
					var html = row.replace(new RegExp(`(${keyword})`, 'ig'),
						"<span style='color: red;'>" + keyword.charAt(0).toUpperCase() + keyword.slice(1) + "</span>");
					html = '<div>' + html + '</div>';
					var tmpObj = {
						keyword: row,
						htmlStr: html
					};
					keywordArr.push(tmpObj)
				}
				return keywordArr;
			},
			//顶置关键字
			setkeyword(data) {
				this.keyword = data.keyword;
			},
			//清除历史搜索
			oldDelete() {
				this.$refs.unikModal.show();
			},
			
			confirmModal() {
				this.oldKeywordList = [];
				this.routeHandler.removeSearchHistory();
			},
			//热门搜索开关
			hotToggle() {
				this.forbid = this.forbid ? '' : '_forbid';
			},
			//执行搜索
			doSearch(key) {
				if (key) {
					key = key ? key : this.keyword ? this.keyword : this.defaultKeyword;
					this.keyword = key;
					let keys = Object.keys(this.stopNameMap);
					let selectedStop = keys.filter(item => item == this.keyword);
					selectedStop = selectedStop[0];
					uni.setStorageSync("selectedStop", {
						'stopName': selectedStop,
						'stopId': this.stopNameMap[selectedStop]
					});

					//cityloop的站点不改变route
					let ret = this.hotKeywordList.filter(s => s == selectedStop);
					if (ret.length == 0) {
						let lines = this.routeStopMap[this.stopNameMap[selectedStop]];
						uni.setStorageSync("selectedRouteIds", lines);
					}

					this.saveKeyword(selectedStop); //保存为历史 
					//清楚timetable历史
					uni.removeStorageSync("fullTimetables");
					uni.navigateBack({
						delta: 1
					});
				} else {
					uni.showToast({
						title: 'Not a valid station name',
						duration: 2000,
						icon: 'none'
					});
				}

			},
			//搜索缓存
			searchCache(keyword) {
				let keys = Object.keys(this.stopNameMap);
				let tipList = [];
				keys.forEach(item => {
					if (item.toLowerCase().indexOf(keyword.toLowerCase()) != -1 && tipList.length < 20) {
						tipList.push(item);
					}
				})

				return tipList;
			},

			//保存关键字到历史记录
			saveKeyword(keyword) {
				this.keywordList = this.routeHandler.setSearchHistory(keyword);
			},


		}
	}
</script>
<style>
	.searchBox {
		width: 95%;
		background-color: rgb(242, 242, 242);
		padding: 7.5px 2.5%;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.searchBox .inputBox {
		width: 85%;
		flex-shrink: 1;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.searchBox .searchBtn {
		width: 15%;
		margin: 0 0 0 2%;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-shrink: 0;
		font-size: 14px;
		color: #fff;
		background: linear-gradient(to right, #ff9801, #ff570a);
		border-radius: 30px;
	}

	.searchBox .inputBox>input {
		width: 100%;
		height: 30px;
		font-size: 16px;
		border: 0;
		border-radius: 30px;
		-webkit-appearance: none;
		-moz-appearance: none;
		appearance: none;
		padding: 0 3%;
		margin: 0;
		background-color: #ffffff;
	}

	.placeholder-class {
		color: #9e9e9e;
	}

	.search-keyword {
		width: 100%;
		background-color: rgb(242, 242, 242);
	}

	.keywordListBox {
		height: calc(100vh - 55px);
		padding-top: 5px;
		border-radius: 10px 10px 0 0;
		background-color: #fff;
	}

	.keywordEntryTap {
		background-color: #eee;
	}

	.keywordEntry {
		width: 94%;
		height: 40px;
		margin: 0 3%;
		font-size: 15px;
		color: #333;
		display: flex;
		justify-content: space-between;
		align-items: center;
		border-bottom: solid 1px #e7e7e7;
	}

	.keywordEntry image {
		width: 30px;
		height: 30px;
	}

	.keywordEntry .keywordText,
	.keywordEntry .keywordImg {
		height: 40px;
		display: flex;
		align-items: center;
	}

	.keywordEntry .keywordText {
		width: 90%;
	}

	.keywordEntry .keywordImg {
		width: 10%;
		justify-content: center;
	}

	.keywordBox {
		height: calc(100vh - 55px);
		border-radius: 10px 10px 0 0;
		background-color: #fff;
	}

	.keywordBox .keyword-block {
		padding: 5px 0;
		flex-direction: column;
	}

	.keywordBox .keyword-block .keyword-list-header {
		width: 94%;
		padding: 5px 3%;
		font-size: 16px;
		color: #333;
		display: flex;
		justify-content: space-between;
	}

	.keywordBox .keyword-block .keyword-list-header image {
		width: 20px;
		height: 20px;
	}

	.keywordBox .keyword-block .keyword {
		width: 94%;
		padding: 3px 3%;
		display: flex;
		flex-flow: wrap;
		justify-content: flex-start;
	}

	.keywordBox .keyword-block .hideHotTis {
		display: flex;
		justify-content: center;
		font-size: 14px;
		color: #6b6b6b;
	}

	.keywordBox .keyword-block .keyword>view {
		display: flex;
		justify-content: center;
		align-items: center;
		border-radius: 30px;
		padding: 0 10px;
		margin: 5px 10px 5px 0;
		height: 30px;
		font-size: 14px;
		background-color: rgb(242, 242, 242);
		color: #6b6b6b;
	}
</style>
