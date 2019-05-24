import Vue from 'vue';
import pageService from '../../service/pageService'
export default Vue.extend({
    data() {
        return {
            queryString: "",
            activityList: []
        }
    },
    onLoad() {
        this.searchActivities();
    },
    methods: {
        //搜索按钮
        searchActivities() {
            pageService.searchActivities(this.queryString).then(res => {
                this.activityList = res.data;
            })
        },
        //跳转到详情页面
        moveToDetailPage(activity) {
            wx.setStorage({ key: "detail", data: activity });
            wx.navigateTo({
                url: '../detail/detail'
            })
        },
    }
});