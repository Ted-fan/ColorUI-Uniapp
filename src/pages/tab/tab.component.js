import Vue from 'vue';
import { mapState } from 'vuex';
import homePage from '../home/home.vue';
import categoryPage from '../category/category.vue';
import releasePage from '../release/release.vue';
import orderPage from '../order/order.vue';
import minePage from '../mine/mine.vue';
export default Vue.extend({
	components: { homePage, categoryPage, releasePage, orderPage, minePage },
	data() {
		return {
			currentpage: ""
		}
	},
	computed: {
		...mapState({
			tabbarTextColor: "tabbarTextColor",
			tabbarTextActiveColor: "tabbarTextActiveColor",
			tabbar: "tabbar"
		})
	},
	onLoad() { 
		this.changeTab(this.tabbar[0])
	},
	methods: {
		changeTab(item) {
			uni.setNavigationBarTitle({
				title: item.title
			})
			this.currentpage = item.page;
		},
	}
});
