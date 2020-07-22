<template>
<uni-shadow-root class="poiuy-applet-uinput-uinput"><view class="input-view">
	<block v-if="type !='textarea'">
		<view class="rel">

			<block v-if="(!borderInput)">
				<block v-if="dataType!='verifyCode'">
					<input :disabled="disabled" :type="type" :name="name" :class="'standard-bottom '+(error&&mustFill?'standard-bottom-error':error==false?'standard-bottom-success':'')" :maxlength="maxlength" :value="value" :placeholder="placeholder" @blur="input_blur" @input="input_input"></input>

					<block v-if="hasValue&&dataType=='password'">
						<text @click="openEyes" :class="'input-icon iconfont icon-mimakejian '+(openEyes?'dis-initial':'hidden')"></text>
						<text @click="openEyes" :class="'input-icon iconfont icon-mimabukejian '+(!openEyes?'dis-initial':'hidden')"></text>
					</block>
					<block v-if="hasValue&&dataType!='password'">
						<text @click="clearInput" :class="'input-icon iconfont icon-qingkongshanchu '+(!noClear?'dis-initial':'hidden')"></text>
					</block>
				</block>

				<block v-if="dataType=='verifyCode'">
					<input type="number" :name="name" :class="'standard-bottom verify-code '+(error&&mustFill?'standard-bottom-error':error==false?'standard-bottom-success':'')" maxlength="6" :value="value" :placeholder="placeholder" @blur="input_blur" @input="input_input"></input>
					<text :class="countimg?'geting':'get-code'" @click="countime">{{codeTxt}}</text>
				</block>
				<label :class="'standard-bottom-line '+(borderAnimation=='left'?'ani-left':borderAnimation=='center'?'ani-center':borderAnimation=='right'?'ani-right':'')">
				</label>
			</block>

			<block v-if="borderInput">
				<view v-if="picker">
					<picker @change="bindPickerChange" :value="index" :range="pickerData" range-key="name">
						<view class="box flex_x_start flex_y_center">
							<label>{{label}}</label>
							<input disabled :value="(!pickerFale ? pickerDefault : valueName)" :placeholder="placeholder" placeholder-class="placeholder"></input>
							<input :name="name" :value="value" hidden></input>
							<text class="iconfont icon-xiayibu"></text>
						</view>
					</picker>
				</view>

				<view class="box flex_x_start flex_y_center" v-if="(!picker)">
					<label>{{label}}</label>
					<input :name="name" :disabled="disabled" :type="type" :maxlength="maxlength" :value="value" :placeholder="placeholder" @blur="input_blur" @input="input_input" placeholder-class="placeholder"></input>
					<text v-if="isNextIcon" class="iconfont icon-xiayibu"></text>
					<block v-if="hasValue">
						<text @click="clearInput" :class="'input-icon-border iconfont  icon-qingkongshanchu '+(!noClear?'dis-initial':'hidden')"></text>
					</block>
				</view>
			</block>

		</view>
		<view class="error-tip" v-if="error">{{tipMsg}}</view>
	</block>

	<block v-if="type==='textarea'">
		<textarea :name="name" :placeholder="placeholder" :value="value" @blur="myText"></textarea>
	</block>


</view></uni-shadow-root>
</template>

<script>

global['__wxVueOptions'] = {components:{}}

