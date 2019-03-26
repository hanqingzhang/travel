import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'

Vue.use(Vuex)

export default new Vuex.Store({
	state,
	/*actions:{
		//ctx上下文，外部传入的city，city获取的城市
		changeCity(ctx,city){
			ctx.commit('changeCity',city)

		}
		//action已经接收到了传递过来的城市

	},*/
	//没有异步操作和同步批量操作，组件可直接操作mutations
	mutations,
	//类似于组件中的computed,根据state中的数据计算出新的数据
	getters:{
		doubleCity(state){
			return state.city+''+state.city

		}

	}

})