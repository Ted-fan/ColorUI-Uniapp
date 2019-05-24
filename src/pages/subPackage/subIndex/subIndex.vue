<script src="./subIndex.component.js"></script>
<style src="./subIndex.css" scoped></style>
<template>
  <view class="content">
    <swiper :style="{height:mobileInfo.screenHeight+'px'}" :current="currentTab">
      <swiper-item>
          <tabIndex></tabIndex>
      </swiper-item>
      <swiper-item>
        <tabOrder></tabOrder>
      </swiper-item>
    </swiper>

    <view class="cu-bar foot tabbar bg-black">
      <view @click="changeTab(0,'分包首页')" class="action" :class="{ 'text-green' : currentTab===0,'text-gray' : currentTab===1}">
        <view class="cuIcon-home"></view> 首页
      </view>
      <view class="action text-gray add-action">
        <button class="cu-btn cuIcon-add bg-green shadow"></button>
        发布
      </view>
      <view @click="changeTab(1,'分包我的')" class="action" :class="{ 'text-green' : currentTab===1,'text-gray' : currentTab===0}">
        <view class="cuIcon-my"></view>
        我的
      </view>
    </view>
  </view>
</template>