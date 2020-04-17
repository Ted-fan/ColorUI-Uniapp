<script>  
import { tabbar } from './tabbar/tabbar'
export default {
  onLaunch: function () {
    console.log('App Launch，app启动')
    this.$store.commit("SET_COLOR", tabbar);
    this.$store.commit("SET_TABBAR", tabbar.tabbar);
  },
  onShow: function () {
    console.log('App Show，app展现在前台')
  },
  onHide: function () {
    console.log('App Hide，app不再展现在前台')
  }
}  
</script>

<style>
@import "colorui/main.css";
@import "colorui/icon.css";
@import "app.css"; /* 项目的app.scss */
</style>
