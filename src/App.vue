<script>
import { getOpenId } from './utils/utils'
export default {
  onLaunch: function () {
    // 登录 发送 res.code 到后台换取 openId, sessionKey, unionId
    wx.login({
      success: res => {
        getOpenId(res.code).then(res => {
          wx.setStorage({
            key: 'openid',
            data: resp.data.Data.openid,
          });
          wx.setStorage({
            key: 'session_key',
            data: resp.data.Data.session_key
          })
        })
      }
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
