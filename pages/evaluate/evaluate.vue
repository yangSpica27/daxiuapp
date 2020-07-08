<template>
	<view class="page">
		<view class="cu-bar shadow" style="background: linear-gradient(to right, #1890FF, #69C0FF);">
			<view class="action">
				<text class="cuIcon-back text-white"></text>
				<text class="text-white">返回</text>
			</view>
			<view class="content text-bold text-white">
				选择您的操作
			</view>
		</view>
		<scroll-view scroll-y>
			<view class="info-container shadow-blur">
				<text class="text-xl">{{item.title}} </text>
				<text class="text-xl">id:{{item.id}}</text>
				<view style="margin-top: 8upx;">
					<text id="state">未审核</text>
				</view>

				<navigator class="item-container" url="befored/befored">
					<text class="cuIcon-btn"></text>
					<text class="title">准备流程评测</text>
					<text class="fraction">{{fraction.befored}} 分</text>
				</navigator>

				<view class="item-container">
					<text class="cuIcon-btn"></text>
					<text class="title">作业过程评测</text>
					<text class="fraction">{{fraction.working}} 分</text>
				</view>
				<view class="item-container">
					<text class="cuIcon-btn"></text>
					<text class="title">安全生产评测</text>
					<text class="fraction">{{fraction.safe}} 分</text>
				</view>
				<view class="item-container">
					<text class="cuIcon-btn"></text>
					<text class="title">技术问题及其总结</text>
					<text class="fraction">{{fraction.summary}} 分</text>
				</view>
				<view class="item-container">
					<text class="cuIcon-copy"></text>
					<text class="title">是否录入改进行动</text>

					<switch class="fraction"></switch>

				</view>
			</view>

			<button class="bg-blue" style="margin: 6px;">提交</button>

		</scroll-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				item: {
					'id': 1,
					'title': '大修轮次 ',
				},
				state: '未审核',
				'fraction': {
					'befored': 8, //事前准备
					'working': 8, //工作流程
					'safe': 8, //工业安全
					'summary': 8 //总结评分
				}

			}
		},
		methods: {

		}
	}
</script>

<style scoped>
	.info-container {
		box-shadow: 0upx 9upx 28upx 8upx rgba(0, 0, 0, 0.05);
		margin: 12upx;
		padding: 20upx;
		margin-bottom: 32px;
		border-radius: 4px;
	}

	#state {
		margin-top: 12upx;
		color: #E54D42;
		font-weight: 500;
		padding: 6rpx;
		border: 1px solid #E54D42;
		border-radius: 4px;
	}

	.item-container {
		padding-top: 24upx;
		padding-bottom: 24upx;
		vertical-align: middle;
		border-radius: 4upx;
		border-bottom: 4upx solid #f0f0f0;
	}

	.fraction {
		float: right;
	}

	.title {
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
		font-size: 14px;
		margin-left: 8px;
		color: #606266;
		font-weight: 600;
	}
	
	.page {
		background-color: #f8f8f8;
	}
	
</style>
