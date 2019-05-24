import Vue from 'vue';
import tabIndex from './tabpages/tabIndex/tabIndex';
import tabOrder from './tabpages/taborder/taborder';
export default Vue.extend({
  components: { tabIndex, tabOrder },
  data() {
    return {
      mobileInfo: wx.getStorageSync('mobileInfo'),
      currentTab: 0,
    }
  },
  onLoad() {
    //设置标题
    wx.setNavigationBarTitle({
      title: "分包首页"
    })
  },
  methods: {
    changeTab(index,title) {
      this.currentTab = index;
      //返回首页
      wx.pageScrollTo({
        scrollTop: 0
      })
      //设置标题
      wx.setNavigationBarTitle({
        title: title
      })
    }
  }
});