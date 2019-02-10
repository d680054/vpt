<template>
	
	<view style="flex-direction: column;width:100%;">
		<view style="display:block;">
			<unik-modal ref="unikModal" :modalTitle="modalTitle" @confirmModal="confirmModal" >
				<text>Are you sure to display this card?</text>
			</unik-modal>
		</view>
		<view style="padding:10px 15px;background:#fefcec;font-size:30rpx;color:#323f48;font-weight:400;">
			long press the card to remove the hidden card
		</view>
		<view class="item" @longpress="removeHiddenCard" :data-cardnum="item.cardNum" v-for="(item,index) in cards" :key="index">
			<view class="card" :style="item.color">
				<view class="line">
					<view>MYKI MONEY</view>
					<view style="font-size:20px;">{{item.mykiMoney}}</view>
				</view>
				<view class="card-icon">
					<view>
						<view>
							<image src="/static/images/myki_logo_2.jpg" class="myki-logo" />
						</view>
						<view style="padding-left:20px;align-items: center;font-size: 45upx;">{{item.nickname}}</view>
					</view>
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
							<image src="/static/images/warning.png" style="padding-left:5px; height:18px;width: 18px;" />
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import unikModal from '@/components/uni-modal/uni-modal.vue';
	
	export default {
		components: {
			unikModal
		},
		data() {
			return {
				cards:Object,
				modalTitle: 'Remove Hidden Card',
				currentCardNum:'',
			};
		},

		onLoad: function(e) {
			this.cards = uni.getStorageSync("cards").filter(c=>!c.show);
		}, 
		
		methods: {
			removeHiddenCard(e) {
				let dataset = e.currentTarget.dataset;
				this.currentCardNum = dataset.cardnum;
				this.$refs.unikModal.show();
			},
			
			confirmModal() {
				let cards = uni.getStorageSync("cards");
				cards.forEach(c => {
					if (c.cardNum == this.currentCardNum) {
						c.show = true;
					}
				});
				uni.setStorageSync("cards", cards);
				this.cards = cards.filter(c=>!c.show);
			}
		}
	}
</script>

<style>
	.item {
		align-items: center;
		display: flex;
		flex-direction: column;
		margin-bottom: 15px;
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
	
	.myki-logo {
		border-radius: 50px;
		height: 40px;
		width: 40px;
	}
	
	.card-icon {
		padding: 0px 20px;
		padding-bottom: 5px;
		align-items: center;
		justify-content: space-between;
	}
</style>
