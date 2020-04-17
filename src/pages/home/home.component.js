import Vue from 'vue';
import { getApi } from '../../service/common-service'

export default Vue.extend({
	name: "homePage",
	data() {
		return {

		}
	},
	created() {
	},
	methods: {
		// get api
		getTest() {
			getApi('test').then(res => {
				console.log(res)
			})
		}
	}
});
