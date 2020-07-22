import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
	state: {
		user: {

		}
	},
	mutations: {

	},
	actions: {
		setUser(user) {
			state.user = Object.create(user);
		}
	},
	getters: {
		getUser: () => {
			return state.user
		}
	}
})
export default store
