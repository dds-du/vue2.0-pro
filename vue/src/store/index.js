import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state:{
		number:100
	},
	getters:{
		filNum(state){
			return state.number>120?120:state.number
		}
	},
	mutations:{
		addNum(state,opt){
			state.number += opt.num
		},
		reduceNum(state,opt){
			state.number -= opt.num
		}
	},
	actions:{
		addAction(context){
			setTimeout(()=>{
				context.commit("addNum",{num:5})
			},500)
		}
	},
	modules:{
		//定义子模块
	}
})