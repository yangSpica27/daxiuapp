<template>
	<view>
		<!-- 顶栏 -->
		<view class="cu-bar shadow" style="background: linear-gradient(to right, #1890FF, #69C0FF);">
			<view class="action" @click="backpage">
				<text class="cuIcon-back text-white"></text>
				<text class="text-white">返回</text>
			</view>
			<view class="content text-bold text-white">
				闭环落实
			</view>
			
			<view class="action">
				扫码图标
			</view>
		</view>
		
		<view class="cu-bar search bg-white">
					<view class="search-form ">
						<text class="cuIcon-search"></text>
						<input @focus="InputFocus" @blur="InputBlur" :adjust-position="false" type="text" placeholder="根据标题搜索" confirm-type="search">
						</input>
					</view>
					<view class="action">
						<button class="cu-btn search-button shadow-blur bg-blue">搜索</button>
					</view>
				</view>
		
		<!-- 排序方式 -->
		<view class="cu-bar bg-white shadow">
			<view class="action">
				<text style="font-weight: 500;">排序方式</text> 
			</view>
			<view class="action">
				<button class="cu-btn bg-blue" @tap="showModal" data-target="RadioModal">{{sortType}}</button>
			</view>
		</view>
		

		
		
		<view class="cu-modal" :class="modalName=='RadioModal'?'show':''" @tap="hideModal">
			<view class="cu-dialog" @tap.stop="">
				<radio-group class="block" @change="changesort">
					<view class="cu-list menu text-left">
						<view class="cu-item" v-for="(item,index) in sortTypies" :key="index">
							<label class="flex justify-between align-center flex-sub">
								<view class="flex-sub">{{item}}</view>
								<radio class="round" :class="radio=='radio' + index?'checked':''" :checked="radio=='radio' + index?true:false"
								 :value="item"></radio>
							</label>
						</view>
					</view>
				</radio-group>
			</view>
		</view>
		<!-- 是否录入窗口 -->
		
		<view class="cu-modal" :class="modalName=='DetailModal'?'show':''" @tap="hideModal">
			<view class="cu-dialog" @tap.stop="">
				<view>
					<view class="cu-bar align-center">
						<view class="content text-bold text-black">
							闭环落实
						</view>
					</view>
					
					<view class="bg-grey">
						此处显示详细信息
					</view>
					
					<view class="padding-xl">
						<text>是否录入研读网站</text>
					<switch></switch>
						
					</view>
					
					<view>
						<button>提交</button>
					</view>
					
				</view>
			</view>
		</view>
		
		
		<!-- 内容区 -->
		<view>
			<scroll-view>
				
				<view class="cu-item" v-for="(item,index) of data">
					<view class="history-card  flex justify-between  align-center flex-sub" @tap="showModal" data-target="DetailModal">
						<view >
						<view class="flex-sub text-bold">{{item.title}}</view>
						<view class="text-content">工单号：{{item.id}}</view>
						<view >提交者：{{item.worker}}</view>		
					</view>
					<view class="bg-img">
						
						<view class="text-content" :style="{color:(item.state?'green':'red')}">
							状态:{{item.state?"已审核":"未审核"}}
						</view>
						<view>更新时间:{{item.time}}</view>
					</view>
					</view>
				</view>
				
			</scroll-view>
			
		</view>
		
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				modalName: null,
				sortType: '时间降序',
				sortTypies:['时间降序','时间升序','id升序','id降序'],
				data:[
						{
						'title':'名称123',
						'id':'01',
						'worker':'Mary',
						'time':"2020-2-8",
						'state':true
						},
						{
					'title':'名称123',
						'id':'01',
						'worker':'Mary',
						'time':"2020-2-8",
						'state':false
						},
						{
					'title':'名称123',
						'id':'01',
						'worker':'Mary',
						'time':"2020-2-8",
						'state':true
						},
						{
				'title':'名称123',
						'id':'01',
						'worker':'Mary',
						'time':"2020-2-8",
						'state':true
						},
						{
				'title':'名称123',
						'id':'01',
						'worker':'Mary',
						'time':"2020-2-8",
						'state':true
						},
						{
			'title':'名称123',
						'id':'01',
						'worker':'Mary',
						'time':"2020-2-8",
						'state':true
						}
					]
				
			}
		},
		methods: {
			showModal(e) {
				this.modalName = e.currentTarget.dataset.target
			},
			hideModal(e) {
				this.modalName = null
			},
			changesort:function(e){
				this.sortType=e.detail.value
			},
			startDetail:function(){
				
			},
			backpage(){
				uni.navigateBack({
					delta: 1
				})
			}
			
		}
	}
</script>

<style scoped>
	.history-card{
		padding-left: 20upx;
		padding-top: 20upx;
		padding-bottom: 20upx;
		padding-right: 20pux;
		border-bottom:1upx solid #c8c8c8;	
	}
	.img{
		width: 70px;
		height: 70px;
		background-color: #C8C8C8;
	}
	.bg-img{
	margin-right: 20px;
	}
</style>
