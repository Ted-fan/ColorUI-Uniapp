import Vue from 'vue';
import pageService from '../../service/pageService'
export default Vue.extend({
    data() {
        return {
            queryString: "Rome",
            activityList: []
        }
    },
    onLoad() {
        this.searchActivities();
        this.testApi();
    },
    methods: {
        searchActivities() {
            pageService.searchActivities(this.queryString).then(res => {
                this.activityList = res.data;
            })
        },
        testApi() {
            pageService.testApi("Ted",'123456').then(res => {
                
            })
        },
        moveToDetailPage(activity) {
            wx.setStorage({ key: "detail", data: activity });
            wx.navigateTo({
                url: '../detail/detail'
            })
        },
    }
});