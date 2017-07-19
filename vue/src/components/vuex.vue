<template>
  <div id="vuex" class="main cont">
  	<div class="wrap">
  		 <button @click="addNum">+</button>
	    <p>{{number}}</p>
	    <button @click="reduceNum({num:5})">-</button>
	    <p>{{filNum}}</p>
  	</div>
  </div>
</template>

<script>
import {mapState,mapGetters,mapActions,mapMutations} from 'vuex'
export default {
	name:'Vuex',
	methods:{
		/*addNum(){
	    	//this.$store.commit("addNum",{num:3})
	    	this.$store.dispatch("addAction",{num:5})
		},*/
		...mapActions({//扩展运算:此方法本身返回一个对象
			addNum:'addAction'
		}),
		/*reduceNum(){
			this.$store.commit({
				type:"reduceNum",
				num:5
			})
		}*/
		...mapMutations({
			reduceNum:'reduceNum'
		})
	},
	computed:{
		abc(){
			return 123
		},
		...mapState(['number']),
		...mapGetters(['filNum'])
	}
	/*computed:{
	    num(){
	      return this.$store.getters.filNum
	    }
	},*/
	/*computed:mapState({
		//num:state=>state.number
		//num:'number'
		num(state){
			return state.number
		}
	})*/
}
</script>

<style>

{
	
}
</style>