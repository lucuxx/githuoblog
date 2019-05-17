import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

export default new Router({
  routes: [
    {path:'/',redirect:"/home"},
    {path:"/home",component:()=>import(/* webpackChunkName:'home'*/'@/components/home/'),
    children:[
      {path:'article',name:"article",component:()=>import(/* webpackChunkName:'article'*/ '@/components/article/article'),
        children:[
          {path:"showArticle",name:"showArticle",component:()=>import(/* webpackChunkName:'showArticle'*/ '@/components/article/showArticle')}
        ]    
       },
      {path:'category',name:"category",component:()=>import(/* webpackChunkName:'category'*/ '@/components/category/category')},
      {path:'set',name:"set",component:()=>import(/* webpackChunkName:'set'*/ '@/components/set/set')},
      {path:'team',name:"team",component:()=>import(/* webpackChunkName:'team'*/ '@/components/team/team')},
      {path:'editor',name:"editor",component:()=>import(/* webpackChunkName:'team'*/ '@/components/editor/editor')},
      ]
    },
    {path:'/login',name:"login",component:()=>import(/* webpackChunkName:'login'*/ '@/components/login/login')},
  ]
})
