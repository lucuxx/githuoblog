//导入axios模块
import axios from 'axios'
// 导入Vue模块
import Vue from 'vue'
// 配置基础路径，在不同环境下发起请求的基础链接不同
axios.defaults.baseURL = process.env.VUE_APP_BaseURL;
// 配置拦截器
// 请求拦截器
axios.interceptors.request.use(function (config) {

    var token=localStorage.getItem("token");
    config.headers.common['Authorization'] ="Bearer "+token;
    
    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });
 
//响应拦截器
axios.interceptors.response.use(function (response) {
    return response;
  }, function (error) {
    // Do something with response error
    return Promise.reject(error);
  });

// 二次封装axios
var myaxios = {
    get:function(url,params){
      return  axios.get(url,{params:params})
    },
    post:function(url,params){
      return  axios.post(url,params)
    }
}
// 将mtaxios注册成Vue的实例属性，以后可以通过this.$http.get或this.$http.post方法
Vue.prototype.$http = myaxios;
// 导出mtaxios模块
export default myaxios;
