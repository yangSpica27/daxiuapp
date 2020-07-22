<template>

	<view>

		<cu-custom bgImage="linear-gradient(to right, #1890FF, #69C0FF)" :isBack="true" :isShadown="false">
			<block slot="backText" @click="backpage">返回</block>
			<block slot="content">读包发现问题</block>
			<block slot="right">

			</block>
		</cu-custom>

		<view id="info-content" class="bg-black align-center">
			<text>显示工单号等信息</text>
		</view>
		<view id="form-content" class="align-center">


		</view>
		<view class="listcontent">
			<view class="title text-bold">
				工作内容
			</view>
			<view class="input-container">
				<input class="right" placeholder="请您输入工作内容" />
			</view>
			<view class="margin-top" />

			<view class="title text-bold">
				主工作中心
			</view>
			<input class="input-container" placeholder="请您输入主工作中心" />


			<view class="margin-top" />

			<view class="title text-bold">角色</view>
			<view class="uni-form-item uni-column">
				<picker @change="bindrolechange" :range="roles">
					<label class="">{{roles[index]}}</label>
				</picker>
			</view>
			<view class="margin-top" />

			<view class="title text-bold">专业</view>
			<view class="uni-form-item uni-column">
				<picker @change="bindrolechange" :range="roles">
					<label class="">{{roles[index]}}</label>
				</picker>
			</view>

			<view class="margin-top" />

			<view class="title text-bold">所属单位</view>
			<view class="uni-form-item uni-column">
				<picker @change="bindrolechange" :range="roles">

					<label class="">{{roles[index]}}</label>
				</picker>
			</view>

			<view class="margin-top"></view>

			<view class="text-bold">缺陷二次分析</view>

			<view class="margin-top" v-for="(item) in shortcomings">
				<text class="cu-tag bg-blue" style="float: left;margin-left: 4px;">
					文件不全
				</text>
			</view>

			<view class="text-bold" style="margin-top: 20px;">缺陷内容描述</view>

			<view>
				<textarea placeholder-style="color:#d8d7d2" placeholder="输入内容" />
				</view>
					
					<view class="margin-top">
						<view class="title text-bold" style="width: 200px;">是否需要工程师修改</view>
				<switch></switch>
					</view>
					
				
					
					

					
			</view>
			<view style="margin-top: 50px;margin-bottom: 50px;">
					<button class="bg-blue">提交</button>
			</view>
		
		</view>
		
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				role:'负责人',
				roles:[
					'负责人',
					'QC',
					'QC组长'
				],
				index:0,
				shortcomings:[
					'程序缺陷',
					'指令缺陷',
					'文件旧版',
					'文件不全',
					'文件错付'
				]
			}
		},
		methods: {
			backpage(){
				uni.navigateBack({
					delta: 1
				})
				},
			bindrolechange:function(value){
				
			}
		}
	}
</script>

<style scoped>
#info-content{
	height: 200px;
}
.listcontent{
	padding: 12px;	
}
.title{
	float: left;
	width: 100px;
}

.margin-top{
	margin-top: 20rpx20px;
}

.info-container{
	float: left;
	text-align: left;
	overflow: auto;
}
textarea{
	height: 200px;
	border: 1px solid #caced6;
	border-radius: 4px;
	padding: 4rpx;
}
switch{
	float: right;
}

button{
	margin: 12px;
}



</style>
