import Vue from 'vue'
import Vuex from 'vuex'
import axios from '@/utils/myaxios'
import apis from '@/apis'
import { stat } from 'fs';

Vue.use(Vuex)
// 封装请求函数
const loadAction = (commit,payload,mutationName)=>{
  axios.get(payload.api,{pageNo:payload.pageNo,pageSize:payload.pageSize})
  .then((resp)=>{
     resp = resp.data;
     commit(mutationName,resp)
  })
}
export default new Vuex.Store({
  state: {
     allCategory: []
  },
  getters:{
    allCategory(state){
       return state.allCategory.data
    }
  },
  mutations: {
    LOADALLCATEGORY(state,payload){
      state.allCategory = payload;
    }
  },
  actions: {
    loadALLCategory({commit},payload={}){
       payload.api = apis.findCategory;
       loadAction(commit,payload,'LOADALLCATEGORY');
    }
  }
})

