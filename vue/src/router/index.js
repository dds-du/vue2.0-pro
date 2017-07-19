import Vue from 'vue'
import VueRouter from 'vue-router'

//引用模板
import dds from '@/components/dds'
import about from '@/components/about'
import documt from '@/components/document'
import notf from '@/components/notfound'
import vuex from '@/components/vuex'
//import info from '@/components/info'


/*import about1 from '@/views/about1'
import about2 from '@/views/about2'
import about3 from '@/views/about3'*/
import r_left from '@/views/r_left'

//使ie浏览器支持Promise语法
require('native-promise-only')

//利用webpack实现懒加载(按需加载),使不同的路由的js分离,以提高性能,并整合几个页面为同一个js
let about1 = resolve => {
    return require.ensure([],function(){
        resolve(require('@/views/about1'))
    },"about")
}
let about2 = resolve => {
    return require.ensure([],function(){
        resolve(require('@/views/about2'))
    },"about")
}
let about3 = resolve => {
    return require.ensure([],function(){
        resolve(require('@/views/about3'))
    },"about")
}
//更易实现的按需加载,但是无法合并js
let info = resolve => {
    return import('@/components/info')
}

Vue.use(VueRouter)

let router = new VueRouter({
    mode:'history',
    linkActiveClass:'is-active',
    scrollBehavior(to,from,save){//浏览器前进或者后退的时候触发
    //to:目标页面，from:离开的页面，save:滚动距离
        if(to.hash){
            return {
                selector:to.hash
            }
        }
        return save||{x:0,y:0}
    },
    routes: [
    {
        path: '/index',
        name:'Index',
        meta:{
            index:1
        },
        component: dds,
        alias:'/home'
    },
    {
        path:'/about',
        component:about,
        children:[
            {
                path:'',
                name:'About',
                meta:{
                    index:2
                  },
                component:about1
            },
            {
                path:'/about/about2',
                name:'About2',
                component:about2
            },
            {
                path:'/about/about3',
                name:'About3',
                component:about3
            }
        ]
    },
    {
        path:'/document',
        name:'Document',
        meta:{
            index:3,
            title:'document'
        },
        components:{
            default:documt,
            r_left
        }
    },
    {
        path: '/vuex',
        name:'Vuex',
        meta:{
            index:5
        },
        component:vuex
    },
    {
        path:'/error',
        name:'Error',
        component:notf
    },
    {
        path: '/info/:userId?',
        name: 'Info',
        meta:{
            index:4
        },
        component: info,
    },
    {
        path:'*',
        //redirect:'/index'//重定向
        //redirect: {path:'/index'}
        //redirect: {name:'Index'}
        redirect:(to)=>{
            if(to.path=='/'){
                return {path:'/index'}
            }else{
                return {name:'Error'}
            }
            
        }
    }
  ]
})
router.beforeEach((to,from,next)=>{//全局导航钩子函数
    next()
})
router.afterEach((to,from)=>{
    let title = to.meta.title||'dds'
   window.document.title = title
})
export default router
