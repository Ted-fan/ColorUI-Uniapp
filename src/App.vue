<script>
import { getOpenId } from './utils/utils'
export default {
  onLaunch: function () {
    // 登录 发送 res.code 到后台换取 openId, sessionKey
    wx.login({
      success: res => {
        getOpenId(res.code).then(res => {
          wx.setStorage({
            key: 'openid',
            data: res.Data.openid,
          });
          wx.setStorage({
            key: 'session_key',
            data: res.Data.session_key
          })
        })
      }
    })
    let mobileInfo = uni.getSystemInfoSync();
    wx.setStorage({
      key: 'mobileInfo',
      data: mobileInfo
    })
  },
  onShow: function () {
  },
  onHide: function () {
  }
}
</script>

<style>
@import "colorui/main.css";
@import "colorui/icon.css";
@import "app.css"; /* 项目的app.scss */
</style>
