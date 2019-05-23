<script src="./detail.component.js"></script>
<style src="./detail.css" scoped></style>
<template>
  <view class="content">
    <view class="grid margin-bottom text-center col-5">
      <img class="aq-width-full" :src="activityDetail.cover_image_url">
    </view>
    <view class="cu-list menu-avatar">
      <view class="cu-item">
        <view class="cu-avatar round lg" :style="{backgroundImage:'url(' + activityDetail.cover_image_url + ')'}"></view>
        <view class="content">
          <view class="text-grey">
            <text class="text-cut">{{activityDetail.title}}</text>
          </view>
          <view class="text-orange text-lg flex">
            <text class="text-cut">$ {{totalPrice}}</text>
          </view>
        </view>
      </view>
    </view>
    <view class="cu-form-group">
      <view class="title">日期</view>
      <picker @change="PickerDateChange" :value="dateindex" :range="datepicker">
        <view class="picker">
          {{dateindex>-1?datepicker[dateindex]:'请选择时间'}}
        </view>
      </picker>
    </view>
    <view class="cu-form-group">
      <view class="title">种类</view>
      <picker @change="PickerEventChange" :value="eventindex" :range="eventpicker">
        <view class="picker">
          {{eventindex>-1?eventpicker[eventindex]:'请选择种类'}}
        </view>
      </picker>
    </view>
    <view class="cu-form-group">
      <view class="title">时间</view>
      <picker @change="PickerTimeChange" :value="timeindex" :range="timepicker">
        <view class="picker">
          {{timeindex>-1?timepicker[timeindex]:'请选择种类'}}
        </view>
      </picker>
    </view>
    <view class="cu-form-group">
      <view class="title">语言</view>
      <picker @change="PickerLanguageChange" :value="languageindex" :range="languagepicker">
        <view class="picker">
          {{languageindex>-1?languagepicker[languageindex]:'请选择语言'}}
        </view>
      </picker>
    </view>
    <view class="cu-form-group">
      <view class="title">门票</view>
      <picker @change="PickerTicketChange" :value="ticketindex" :range="ticketpicker">
        <view class="picker">
          {{ticketindex>-1?ticketpicker[ticketindex]:'请选择门票类型'}}
        </view>
      </picker>
    </view>
    <view class="cu-form-group">
      <view class="title">购买数量</view>
      <view v-if="dateindex !== -1 && eventindex !== -1 && timeindex !== -1 && languageindex !== -1 && ticketindex !== -1"
        class="action aq-vertical-center">
        <img @click="modifyCount('remove')" src="../../static/icon/minus-circle-fill.png" style="width:30px;height:30px;">
        <span class="padding-leftright-4">{{ticketNum}}</span>
        <img @click="modifyCount('add')" src="../../static/icon/plus-circle-fill.png" style="width:30px;height:30px;">
      </view>
      <view v-if="dateindex === -1 || eventindex=== -1 || timeindex=== -1 || languageindex=== -1 || ticketindex=== -1"
        class="action aq-vertical-center">
        <img src="../../static/icon/minus-circle-fill-off.png" style="width:30px;height:30px;">
        <span class="padding-leftright-4">{{ticketNum}}</span>
        <img src="../../static/icon/plus-circle-fill-off.png" style="width:30px;height:30px;">
      </view>
    </view>
    <view class="padding flex flex-direction">
			<button @click="payment" class="cu-btn bg-orange margin-tb-sm lg">立即支付</button>
		</view>
  </view>
</template>

