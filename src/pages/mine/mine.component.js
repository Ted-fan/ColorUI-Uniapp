import Vue from 'vue';

export default Vue.extend({
    data() {
        return {
            title: "分包首页",
        }
    },
    onLoad() {

    },
    methods: {
        //跳转到分包页面
        moveToSubpackage() {
            wx.navigateTo({
                url: '../subPackage/subIndex/subIndex'
            })
        },
    }
});