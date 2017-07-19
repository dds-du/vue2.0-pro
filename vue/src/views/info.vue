<template>
  <div id="vue1"  class="main_cont">
    <h2>页面初始信息加载</h2>
    <div class="clear">
    	 <router-link key="index" v-for="item,key in list" :to="{path:'/info/'+item.id+'?info=fl'}">{{item.name}}</router-link>
    </div>
   
 	<div class="info" v-if="userInfo.id">
 		<p>姓名:{{userInfo.name}}</p>
 		<p>性别:{{userInfo.sex}}</p>
 		<p>年龄:{{userInfo.age}}</p>
 	</div>
 	<div v-if="userInfo.id" class="info_list clear" @click="clickHandle">
 		<router-link exact to='?info=fl'>信息3</router-link>
 		<router-link exact to='?info=fr'>信息2</router-link>
 	</div>
 	<div v-if="userInfo.id" class="info_content clear">
 		{{$route.query}}
 	</div>
  </div>
</template>

<script>
let data = [
 {
 	id:1,
 	name:'dds1',
 	sex:'男',
 	age:20
 },
 {
 	id:2,
 	name:'dds2',
 	sex:'3',
 	age:22
 },
 {
 	id:3,
 	name:'dds3',
 	sex:'女',
 	age:25
 }
]
export default {
 data(){
 	return {
 		list:data,
 		userInfo:{}
 	}
 },
 watch:{
 	$route(to,from){
 		this.getData();
 	}
 },
 created(){
 	//console.log(this.$route.params);
	this.getData();
 },
 methods:{
 	getData(){
 		let id = this.$route.params.userId
	 	if(id){
	 		
		 	this.userInfo=this.list.filter((item)=>{
		 		return item.id==id
		 	})[0]
		 	
	 	}else{
	 		this.userInfo={}
	 	}
 	},
 	clickHandle(){
 		alert(0)
 	}
 }
 	
}
</script>

<style>
#vue1 *
{
	font-size: 24px;
}
#vue1 p {text-align: center;}
#vue1 .info_list a {margin-left: 200px;margin-top: 50px;}
</style>