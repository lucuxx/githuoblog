import Vue from "vue"

var apis={
    signin:"/signin",
    register:"/register",  //get
    updateUser:"/updateUser",  
    addNewArticle:"/addNewArticle",
    deleteArticle:"/deleteArticle",
    updateArticle:"/updateArticle",
    findArticle:"/findArticle",  //get
    findArticleByCategory:"/findArticleByCategory", //get


     // 分类
     findCategory:'/findCategory',
     deleteCategory:'/deleteCategory',//删除分类
     addNewCategory:'/addNewCategory',//新增分类
}

Vue.prototype.$apis=apis;

// 导出接口
export default  apis;