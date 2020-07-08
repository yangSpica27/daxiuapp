<template>
	<view class="page">
		<!-- 准备流程评测 -->
		<view class="cu-bar shadow" style="background: linear-gradient(to right, #1890FF, #69C0FF);">
			<view class="action">
				<text class="cuIcon-back text-white"></text>
				<text class="text-white">返回</text>
			</view>
			<view class="content text-bold text-white">
				准备阶段打分
			</view>
		</view>

		<scroll-view scroll-y>
			<view class="info-container">
				<view class="title">工前准备</view>
				<text class="sub-title">班前会</text>
				<view class="item-container">
					<view class="cu-item" :class="menuArrow?'arrow':''">
						<view class="content">
							<text class="text-grey">每日一句</text>
						</view>
						<view class="action">
							<text class="text-grey text-sm">0.8分</text>
						</view>
					</view>
					
					<view class="cu-item" :class="menuArrow?'arrow':''">
						<view class="content">
							<text class="text-grey">确认人员状态</text>
						</view>
						<view class="action">
							<text class="text-grey text-sm">0.8分</text>
						</view>
					</view>
					
					<view class="cu-item" :class="menuArrow?'arrow':''">
						<view class="content">
							<text class="text-grey">传达管理员要求和安全质量反馈</text>
						</view>
						<view class="action">
							<text class="text-grey text-sm">0.8分</text>
						</view>
					</view>
					
					<view class="cu-item" :class="menuArrow?'arrow':''">
						<view class="content">
							<text class="text-grey">提醒当天需要关注的高风险及其他重要工作</text>
						</view>
						<view class="action">
							<text class="text-grey text-sm">0.8分</text>
						</view>
					</view>
					
					<view class="cu-item" :class="menuArrow?'arrow':''">
						<view class="content">
							<text class="text-grey">确认工作者成员无疑问</text>
						</view>
						<view class="action">
							<text class="text-grey ">0.8分</text>
						</view>
					</view>
					
					<view class="cu-item" :class="menuArrow?'arrow':''">
						<view class="content">
							<text class="text-grey">安全质量TOP3或重要经验反馈调查</text>
						</view>
						<view class="action">
							<text class="text-grey">0.8分</text>
						</view>
					</view>
				
				</view>
				
				
				<text class="sub-title">技术交流及演练</text>
				<view class="item-container">
					
					<view class="cu-item" :class="menuArrow?'arrow':''">
						<view class="content">
							<text class="text-grey">每日一句</text>
						</view>
						<view class="action">
							<text class="text-grey text-sm">0.8分</text>
						</view>
					</view>
					
					<view class="cu-item" :class="menuArrow?'arrow':''">
						<view class="content">
							<text class="text-grey">确认人员状态</text>
						</view>
						<view class="action">
							<text class="text-grey text-sm">0.8分</text>
						</view>
					</view>
					
					<view class="cu-item" :class="menuArrow?'arrow':''">
						<view class="content">
							<text class="text-grey">传达管理员要求和安全质量反馈</text>
						</view>
						<view class="action">
							<text class="text-grey text-sm">0.8分</text>
						</view>
					</view>
					
					<view class="cu-item" :class="menuArrow?'arrow':''">
						<view class="content">
							<text class="text-grey">提醒当天需要关注的高风险及其他重要工作</text>
						</view>
						<view class="action">
							<text class="text-grey text-sm">0.8分</text>
						</view>
					</view>
					
					<view class="cu-item" :class="menuArrow?'arrow':''">
						<view class="content">
							<text class="text-grey">确认工作者成员无疑问</text>
						</view>
						<view class="action">
							<text class="text-grey ">0.8分</text>
						</view>
					</view>
					
					<view class="cu-item" :class="menuArrow?'arrow':''">
						<view class="content">
							<text class="text-grey">安全质量TOP3或重要经验反馈调查</text>
						</view>
						<view class="action">
							<text class="text-grey">0.8分</text>
						</view>
					</view>
				
				</view>
				
				<text class="sub-title">工前会</text>
				
				<view class="item-container">
					
					<view class="cu-item" :class="menuArrow?'arrow':''">
						<view class="content">
							<text class="text-grey">每日一句</text>
						</view>
						<view class="action">
							<text class="text-grey text-sm">0.8分</text>
						</view>
					</view>
					
					<view class="cu-item" :class="menuArrow?'arrow':''">
						<view class="content">
							<text class="text-grey">确认人员状态</text>
						</view>
						<view class="action">
							<text class="text-grey text-sm">0.8分</text>
						</view>
					</view>
					
					<view class="cu-item" :class="menuArrow?'arrow':''">
						<view class="content">
							<text class="text-grey">传达管理员要求和安全质量反馈</text>
						</view>
						<view class="action">
							<text class="text-grey text-sm">0.8分</text>
						</view>
					</view>
					
					<view class="cu-item" :class="menuArrow?'arrow':''">
						<view class="content">
							<text class="text-grey">提醒当天需要关注的高风险及其他重要工作</text>
						</view>
						<view class="action">
							<text class="text-grey text-sm">0.8分</text>
						</view>
					</view>
					
					<view class="cu-item" :class="menuArrow?'arrow':''">
						<view class="content">
							<text class="text-grey">确认工作者成员无疑问</text>
						</view>
						<view class="action">
							<text class="text-grey ">0.8分</text>
						</view>
					</view>
					
					<view class="cu-item" :class="menuArrow?'arrow':''">
						<view class="content">
							<text class="text-grey">安全质量TOP3或重要经验反馈调查</text>
						</view>
						<view class="action">
							<text class="text-grey">0.8分</text>
						</view>
					</view>
				
				</view>
				
				<text class="sub-title">开工条件验证</text>
				<view class="item-container">
					
					<view class="cu-item" :class="menuArrow?'arrow':''">
						<view class="content">
							<text class="text-grey">每日一句</text>
						</view>
						<view class="action">
							<text class="text-grey text-sm">0.8分</text>
						</view>
					</view>
					
					<view class="cu-item" :class="menuArrow?'arrow':''">
						<view class="content">
							<text class="text-grey">确认人员状态</text>
						</view>
						<view class="action">
							<text class="text-grey text-sm">0.8分</text>
						</view>
					</view>
					
					<view class="cu-item" :class="menuArrow?'arrow':''">
						<view class="content">
							<text class="text-grey">传达管理员要求和安全质量反馈</text>
						</view>
						<view class="action">
							<text class="text-grey text-sm">0.8分</text>
						</view>
					</view>
					
					<view class="cu-item" :class="menuArrow?'arrow':''">
						<view class="content">
							<text class="text-grey">提醒当天需要关注的高风险及其他重要工作</text>
						</view>
						<view class="action">
							<text class="text-grey text-sm">0.8分</text>
						</view>
					</view>
					
					<view class="cu-item" :class="menuArrow?'arrow':''">
						<view class="content">
							<text class="text-grey">确认工作者成员无疑问</text>
						</view>
						<view class="action">
							<text class="text-grey ">0.8分</text>
						</view>
					</view>
					
					<view class="cu-item" :class="menuArrow?'arrow':''">
						<view class="content">
							<text class="text-grey">安全质量TOP3或重要经验反馈调查</text>
						</view>
						<view class="action">
							<text class="text-grey">0.8分</text>
						</view>
					</view>
				
				</view>
				
				<view class="title">作业流程</view>
				<text class="sub-title">作业区</text>
				<view class="item-container">
					
					<view class="cu-item" :class="menuArrow?'arrow':''">
						<view class="content">
							<text class="text-grey">每日一句</text>
						</view>
						<view class="action">
							<text class="text-grey text-sm">0.8分</text>
						</view>
					</view>
					
					<view class="cu-item" :class="menuArrow?'arrow':''">
						<view class="content">
							<text class="text-grey">确认人员状态</text>
						</view>
						<view class="action">
							<text class="text-grey text-sm">0.8分</text>
						</view>
					</view>
					
					<view class="cu-item" :class="menuArrow?'arrow':''">
						<view class="content">
							<text class="text-grey">传达管理员要求和安全质量反馈</text>
						</view>
						<view class="action">
							<text class="text-grey text-sm">0.8分</text>
						</view>
					</view>
					
					<view class="cu-item" :class="menuArrow?'arrow':''">
						<view class="content">
							<text class="text-grey">提醒当天需要关注的高风险及其他重要工作</text>
						</view>
						<view class="action">
							<text class="text-grey text-sm">0.8分</text>
						</view>
					</view>
					
					<view class="cu-item" :class="menuArrow?'arrow':''">
						<view class="content">
							<text class="text-grey">确认工作者成员无疑问</text>
						</view>
						<view class="action">
							<text class="text-grey ">0.8分</text>
						</view>
					</view>
					
					<view class="cu-item" :class="menuArrow?'arrow':''">
						<view class="content">
							<text class="text-grey">安全质量TOP3或重要经验反馈调查</text>
						</view>
						<view class="action">
							<text class="text-grey">0.8分</text>
						</view>
					</view>
				
				</view>
				
				<text class="title">高风险三级管控</text>
				<view class="item-container">
					
					<view class="cu-item" :class="menuArrow?'arrow':''">
						<view class="content">
							<text class="text-grey">每日一句</text>
						</view>
						<view class="action">
							<text class="text-grey text-sm">0.8分</text>
						</view>
					</view>
					
					<view class="cu-item" :class="menuArrow?'arrow':''">
						<view class="content">
							<text class="text-grey">确认人员状态</text>
						</view>
						<view class="action">
							<text class="text-grey text-sm">0.8分</text>
						</view>
					</view>
					
					<view class="cu-item" :class="menuArrow?'arrow':''">
						<view class="content">
							<text class="text-grey">传达管理员要求和安全质量反馈</text>
						</view>
						<view class="action">
							<text class="text-grey text-sm">0.8分</text>
						</view>
					</view>
					
					<view class="cu-item" :class="menuArrow?'arrow':''">
						<view class="content">
							<text class="text-grey">提醒当天需要关注的高风险及其他重要工作</text>
						</view>
						<view class="action">
							<text class="text-grey text-sm">0.8分</text>
						</view>
					</view>
					
					<view class="cu-item" :class="menuArrow?'arrow':''">
						<view class="content">
							<text class="text-grey">确认工作者成员无疑问</text>
						</view>
						<view class="action">
							<text class="text-grey ">0.8分</text>
						</view>
					</view>
					
					<view class="cu-item" :class="menuArrow?'arrow':''">
						<view class="content">
							<text class="text-grey">安全质量TOP3或重要经验反馈调查</text>
						</view>
						<view class="action">
							<text class="text-grey">0.8分</text>
						</view>
					</view>
				
				</view>
				
				<text class="title">现场文件执行</text>
				<view class="item-container">
					
					<view class="cu-item" :class="menuArrow?'arrow':''">
						<view class="content">
							<text class="text-grey">每日一句</text>
						</view>
						<view class="action">
							<text class="text-grey text-sm">0.8分</text>
						</view>
					</view>
					
					<view class="cu-item" :class="menuArrow?'arrow':''">
						<view class="content">
							<text class="text-grey">确认人员状态</text>
						</view>
						<view class="action">
							<text class="text-grey text-sm">0.8分</text>
						</view>
					</view>
					
					<view class="cu-item" :class="menuArrow?'arrow':''">
						<view class="content">
							<text class="text-grey">传达管理员要求和安全质量反馈</text>
						</view>
						<view class="action">
							<text class="text-grey text-sm">0.8分</text>
						</view>
					</view>
					
					<view class="cu-item" :class="menuArrow?'arrow':''">
						<view class="content">
							<text class="text-grey">提醒当天需要关注的高风险及其他重要工作</text>
						</view>
						<view class="action">
							<text class="text-grey text-sm">0.8分</text>
						</view>
					</view>
					
					<view class="cu-item" :class="menuArrow?'arrow':''">
						<view class="content">
							<text class="text-grey">确认工作者成员无疑问</text>
						</view>
						<view class="action">
							<text class="text-grey ">0.8分</text>
						</view>
					</view>
					
					<view class="cu-item" :class="menuArrow?'arrow':''">
						<view class="content">
							<text class="text-grey">安全质量TOP3或重要经验反馈调查</text>
						</view>
						<view class="action">
							<text class="text-grey">0.8分</text>
						</view>
					</view>
				
				</view>
				
				<text class="title">班前会</text>
				<view class="item-container">
					
					<view class="cu-item" :class="menuArrow?'arrow':''">
						<view class="content">
							<text class="text-grey">每日一句</text>
						</view>
						<view class="action">
							<text class="text-grey text-sm">0.8分</text>
						</view>
					</view>
					
					<view class="cu-item" :class="menuArrow?'arrow':''">
						<view class="content">
							<text class="text-grey">确认人员状态</text>
						</view>
						<view class="action">
							<text class="text-grey text-sm">0.8分</text>
						</view>
					</view>
					
					<view class="cu-item" :class="menuArrow?'arrow':''">
						<view class="content">
							<text class="text-grey">传达管理员要求和安全质量反馈</text>
						</view>
						<view class="action">
							<text class="text-grey text-sm">0.8分</text>
						</view>
					</view>
					
					<view class="cu-item" :class="menuArrow?'arrow':''">
						<view class="content">
							<text class="text-grey">提醒当天需要关注的高风险及其他重要工作</text>
						</view>
						<view class="action">
							<text class="text-grey text-sm">0.8分</text>
						</view>
					</view>
					
					<view class="cu-item" :class="menuArrow?'arrow':''">
						<view class="content">
							<text class="text-grey">确认工作者成员无疑问</text>
						</view>
						<view class="action">
							<text class="text-grey ">0.8分</text>
						</view>
					</view>
					
					<view class="cu-item" :class="menuArrow?'arrow':''">
						<view class="content">
							<text class="text-grey">安全质量TOP3或重要经验反馈调查</text>
						</view>
						<view class="action">
							<text class="text-grey">0.8分</text>
						</view>
					</view>
				
				</view>
				
				<text class="title">班前会</text>
				<view class="item-container">
					
					<view class="cu-item" :class="menuArrow?'arrow':''">
						<view class="content">
							<text class="text-grey">每日一句</text>
						</view>
						<view class="action">
							<text class="text-grey text-sm">0.8分</text>
						</view>
					</view>
					
					<view class="cu-item" :class="menuArrow?'arrow':''">
						<view class="content">
							<text class="text-grey">确认人员状态</text>
						</view>
						<view class="action">
							<text class="text-grey text-sm">0.8分</text>
						</view>
					</view>
					
					<view class="cu-item" :class="menuArrow?'arrow':''">
						<view class="content">
							<text class="text-grey">传达管理员要求和安全质量反馈</text>
						</view>
						<view class="action">
							<text class="text-grey text-sm">0.8分</text>
						</view>
					</view>
					
					<view class="cu-item" :class="menuArrow?'arrow':''">
						<view class="content">
							<text class="text-grey">提醒当天需要关注的高风险及其他重要工作</text>
						</view>
						<view class="action">
							<text class="text-grey text-sm">0.8分</text>
						</view>
					</view>
					
					<view class="cu-item" :class="menuArrow?'arrow':''">
						<view class="content">
							<text class="text-grey">确认工作者成员无疑问</text>
						</view>
						<view class="action">
							<text class="text-grey ">0.8分</text>
						</view>
					</view>
					
					<view class="cu-item" :class="menuArrow?'arrow':''">
						<view class="content">
							<text class="text-grey">安全质量TOP3或重要经验反馈调查</text>
						</view>
						<view class="action">
							<text class="text-grey">0.8分</text>
						</view>
					</view>
				
				</view>
				
				<text class="title">班前会</text>
				<view class="item-container">
					
					<view class="cu-item" :class="menuArrow?'arrow':''">
						<view class="content">
							<text class="text-grey">每日一句</text>
						</view>
						<view class="action">
							<text class="text-grey text-sm">0.8分</text>
						</view>
					</view>
					
					<view class="cu-item" :class="menuArrow?'arrow':''">
						<view class="content">
							<text class="text-grey">确认人员状态</text>
						</view>
						<view class="action">
							<text class="text-grey text-sm">0.8分</text>
						</view>
					</view>
					
					<view class="cu-item" :class="menuArrow?'arrow':''">
						<view class="content">
							<text class="text-grey">传达管理员要求和安全质量反馈</text>
						</view>
						<view class="action">
							<text class="text-grey text-sm">0.8分</text>
						</view>
					</view>
					
					<view class="cu-item" :class="menuArrow?'arrow':''">
						<view class="content">
							<text class="text-grey">提醒当天需要关注的高风险及其他重要工作</text>
						</view>
						<view class="action">
							<text class="text-grey text-sm">0.8分</text>
						</view>
					</view>
					
					<view class="cu-item" :class="menuArrow?'arrow':''">
						<view class="content">
							<text class="text-grey">确认工作者成员无疑问</text>
						</view>
						<view class="action">
							<text class="text-grey ">0.8分</text>
						</view>
					</view>
					
					<view class="cu-item" :class="menuArrow?'arrow':''">
						<view class="content">
							<text class="text-grey">安全质量TOP3或重要经验反馈调查</text>
						</view>
						<view class="action">
							<text class="text-grey">0.8分</text>
						</view>
					</view>
				
				</view>
				
				<text class="title">班前会</text>
				<view class="item-container">
					
					<view class="cu-item" :class="menuArrow?'arrow':''">
						<view class="content">
							<text class="text-grey">每日一句</text>
						</view>
						<view class="action">
							<text class="text-grey text-sm">0.8分</text>
						</view>
					</view>
					
					<view class="cu-item" :class="menuArrow?'arrow':''">
						<view class="content">
							<text class="text-grey">确认人员状态</text>
						</view>
						<view class="action">
							<text class="text-grey text-sm">0.8分</text>
						</view>
					</view>
					
					<view class="cu-item" :class="menuArrow?'arrow':''">
						<view class="content">
							<text class="text-grey">传达管理员要求和安全质量反馈</text>
						</view>
						<view class="action">
							<text class="text-grey text-sm">0.8分</text>
						</view>
					</view>
					
					<view class="cu-item" :class="menuArrow?'arrow':''">
						<view class="content">
							<text class="text-grey">提醒当天需要关注的高风险及其他重要工作</text>
						</view>
						<view class="action">
							<text class="text-grey text-sm">0.8分</text>
						</view>
					</view>
					
					<view class="cu-item" :class="menuArrow?'arrow':''">
						<view class="content">
							<text class="text-grey">确认工作者成员无疑问</text>
						</view>
						<view class="action">
							<text class="text-grey ">0.8分</text>
						</view>
					</view>
					
					<view class="cu-item" :class="menuArrow?'arrow':''">
						<view class="content">
							<text class="text-grey">安全质量TOP3或重要经验反馈调查</text>
						</view>
						<view class="action">
							<text class="text-grey">0.8分</text>
						</view>
					</view>
				
				</view>
				
				<text class="title">班前会</text>
				<view class="item-container">
					
					<view class="cu-item" :class="menuArrow?'arrow':''">
						<view class="content">
							<text class="text-grey">每日一句</text>
						</view>
						<view class="action">
							<text class="text-grey text-sm">0.8分</text>
						</view>
					</view>
					
					<view class="cu-item" :class="menuArrow?'arrow':''">
						<view class="content">
							<text class="text-grey">确认人员状态</text>
						</view>
						<view class="action">
							<text class="text-grey text-sm">0.8分</text>
						</view>
					</view>
					
					<view class="cu-item" :class="menuArrow?'arrow':''">
						<view class="content">
							<text class="text-grey">传达管理员要求和安全质量反馈</text>
						</view>
						<view class="action">
							<text class="text-grey text-sm">0.8分</text>
						</view>
					</view>
					
					<view class="cu-item" :class="menuArrow?'arrow':''">
						<view class="content">
							<text class="text-grey">提醒当天需要关注的高风险及其他重要工作</text>
						</view>
						<view class="action">
							<text class="text-grey text-sm">0.8分</text>
						</view>
					</view>
					
					<view class="cu-item" :class="menuArrow?'arrow':''">
						<view class="content">
							<text class="text-grey">确认工作者成员无疑问</text>
						</view>
						<view class="action">
							<text class="text-grey ">0.8分</text>
						</view>
					</view>
					
					<view class="cu-item" :class="menuArrow?'arrow':''">
						<view class="content">
							<text class="text-grey">安全质量TOP3或重要经验反馈调查</text>
						</view>
						<view class="action">
							<text class="text-grey">0.8分</text>
						</view>
					</view>
				
				</view>
				
				
				<text class="title">班前会</text>
				<view class="item-container">
					
					<view class="cu-item" :class="menuArrow?'arrow':''">
						<view class="content">
							<text class="text-grey">每日一句</text>
						</view>
						<view class="action">
							<text class="text-grey text-sm">0.8分</text>
						</view>
					</view>
					
					<view class="cu-item" :class="menuArrow?'arrow':''">
						<view class="content">
							<text class="text-grey">确认人员状态</text>
						</view>
						<view class="action">
							<text class="text-grey text-sm">0.8分</text>
						</view>
					</view>
					
					<view class="cu-item" :class="menuArrow?'arrow':''">
						<view class="content">
							<text class="text-grey">传达管理员要求和安全质量反馈</text>
						</view>
						<view class="action">
							<text class="text-grey text-sm">0.8分</text>
						</view>
					</view>
					
					<view class="cu-item" :class="menuArrow?'arrow':''">
						<view class="content">
							<text class="text-grey">提醒当天需要关注的高风险及其他重要工作</text>
						</view>
						<view class="action">
							<text class="text-grey text-sm">0.8分</text>
						</view>
					</view>
					
					<view class="cu-item" :class="menuArrow?'arrow':''">
						<view class="content">
							<text class="text-grey">确认工作者成员无疑问</text>
						</view>
						<view class="action">
							<text class="text-grey ">0.8分</text>
						</view>
					</view>
					
					<view class="cu-item" :class="menuArrow?'arrow':''">
						<view class="content">
							<text class="text-grey">安全质量TOP3或重要经验反馈调查</text>
						</view>
						<view class="action">
							<text class="text-grey">0.8分</text>
						</view>
					</view>
				
				</view>
				
				
				<text class="title">班前会</text>
				<view class="item-container">
					
					<view class="cu-item" :class="menuArrow?'arrow':''">
						<view class="content">
							<text class="text-grey">每日一句</text>
						</view>
						<view class="action">
							<text class="text-grey text-sm">0.8分</text>
						</view>
					</view>
					
					<view class="cu-item" :class="menuArrow?'arrow':''">
						<view class="content">
							<text class="text-grey">确认人员状态</text>
						</view>
						<view class="action">
							<text class="text-grey text-sm">0.8分</text>
						</view>
					</view>
					
					<view class="cu-item" :class="menuArrow?'arrow':''">
						<view class="content">
							<text class="text-grey">传达管理员要求和安全质量反馈</text>
						</view>
						<view class="action">
							<text class="text-grey text-sm">0.8分</text>
						</view>
					</view>
					
					<view class="cu-item" :class="menuArrow?'arrow':''">
						<view class="content">
							<text class="text-grey">提醒当天需要关注的高风险及其他重要工作</text>
						</view>
						<view class="action">
							<text class="text-grey text-sm">0.8分</text>
						</view>
					</view>
					
					<view class="cu-item" :class="menuArrow?'arrow':''">
						<view class="content">
							<text class="text-grey">确认工作者成员无疑问</text>
						</view>
						<view class="action">
							<text class="text-grey ">0.8分</text>
						</view>
					</view>
					
					<view class="cu-item" :class="menuArrow?'arrow':''">
						<view class="content">
							<text class="text-grey">安全质量TOP3或重要经验反馈调查</text>
						</view>
						<view class="action">
							<text class="text-grey">0.8分</text>
						</view>
					</view>
				
				</view>
				
				
				<text class="title">班前会</text>
				<view class="item-container">
					
					<view class="cu-item" :class="menuArrow?'arrow':''">
						<view class="content">
							<text class="text-grey">每日一句</text>
						</view>
						<view class="action">
							<text class="text-grey text-sm">0.8分</text>
						</view>
					</view>
					
					<view class="cu-item" :class="menuArrow?'arrow':''">
						<view class="content">
							<text class="text-grey">确认人员状态</text>
						</view>
						<view class="action">
							<text class="text-grey text-sm">0.8分</text>
						</view>
					</view>
					
					<view class="cu-item" :class="menuArrow?'arrow':''">
						<view class="content">
							<text class="text-grey">传达管理员要求和安全质量反馈</text>
						</view>
						<view class="action">
							<text class="text-grey text-sm">0.8分</text>
						</view>
					</view>
					
					<view class="cu-item" :class="menuArrow?'arrow':''">
						<view class="content">
							<text class="text-grey">提醒当天需要关注的高风险及其他重要工作</text>
						</view>
						<view class="action">
							<text class="text-grey text-sm">0.8分</text>
						</view>
					</view>
					
					<view class="cu-item" :class="menuArrow?'arrow':''">
						<view class="content">
							<text class="text-grey">确认工作者成员无疑问</text>
						</view>
						<view class="action">
							<text class="text-grey ">0.8分</text>
						</view>
					</view>
					
					<view class="cu-item" :class="menuArrow?'arrow':''">
						<view class="content">
							<text class="text-grey">安全质量TOP3或重要经验反馈调查</text>
						</view>
						<view class="action">
							<text class="text-grey">0.8分</text>
						</view>
					</view>
				
				</view>
				
				<text class="title">班前会</text>
				<view class="item-container">
					
					<view class="cu-item" :class="menuArrow?'arrow':''">
						<view class="content">
							<text class="text-grey">每日一句</text>
						</view>
						<view class="action">
							<text class="text-grey text-sm">0.8分</text>
						</view>
					</view>
					
					<view class="cu-item" :class="menuArrow?'arrow':''">
						<view class="content">
							<text class="text-grey">确认人员状态</text>
						</view>
						<view class="action">
							<text class="text-grey text-sm">0.8分</text>
						</view>
					</view>
					
					<view class="cu-item" :class="menuArrow?'arrow':''">
						<view class="content">
							<text class="text-grey">传达管理员要求和安全质量反馈</text>
						</view>
						<view class="action">
							<text class="text-grey text-sm">0.8分</text>
						</view>
					</view>
					
					<view class="cu-item" :class="menuArrow?'arrow':''">
						<view class="content">
							<text class="text-grey">提醒当天需要关注的高风险及其他重要工作</text>
						</view>
						<view class="action">
							<text class="text-grey text-sm">0.8分</text>
						</view>
					</view>
					
					<view class="cu-item" :class="menuArrow?'arrow':''">
						<view class="content">
							<text class="text-grey">确认工作者成员无疑问</text>
						</view>
						<view class="action">
							<text class="text-grey ">0.8分</text>
						</view>
					</view>
					
					<view class="cu-item" :class="menuArrow?'arrow':''">
						<view class="content">
							<text class="text-grey">安全质量TOP3或重要经验反馈调查</text>
						</view>
						<view class="action">
							<text class="text-grey">0.8分</text>
						</view>
					</view>
				
				</view>
				
				<text class="title">班前会</text>
				<view class="item-container">
					
					<view class="cu-item" :class="menuArrow?'arrow':''">
						<view class="content">
							<text class="text-grey">每日一句</text>
						</view>
						<view class="action">
							<text class="text-grey text-sm">0.8分</text>
						</view>
					</view>
					
					<view class="cu-item" :class="menuArrow?'arrow':''">
						<view class="content">
							<text class="text-grey">确认人员状态</text>
						</view>
						<view class="action">
							<text class="text-grey text-sm">0.8分</text>
						</view>
					</view>
					
					<view class="cu-item" :class="menuArrow?'arrow':''">
						<view class="content">
							<text class="text-grey">传达管理员要求和安全质量反馈</text>
						</view>
						<view class="action">
							<text class="text-grey text-sm">0.8分</text>
						</view>
					</view>
					
					<view class="cu-item" :class="menuArrow?'arrow':''">
						<view class="content">
							<text class="text-grey">提醒当天需要关注的高风险及其他重要工作</text>
						</view>
						<view class="action">
							<text class="text-grey text-sm">0.8分</text>
						</view>
					</view>
					
					<view class="cu-item" :class="menuArrow?'arrow':''">
						<view class="content">
							<text class="text-grey">确认工作者成员无疑问</text>
						</view>
						<view class="action">
							<text class="text-grey ">0.8分</text>
						</view>
					</view>
					
					<view class="cu-item" :class="menuArrow?'arrow':''">
						<view class="content">
							<text class="text-grey">安全质量TOP3或重要经验反馈调查</text>
						</view>
						<view class="action">
							<text class="text-grey">0.8分</text>
						</view>
					</view>
				
				</view>
				
				
				
				
				

			</view>




		</scroll-view>



	</view>
