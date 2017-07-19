// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

import router from './router'
import store from './store'

/*require('./assets/css/bootstrap.min.css')
require('./assets/css/bootstrap-theme.min.css')
require('./assets/css/bootstrap.css.map')
require('./assets/js/bootstrap.min.js')*/
require('./assets/less/index')
require('./assets/css/about')

// Vue.prototype.$dds = '自定义属性' //给根组件添加属性或者方法，组件可通过原型链寻找到
Vue.use({
	install(Vue,options){//添加自定义属性和方法
		Vue.prototype.$dds = '自定义属性'
		Vue.prototype.$index = {
			alt(){
				alert(options.dds)
			},
			csl(){
				console.log(options.dds)
			}
		}
		//console.log(Vue)
		//console.log(options)
	}
},{
	dds:'dds'// 给此方法传参
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<app/>',
  components: { App }
})
