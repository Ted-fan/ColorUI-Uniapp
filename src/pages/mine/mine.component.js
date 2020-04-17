import Vue from 'vue';

export default Vue.extend({
	name: 'minePage',
	data() {
		return {
		}
	},
	created() {
	},
	methods: {
		//跳转到分包页面
		moveToSubpackage() {
			uni.navigateTo({
				url: '../subPackage/subIndex/subIndex'
			})
		},
	}
});
