<script src="./index.component.js"></script>
<style src="./index.css" scoped></style>
<template>
  <view class="content">
    <view class="cu-bar search bg-white">
      <view class="search-form round">
        <text class="cuIcon-search"></text>
        <input v-model="queryString" :adjust-position="false" type="text" placeholder="搜索活动" confirm-type="search"></input>
      </view>
      <view class="action">
        <button @click="searchActivities" class="cu-btn bg-green shadow-blur round">搜索</button>
      </view>
    </view>
    <view v-if="activityList.length>0">
      <view v-for="activity of activityList" :key="activity.uuid" class="cu-card case" @click="moveToDetailPage(activity)"
        :class="isCard?'no-card':''">
        <view class="cu-item shadow">
          <view class="image">
            <image :src="activity.cover_image_url" mode="widthFix"></image>
            <view class="cu-tag bg-blue">{{activity.booking_type}}</view>
            <view class="cu-bar bg-shadeBottom"> <text class="text-cut">{{activity.title}}</text></view>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