</template>

<script>
	import uniRate from '../../../components/uni-rate/uni-rate.vue'

	export default {
		data() {
			return {
				data: {
					'gongqianchunbei': [
						{
							"title":'班前会',
							items:
							[
								{
								"title":"每日一句",
								'paragraph':0.5,
								'showfeedback':false
							},
							{
								"title":"确认人员状态",
								'paragraph':1,
								'showfeedback':false
							},
							{
								"title":"传达管理要求和安全质量经验反馈",
								'paragraph':1,
								'showfeedback':true
							}
							]
							
						}
					],
					'zuoyeliucheng':[
						
					],
					'gongyeanquan':[
						
					],
					'jishuwenti':[
						
					]

				}
			}
		},
		methods: {

		},
		components: {
			uniRate
		}
	}
</script>

<style lang="scss" scoped>
	.page {
		height: 100Vh;
		width: 100vw;
	}

	.info-container {
		box-shadow: 0upx 9upx 28upx 8upx rgba(0, 0, 0, 0.05);
		margin: 12upx;
		padding: 20upx;
		margin-bottom: 32px;
		border-radius: 4px;
	}

	.title {
		font-weight: bold;
		font-size: 16px;
		line-height: 22px;
	}
	.sub-title{
		font-weight: bold;
		color: #909399;
	}

	.item-container {
		padding-top: 4px;
		padding-bottom: 4px;
		margin-bottom: 4px;
		border-radius: 2PX;
		border-bottom: 2px solid #CCCCCC;

	}

	.sub-title {}

	.rate {
		float: right;
	}

	.content {
		display: inline-block;
	}

	.action {
		display: inline-block;
		float: right;
	}



	switch {
		float: right;
	}

	button {
		margin: 12px;
	}
</style>
