<script src="./tab.component.js"></script>
<style src="./tab.css" scoped></style>
<template>
  <view>
    <scroll-view scroll-y="true" class="app-container" :style="'height:500px'">
      <home-page v-if="currentpage==='home'"></home-page>
      <category-page v-if="currentpage==='category'"></category-page>
      <release-page v-if="currentpage==='release'"></release-page>
      <order-page v-if="currentpage==='order'"></order-page>
      <mine-page v-if="currentpage==='mine'"></mine-page>
    </scroll-view>
    <view class="cu-bar foot tabbar bg-white">
      <view v-for="(item,index) in tabbar" :key="index" class="action" @tap="changeTab(item)">
        <!-- 中间tab凸出 -->
        <view>
          <view v-if="index === 2" class="action text-gray add-action tab-padding-bottom">
            <button class="cu-btn cuIcon-add bg-green shadow"></button>
          </view>
          <view v-else>
            <image v-if="currentpage==item.page" :src="item.selectedIconPath" class="tab-icon"></image>
            <image v-else :src="item.iconPath" class="tab-icon"></image>
          </view>
        </view>
        <text :style="'color: '+(currentpage==item.page?tabbarTextActiveColor:tabbarTextColor)+';'">
          {{item.title}}
        </text>
      </view>
    </view>
  </view>

</template>
