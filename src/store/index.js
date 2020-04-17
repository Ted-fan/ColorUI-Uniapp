import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
		tabbar:[],
		tabbarTextColor:'',
		tabbarTextActiveColor:"",
		showLoading:false,
	},
	mutations: {
		SET_COLOR(state,colors){
			// 底部菜单文字 选中
			state.tabbarTextActiveColor = colors.tabbarTextActiveColor
			// 底部菜单文字 未选中
			state.tabbarTextColor = colors.tabbarTextColor
		},
		
		SET_TABBAR(state,tabbar){
			state.tabbar = tabbar||[]
		}
	},
	actions: {
	}
})

export default store
