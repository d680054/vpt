<template>
	<view class="content uni-column" style="flex:1">
		<view style="justify-content: center;align-items: center;padding: 20upx;">
			{{trainLineDisplay}}
		</view>
		<view style="flex:1">
			<checkbox-group @change="checkboxChange" style="flex:1">
				<view style="justify-content: space-between;border-bottom: 1upx #D9D9D9 solid">
				</view>
				<label class="checkbox" v-for="item in trainRoutes" :key="item.route_id">
					<view class="checkbox-lable">
						<view>{{item.route_name}} Line</view>
						<view>
							<checkbox :value="item.route_id" :checked="item.checked" />
						</view>
					</view>
				</label>
			</checkbox-group>
		</view>

	</view>
</template>

<script>
	import util from '@/common/js/util.js'
	
	export default {
		data() {
			return {
				trainRoutes: [],
				trainLineDisplay: "Select Your Train Lines",
				allSelected: false,
				allTrainRoutes: ["all"],
				routeHandler: util.getRouteHandler(),
			};
		},

		onLoad: function(e) {
			uni.setNavigationBarColor({
				frontColor: '#ffffff',
				backgroundColor: this.routeHandler.theme,
			});
			uni.setNavigationBarTitle({
				title: 'Select ' + this.routeHandler.name + ' Line'
			});
			let trainRoutesMap = {};
			let routes = uni.getStorageSync("routes");
			let selectedRouteIds = uni.getStorageSync("selectedRouteIds");
			let allSelected = {
				'route_name': 'All',
				'route_id': 'all'
			};
			if (routes) {
				this.trainRoutes = routes.filter(item => {
					if (item.route_type == this.routeHandler.type) {
						//trainRoutesMap[item.route_id] = item.route_name;
						//initialise the checked item
						if (selectedRouteIds) {
							selectedRouteIds.filter(id => {
								if (id == 'all') {
									allSelected.checked = true;
								} else if (id == item.route_id) item.checked = true;
							})
						}
						this.allTrainRoutes.push(item.route_id);
						return item;
					}
				});

				this.trainRoutes.sort((a,b)=> a.route_name.localeCompare(b.route_name));
				this.trainRoutes.unshift(allSelected);
			}
			this.displayLineNumber(selectedRouteIds);
		},

		methods: {
			checkboxChange: function(e) {
				var oldValues = this.trainRoutes, //原来的值
					selectedRoutIds = e.detail.value; //新选的值
				if (!oldValues[0].checked && selectedRoutIds.indexOf('all') != -1) {
					//原来没有选择all,现在tick all,则全选
					selectedRoutIds = this.allTrainRoutes;
					this.trainRoutes.forEach(item => {
						item.checked = true;
					})

				} else if (!oldValues[0].checked && selectedRoutIds.indexOf('all') == -1 && selectedRoutIds.length == 17) {
					//原来没有选择all,现在也没有all,但是全选其他,自动选择all
					oldValues[0].checked = true;
					selectedRoutIds = this.allTrainRoutes;

				} else if (oldValues[0].checked && selectedRoutIds.indexOf('all') == -1) {
					//原来选择all,现在untick all,则全不选
					selectedRoutIds = [];
					this.trainRoutes.forEach(item => {
						item.checked = false;
					})
				} else if (oldValues[0].checked && selectedRoutIds.length < 18) {
					//原来选择all,现在untick 其他一个,则all自动untick
					oldValues[0].checked = false;
					selectedRoutIds.splice(selectedRoutIds.indexOf('all'), 1);

				} else {
					for (var i = 0, lenI = oldValues.length; i < lenI; ++i) {
						oldValues[i].checked = false;
						for (var j = 0, lenJ = selectedRoutIds.length; j < lenJ; ++j) {
							if (oldValues[i].route_id == selectedRoutIds[j]) {
								oldValues[i].checked = true;
								break
							}
						}
					}
				}

				this.trainRoutes = oldValues;
				uni.setStorageSync('selectedRouteIds', selectedRoutIds);
				this.displayLineNumber(selectedRoutIds);
				uni.removeStorage({
					key: 'fullTimetables'
				});
			},

			
			displayLineNumber(routeIds) {
				if (routeIds != null && routeIds.length > 0) {
					let number = routeIds.length;
					if (number == 1) {
						let trainRoutesMap = uni.getStorageSync("trainRoutesMap");
						let trainName = trainRoutesMap[routeIds[0]];
						this.trainLineDisplay = trainName + " line";
					} else {
						number == 18 ? --number : number;
						this.trainLineDisplay = number + " lines";
					}
				} else {
					this.trainLineDisplay = "Select Your Train Lines";
				}
			},
		}
	}
</script>

<style>
	.checkbox-lable {
		justify-content: space-between;
		padding: 20upx;
		border-bottom: 1upx #D9D9D9 solid;
		font-weight: bold;
	}
</style>