global['__wxRoute'] = 'poiuy-applet-uinput/uinput'
Component({
	behaviors: ['wx://form-field'],
	properties: {
		value: {
			type: String,
			value: ''
		}, //值 文本内容 默认值 ''
		type: {
			type: String,
			value: 'text'
		}, //值 初始值  默认值 'text' 可选：tel|number|verifyCode|email|idcard 或者其他原生属性
		name: {
			type: String
		}, //name
		placeholder: {
			type: String,
			value: ''
		},
		noClear:{  //初始值 false 没有清空显示
			type: Boolean,
			value: false 
		},
		disabled:{
			type: Boolean,
			value: false 
		},
		maxlength: {
			type: Number,
			value: '25'
		}, //长度 默认25
		borderAnimation:{
			//输入框边线 入场动画 可选参数 left | center | right | none
			type: String,
			value: 'left'
		},
		borderInput:{
			type: Boolean,
			value: false
		},
		label:{
			type: String,
			value:''
		},
		isNextIcon:{
			type: Boolean,
			value: false
		},
		mustFill:{
			type: Boolean,
			value: true
	},
	picker:{
		type: Boolean,
		value: false
	},
	pickerData:{
		type:Array
	},
	pickerDefault:{
		type:String
	},
	canSendCode:{
		type:Boolean,
		value:true
	}
	},
	data: {
		tipMsg: '',
		error: null,
		hasValue:false,
		openEyes:false,
		dataType:null,
		codeTxt:'获取验证码',
		countimg:false,
		currCountDown:60,
		pickerFale:false
	},
	attached() {
		this.setData({
			dataType:this.properties.type
		});
		if(this.properties.type=='tel'){
			this.setData({
				type:'number',
				maxlength:11
			})
			return;
		}
		if(this.properties.type=='number'){
			this.setData({
				type:'number'
			})
			return;
		}
		if(this.properties.type=='idcard'){
			this.setData({
				type:'idcard',
				maxlength:18
			})
			return;
		}
	},
	methods: {
		onLoad: function() {
			const _this = this;
		},
		input_input(e){
			if(e.detail.value){
				this.data.hasValue = true;
			}else{
				this.data.hasValue = false;
			}
			this.setData({
				hasValue:this.data.hasValue,
				value: e.detail.value
			})
		},
		input_blur(e) {
			if (this.properties.mustFill) {
				if (e.detail.value) {
					this.data.error = false
					let input = e.detail.value;
					if (this.data.dataType == 'tel') {
						if (!(/^(13[0-9]|14[579]|15[0-3,5-9]|16[6]|17[0135678]|18[0-9]|19[189])\d{8}$/).test(input)) {
							this.data.tipMsg = '手机号格式不正确'
							this.data.error = true;
						} else {
							this.data.error = false
						}
					}
					if (this.data.dataType == 'email') {
						if (!(/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/).test(input)) {
							this.data.tipMsg = '邮箱格式不正确'
							this.data.error = true;
						} else {
							this.data.error = false
						}
					}

					if (this.data.dataType == 'idcard') {
						if (!this.data.identity_card.test(input)) {
							this.data.tipMsg = '身份证格式不正确'
							this.data.error = true;
						} else {
							this.data.error = false
						}
					}

					if (this.data.dataType == 'bankcard') {
						if (input.length < 16 || input.length > 19) {
							this.data.tipMsg = '银行卡号长度为16位~19位'
							this.data.error = true;
						} else {
							this.data.error = false
						}
					}

					this.setData({
						error:this.data.error,
						tipMsg:	this.data.tipMsg,
						// value:input
					})
				} else {
					this.setData({
						error:true,
						tipMsg:this.properties.placeholder || "",
						// value:input
					})
				}
				if(!this.data.error){
					this.triggerEvent('getValue', e.detail.value)
				}else{
					this.triggerEvent('getValue', false)
				}
			} else {
				this.triggerEvent('getValue', e.detail.value)
			}
		},
		clearInput(){
			this.setData({
				value:'',
				hasValue:false,
				error:false
			})
		},

		openEyes(){
			this.data.openEyes = !this.data.openEyes;
			if(this.data.openEyes){
				this.setData({
					openEyes:this.data.openEyes,
					type:'text',
				})
			}else{
				this.setData({
					openEyes:this.data.openEyes,
					type:'password',
				})
			}
		},
		countime(){
			const _this =this;
				if(!_this.data.countimg&&this.properties.canSendCode){
						this.countDownFun();
						this.triggerEvent('counting');
				}
		},
		countDownFun() {
			const _this = this;
			let timer = setInterval(function() {
				if (_this.data.currCountDown <= 0) {
					_this.data.currCountDown = 60
					_this.setData({
						countimg:false,
						codeTxt:"获取验证码"
					})
					clearInterval(timer);
					return;
				} else {
					_this.setData({
						countimg:true,
						codeTxt:"重新获取(" + _this.data.currCountDown + ")"
					})
					_this.data.currCountDown--;
				}
			}, 1000);
		},

		bindPickerChange(e){
			if(e.detail){
					this.setData({
						pickerFale:true,
						valueName:this.properties.pickerData[e.detail.value].name,
						value: this.properties.pickerData[e.detail.value].id
					})
					this.triggerEvent('pickerValue',this.properties.pickerData[e.detail.value]);
			}
		},

	}

})
export default global['__wxComponents']['poiuy-applet-uinput/uinput']
</script>
<style platform="mp-weixin">
/* control/uinput.css */

