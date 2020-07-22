<template>
	<view class="login">
		<view class="content">
			<!-- 头部logo -->
			<view class="header">
				<text class="title">大修质量</text>
			</view>
			<!-- 主体表单 -->
			<view class="main">
				<wInput v-model="phoneData" type="text" maxlength="11" placeholder="用户名/电话"></wInput>
				<wInput v-model="passData" type="password" maxlength="11" placeholder="密码"></wInput>
			</view>
			<wButton text="登 录" :rotate="isRotate" @click.native="startLogin()" class="wbutton"></wButton>



			<!-- 底部信息 -->
			<view class="footer">
<!-- 				<navigator url="register" open-type="navigate">账户注册</navigator> -->
				<navigator url="forget" open-type="navigate">忘记密码？</navigator>
			</view>
		</view>
	</view>
</template>

<script>
	var _this;
	import wInput from '../../components/watch-login/watch-input.vue' //input
	import wButton from '../../components/watch-login/watch-button.vue' //button

	export default {
		data() {
			return {
				//logo图片 base64
				logoImage: '',
				phoneData: '', //用户/电话
				passData: '', //密码
				isRotate: false, //是否加载旋转
			};
		},
		components: {
			wInput,
			wButton,
		},
		mounted() {
			_this = this;
			//this.isLogin();
		},
		methods: {
			isLogin() {
				//判断缓存中是否登录过，直接登录
				// try {
				// 	const value = uni.getStorageSync('setUserData');
				// 	if (value) {
				// 		//有登录信息
				// 		console.log("已登录用户：",value);
				// 		_this.$store.dispatch("setUserData",value); //存入状态
				// 		uni.reLaunch({
				// 			url: '../../../pages/index',
				// 		});
				// 	}
				// } catch (e) {
				// 	// error
				// }
			},
			startLogin() {
				//登录
				if (this.isRotate) {
					//判断是否加载中，避免重复点击请求
					return false;
				}
				if (this.phoneData.length == "") {
					uni.showToast({
						icon: 'none',
						position: 'bottom',
						title: '用户名不能为空'
					});
					return;
				}
				if (this.passData.length < 1) {
					uni.showToast({
						icon: 'none',
						position: 'bottom',
						title: '密码不正确'
					});
					return;
				}

				this.$request('/firstvue/login', {	
				},"POST").then(res => {
					// 打印调用成功回调
					console.log(res)
					// this.$store.Store({
						
					// }).commit();
				})

				uni.reLaunch({
					url: '../index/index',
				});

				console.log("登录成功")

				_this.isRotate = true
				setTimeout(function() {
					_this.isRotate = false
				}, 3000)


			}
		}
	}
</script>

<style>
	@import url("../../components/watch-login/css/icon.css");
	@import url("./css/main.css");
	
	.header{
		width: 100%;
		text-align:center
	}
	.title{
		width: 100%;
		color: #ff6735;
		font-size: 1.8em;
		font-weight: bold;
/* 		margin-left: 50%; */
	}
</style>
