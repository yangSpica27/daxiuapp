<template>
	<view style="width: 100%; min-height: 1000px;">

		<cu-custom bgImage="linear-gradient(to right, #1890FF, #69C0FF)" :isBack="true" :isShadown="false">
			<block slot="backText" @click="backpage">返回</block>
			<block slot="content">读包发现问题</block>
			<block slot="right">
				<text class="cuIcon-qrcode text-white qrcode2" @click="jumpToCrcode"></text>
			</block>
		</cu-custom>

		<!-- 		<view class="cu-bar shadow" style="background: linear-gradient(to right, #1890FF, #69C0FF);">
			<view class="action" @click="backpage">
				<text class="cuIcon-back text-white"></text>
				<text class="text-white">返回</text>
			</view>
			<view class="content text-bold text-white">
				读包发现问题
			</view>

			<text class="cuIcon-qrcode text-white qrcode2" @click="jumpToCrcode"></text>
		</view> -->

		<!-- 		<view class="item">
			<view class="content">
				<text class="cuIcon-qrcode text-grey"></text>
				<text class="text-grey title">扫码</text>
			</view>
		</view>
		<div class="item-blink"></div> -->

		<view class="item">
			<text class="shurugongdan">输入工单</text>
			<!-- <input placeholder="   请输入工单号" class="input" /> -->
			<input-box ref="input1" :verification="['isNull']" :verificationTip="['工单号不能为空']" placeholder="请输入工单号" maBtm="10"
			 maxLength="20" v-model="orderNum"></input-box>
		</view>
		<button class="bg-blue buttom" @click="submit">提交</button>

		<!-- 		<navigator url="feedbackdetail/feedbackdetail">
			<button class="bg-blue buttom">提交</button>
		</navigator> -->

	</view>
</template>

<script>
	import wInput from '../../components/watch-login/watch-input.vue' //input
	import inputBox from '@/components/input-box/input-box';

	export default {
		data() {
			return {
				orderNum: ""
			}
		},
		methods: {
			backpage() {
				uni.navigateBack({
					delta: 1
				})
			},
			jumpToCrcode() {
				// uni.showToast({
				// 	title: '扫码功能暂未实现',
				// 	duration: 2000,
				// 	icon: "none"
				// });

				// 允许从相机和相册扫码
				uni.scanCode({
					success: (res) => {
						console.log('条码类型：' + res.scanType);
						console.log('条码内容：' + res.result);
						this.$refs.input1.value = res.result;
					}
				});
			},
			submit() {
				if (this.$refs.input1.getValue()) {
					uni.showToast({
						icon: 'none',
						title: '校验通过',
						// #ifdef MP-WEIXIN
						duration: 2000,
						// #endif
						// mask: true
					});
					uni.navigateTo({
						url: 'feedbackdetail/feedbackdetail?id=' + this.$refs.input1.getValue()
					});
				}
			}

		},
		components: {
			wInput
		}
	}
</script>

<style scoped>
	@import url("../../components/watch-login/css/icon.css");

	div.item-blink {
		height: 2px;
		width: 100%;
		background-color: #d5d5d5;

	}

	.input {
		background-color: #f8f8f8;
		height: 70upx;
	}

	.item {
		padding: 20px;
		width: 100%;
		height: 200upx;
		background-color: #FFF;
	}

	.title {
		margin-left: 12px;
	}

	.buttom {
		margin: 20rpx;
	}

	page {
		background-color: #f7f7f7;
	}

	.shurugongdan {
		font-weight: bolder;
		margin-bottom: 10upx;
		display: block;
		margin-left: 18px;
	}

	.qrcode {
		width: 30upx;
		height: 30upx;
	}

	.qrcode2 {
		font-size: 50upx;
		margin-right: 30upx;
	}
</style>