@import "/utils/common.css";


textarea,
.con-input {
	padding: 10rpx 20rpx 10rpx 40rpx;
	border: 1rpx solid #D4D4D4;
	border-radius: 10rpx;
	color: #707070;
	font-size: 28rpx;
	width: auto;
	z-index: 0;
}

.error-tip {
	font-size: 26rpx;
	color: #de0000;
	position: absolute;
}

.input-view {
	margin-bottom:50rpx;
}

.standard-bottom {
	border: none;
	/* border-bottom: 1px solid #c0c0c0; */
	width: 100%;
	padding: 0 60rpx 0 1px;
	font-size: 30rpx;
	height: 70rpx;
	transition: all .5s;
	line-height: 70upx;
	color: #707070;
	box-sizing: border-box;
	position: relative;
}

.verify-code{
	padding: 0 50% 0 1px;
}

.standard-bottom-line {
	position: absolute;
	height: 1px;
	bottom: 0;
	width: 100%;
	background-color: #EEEEEE;
}

.ani-left {
	left: 0%;
	animation: left 1.5s;
}

.ani-center {
	left: 0%;
	animation: center 1.5s;
}

.ani-right {
	right: 0%;
	animation: left 1.5s;
}


@keyframes left {
	0% {
		background-color: #c0c0c0;
		width: 0;
	}

	100% {
		background-color: #EEEEEE;
		width: 100%;
	}
}

@keyframes center {
	0% {
		background-color: #c0c0c0;
		width: 0;
		left: 50%;
	}

	100% {
		background-color: #EEEEEE;
		width: 100%;
		left: 0%;
	}
}

.input-icon{
	font-size: 36rpx;
	color: #C1C1C1;
	position: absolute;
	right: 10rpx;
	bottom: 10%;
	transition: all .3s;
	z-index: 99;
}

.input-icon-border{
	font-size: 36rpx;
	color: #C1C1C1;
	position: absolute;
	right: 10rpx;
	bottom: 30%;
	transition: all .3s;
	z-index: 99;
}

.error {
	border: 1px solid #ad1212 !important;
}

.success {
	border: 2.1739upx solid #008000 !important;
}

.standard-bottom-error {
	border-bottom: 1px solid #ad1212 !important;
}

.standard-bottom-success {
	border-bottom: 1px solid #008000 !important;
}

.get-code{
	position: absolute;
	right: 0;
	bottom: 20%;
	font-size: 28rpx;
	color: rgb(136, 136, 136);
	line-height: 35rpx;
	margin-right: 10rpx;
	border-left: 1px solid #f3f3f3;
	width: 30%;
	text-align: right;	
}

.geting{
	position: absolute;
	right: 0;
	bottom: 20%;
	font-size: 28rpx;
	line-height: 35rpx;
	margin-right: 10rpx;
	border-left: 1px solid #f3f3f3;
	width: 30%;
	text-align: right;	
	color:#c1c1c1;
}


.box{
  border:1rpx solid #EEEEEE;
  height: 100rpx;
  width: 100%;
  box-sizing: border-box;
}

.box>label{
  color: #101010;
  width: 25%;
  text-align: right;
  padding-right: 20rpx;
  border-right: 1rpx solid #E2E2E2;
  font-size: 28rpx;
  font-family: PingFangSC-regular;
}

.box >input{
    font-size: 28rpx;
		width: 62%;
		margin-left: 3%;
}

.placeholder{
  font-size: 26rpx;
  color: #999999;
}

.icon-xiayibu{
  width: 8%;
  color: #999999;
  font-size: 40rpx;
}
</style>