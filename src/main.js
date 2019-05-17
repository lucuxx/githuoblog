import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "./utils/myaxios"    //引入myaxios
import "./apis"  //引入apis

Vue.config.productionTip = false

import "reset-css"    //引入 reset-css样式

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI)


// 注册全局组件
import commons from "./components/commons/commons"
Vue.component("commons",commons)

// 引入mixin
import "@/mixins"

// 引入富文本编辑器
import MTEditor from "mteditor"
Vue.use(MTEditor);

// 引入动画
import "animate.css"


// 设置全局路由守卫

router.beforeEach((to,from,next)=>{
  if(to.path==="/login"){
    next();
  }else{
    var token = localStorage.getItem("token");
    if(token){
      next();
    }else{
      next({path:"/login",query:{redirect:to.path}})
    }
  }
  next();
})



new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
