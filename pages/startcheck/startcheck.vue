<template>
	<view>

		<cu-custom bgImage="linear-gradient(to right, #1890FF, #69C0FF)" :isBack="true" :isShadown="false">
			<block slot="backText" @click="backhome">返回</block>
			<block slot="content">选择您的操作</block>
			<block slot="right">
				<text class="text-white daxiuid">
					{{daxiuId}}
				</text>
			</block>
		</cu-custom>

		<!-- 		<view class="cu-bar shadow" style="background: linear-gradient(to right, #1890FF, #69C0FF);">
			<view class="action" @click="backhome">
				<text class="cuIcon-back text-white"></text>
				<text class="text-white">返回</text>
			</view>
			<view class="content text-bold text-white">
				选择您的操作
			</view>
			
			<text class="text-white daxiuid">
				{{daxiuId}}
			</text>
		</view> -->

		<scroll-view scroll-y class="page">
			<view class="nav-list">
				<!-- 读包 -->
				<view class="nav-content" @tap="showModal" data-target="Modal">
					<text class="cuIcon-order" style="font-size: 18px;"></text>
					<text class="title">开始读包</text>
				</view>

				<view class="cu-modal" :class="modalName=='Modal'?'show':''">
					<view class="cu-dialog">
						<view class="cu-bar bg-gradual-blue justify-end" style="background: linear-gradient(to right, #1890FF, #69C0FF);">
							<view class="content">选择您的下一步操作</view>
							<view class="action" @tap="hideModal">
								<text class="cuIcon-close text-white"></text>
							</view>
						</view>
						<view>
							<navigator hover-class="none" class="nav-content" url="../readpackagefeedback/readpackagefeedback">
								<text class="title">读包发现问题</text>
							</navigator>
							<navigator hover-class="none" class="nav-content">

								<text class="title">准备人员审批</text>
							</navigator>
							<navigator hover-class="none" class="nav-content" url="../ring/ring">

								<text class="title">闭环落实</text>
							</navigator>
						</view>
					</view>
				</view>

				<!-- 管理巡视 -->
				<navigator hover-class="none" class="nav-content" url="../evaluate/evaluate">
					<text class="cuIcon-favor" style="font-size: 18px;"></text>
					<text class="title">管理巡视打分</text>
				</navigator>


				<view>

				</view>
				<!-- 整改方案 -->
				<navigator hover-class="none" class="nav-content">
					<text class="cuIcon-activity" style="font-size: 18px;"></text>
					<text class="title">整改方案</text>
				</navigator>

			</view>
			<view class="cu-tabbar-height"></view>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		onLoad: function(option) { //option为object类型，会序列化上个页面传递的参数
			this.daxiuId = "(大修:" + option.id + ")";
		},
		data() {
			return {
				modalName: null,
				daxiuId: "123"
			}
		},
		onShow() {
			console.log("success")
		},
		methods: {
			showModal(e) {
				this.modalName = e.currentTarget.dataset.target
			},
			hideModal(e) {
				this.modalName = null
			},
			backhome() {
				uni.navigateBack({
					delta: 1
				})
			}
		}
	}
</script>

<style>
	.page {
		height: 100vh;
	}

	.title {
		margin-left: 12px;
		line-height: 20px;
		font-size: 30upx;
	}

	.nav-content {
		margin-top: 12px;
		padding: 12px;
		vertical-align: middle;
		border-bottom: 1upx solid #c8c8c8;
	}

	.daxiuid {
		margin-right: 20px;
	}
</style>
