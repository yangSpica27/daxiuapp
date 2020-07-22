<template>
	<view>
		<cu-custom bgImage="linear-gradient(to right, #1890FF, #69C0FF)" :isBack="false" :isShadown="false">
			<block slot="content">主页</block>
		</cu-custom>

		<view class="cu-bar search bg-white">
			<view class="search-form ">
				<text class="cuIcon-search"></text>
				<input @focus="InputFocus" @blur="InputBlur" :adjust-position="false" type="text" placeholder="根据标题搜索" confirm-type="search">
				</input>
			</view>
			<view class="action">
				<button class="cu-btn search-button shadow-blur ">搜索</button>
			</view>
		</view>

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

		<mescroll-body ref="mescrollRef" @init="mescrollInit" :down="downOption" @down="downCallback" @up="upCallback">

			<view class="notice">

			</view>
			<view class="cu-item" v-for="(item,index) of data">
				<view class="history-card  flex justify-between align-center flex-sub" @click="startDetail(item.id)">
					<view>
						<view class="flex-sub text-bold">{{item.title}}</view>
						<view class="text-content">编号：{{item.id}}</view>
						<text class="fuzeren">负责人：{{item.worker}}</text>
						<text class="time">2020.11.2</text>
					</view>
<!-- 					<view class="bg-img">
						<image class="img"></image>
					</view> -->
				</view>
			</view>
		</mescroll-body>
	</view>

</template>

<script>
	import MescrollMixin from "@/components/mescroll-uni/mescroll-mixins.js";
	import {
		apiNewList
	} from "@/api/mock.js"

	export default {
		mixins: [MescrollMixin], // 使用mixin (在main.js注册全局组件)
		data() {
			return {
				downOption: {
					autoShowLoading: true, // 显示下拉刷新的进度条
					textColor: "#0055ff" // 下拉刷新的文本颜色
				},
				modalName: null,
				sortType: '时间降序',
				sortTypies: ['时间降序', '时间升序', '字母升序', '字母降序'],
				data: [{
						'title': '大修轮次',
						'id': '01',
						'worker': 'Mary',
						'time': "2020-2-8"
					},
					{
						'title': '大修轮次',
						'id': '02',
						'worker': 'Mary',
						'time': "2020-2-8"
					},
					{
						'title': '大修轮次',
						'id': '03',
						'worker': 'Mary',
						'time': "2020-2-8"
					},
					{
						'title': '大修轮次',
						'id': '04',
						'worker': 'Mary',
						'time': "2020-2-8"
					},
					{
						'title': '大修轮次',
						'id': '01',
						'worker': 'Mary',
						'time': "2020-2-8"
					},
					{
						'title': '大修轮次',
						'id': '05',
						'worker': 'Mary',
						'time': "2020-2-8"
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
			changesort: function(e) {
				this.sortType = e.detail.value
			},
			startDetail: function(e) {
				uni.navigateTo({
					url: '../startcheck/startcheck?id=' + e,
					
					
				});
			},
			/*下拉刷新的回调 */
			downCallback() {
				//联网加载数据
				apiNewList().then(data => {
					//联网成功的回调,隐藏下拉刷新的状态
					this.mescroll.endSuccess();
					//设置列表数据
					this.dataList.unshift(data[0]);
				}).catch(() => {
					//联网失败的回调,隐藏下拉刷新的状态
					this.mescroll.endErr();
				})
			},
			/*上拉加载的回调: 其中page.num:当前页 从1开始, page.size:每页数据条数,默认10 */
			upCallback(page) {
				//联网加载数据
				apiNewList(page.num, page.size).then(curPageData => {
					//联网成功的回调,隐藏下拉刷新和上拉加载的状态;
					//mescroll会根据传的参数,自动判断列表如果无任何数据,则提示空;列表无下一页数据,则提示无更多数据;

					//方法一(推荐): 后台接口有返回列表的总页数 totalPage
					//this.mescroll.endByPage(curPageData.length, totalPage); //必传参数(当前页的数据个数, 总页数)

					//方法二(推荐): 后台接口有返回列表的总数据量 totalSize
					//this.mescroll.endBySize(curPageData.length, totalSize); //必传参数(当前页的数据个数, 总数据量)

					//方法三(推荐): 您有其他方式知道是否有下一页 hasNext
					//this.mescroll.endSuccess(curPageData.length, hasNext); //必传参数(当前页的数据个数, 是否有下一页true/false)

					//方法四 (不推荐),会存在一个小问题:比如列表共有20条数据,每页加载10条,共2页.如果只根据当前页的数据个数判断,则需翻到第三页才会知道无更多数据.
					this.mescroll.endSuccess(curPageData.length);

					//设置列表数据
					this.dataList = this.dataList.concat(curPageData);
				}).catch(() => {
					//联网失败, 结束加载
					this.mescroll.endErr();
				})
			}
		}
	}
</script>

<style scoped>
	#sorttype-content {
		padding: 20px;
	}

	.search-button {
		background-color: #1890FF;
		color: #FFF;
	}

	.history-card {
		padding-left: 20upx;
		padding-top: 20upx;
		padding-bottom: 20upx;
		padding-right: 20upx;
		width: 100%;
		
		border-bottom: 1upx solid #c8c8c8;
		display: inline-block;
	}

	.img {
		width: 70px;
		height: 70px;
		background-color: #C8C8C8;
		float: right;
	}

	.bg-img {
		margin-right: 20px;
	}
	
	.time{
		float: right;
	}
	

</style>
