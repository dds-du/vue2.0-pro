<template>
  <div id="v-about" class="main_cont">
    <h1>关于我：</h1>
    <ul class="clear">
    	<router-link tag="li" exact :to="{name:'About'}"><a>about1</a></router-link>
    	<router-link tag="li" :to="{name:'About2'}"><a>about2</a></router-link>
    	<router-link tag="li" :to="{name:'About3'}"><a>about3</a></router-link>	
    </ul>
    <router-view></router-view>	
  </div>
</template>

<script>
export default {
 
}
</script>

<style>

</style>	