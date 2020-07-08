<template>
	<view>
		<view class="mainIndex">
			<home v-if="PageCur=='home'"></home> <!-- 首页 -->
			<mine v-if="PageCur=='mine'"></mine> <!-- 我的 -->
		</view>

		<view class="cu-bar tabbar bg-white shadow foot mainCD" :style="{zIndex:isTop?'999999':'99'}">
			<view class="action" :class="PageCur=='home'?'text-black':'text-gray'" @click="NavChange" data-cur="home">
				<view class="cuIcon-homefill"></view> 首页
			</view>

			<view class="action" :class="PageCur=='mine'?'text-black':'text-gray'" @click="NavChange" data-cur="mine">
				<view class="cuIcon-my">
			
				</view>
				我的
			</view>
		</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				PageCur: 'home', //切换菜单
				toPageCur: '', //上次切换的菜单
				isTop: false, //底部菜单是否在最顶层
			}
		},
		methods: {
			NavChange: function(e) {
				//底部菜单切换
				this.PageCur = e.currentTarget.dataset.cur
			}
		},
		watch: {
			//监听菜单变化
			'PageCur': function(newVal) {
				var _this = this
				_this.toPageCur = newVal //赋值上一次切换的菜单
			},
		}
	}
</script>

<style lang="scss" scoped>
	@import "../../style/color/color.scss";
	.mainIndex {
		padding-bottom: 128upx;
	}

	.text-black {
		color: $blueColor !important;
	}

	.bg-black {
		background: $blackColor !important;
	}

	.cu-bar.tabbar.shadow {
		-webkit-box-shadow: 0 0.5px 36px 0 rgba(43, 86, 112, .2) !important;
		box-shadow: 0 0.5px 36px 0 rgba(43, 86, 112, .2) !important;
	}
</style>
