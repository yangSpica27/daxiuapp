<template>
	<view style="width: 100%; min-height: 1000px;">
<!-- 读包发现问题 -->
		<cu-custom bgImage="linear-gradient(to right, #1890FF, #69C0FF)" :isBack="false" :isShadown="false">
			<block slot="content">读包发现问题</block>
		</cu-custom>
		
				<view class="item">
					<view class="content">
						<text class="cuIcon-qrcode text-grey"></text>
						<text class="text-grey title" >扫码</text>
					</view>
				</view>
				
				
				<view class="item">输入工单
				<input placeholder="工单号" />
				</view>
				<navigator url="feedbackdetail/feedbackdetail">
					<button class="bg-blue buttom">提交</button>
				</navigator>
				
	</view>
</template>

<script>
	import wInput from '../../components/watch-login/watch-input.vue' //input
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		},
		components:{
			wInput
		}
	}
</script>

<style scoped>
	@import url("../../components/watch-login/css/icon.css");
.item{
	padding: 20px;
	background-color: #FFF;
}
.title{
	margin-left: 12px;
}
.buttom{
	margin: 20rpx;
}
page{
	background-color: #f7f7f7;
}
</style>
