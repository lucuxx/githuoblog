<template>
    <div id="login">
       <div id="container">
       <h3>GitHuo Blog 登录</h3>
        <el-form label-width="80px" :model="userInfo" :rules="rules" ref="userInfo">
            <el-form-item label="用户名:" prop="username">
                <el-input v-model="userInfo.username"></el-input>
            </el-form-item>
            <el-form-item label="密码:" prop="password">
                <el-input type="password" v-model="userInfo.password"></el-input>
            </el-form-item>   
        </el-form> 
        <el-button type="primary" @click="login">登 录</el-button>
       </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            userInfo:{
                username:"",
                password:""
            },
            rules:{
                username:[
                     { required:true,message: "用户名不能为空", trigger: 'blur' }
                ],
                password:[
                     { required:true,message: "密码不能为空", trigger: 'blur' }
                ]
            }
        }
    },
    methods:{
         login(){
         this.$refs["userInfo"].validate((valid) => {
          if (valid) {
            this.$http.post(this.$apis.signin,this.userInfo)
            .then((resp)=>{
                var token=resp.data.token;
                var success=resp.data.success;

                // 如果登录成功
                if(success){
                     // 保存token
                    localStorage.setItem("token",token);
                    
                    var query = this.$route.query;
                    
                    // 判断是否需要重定向,如果不需要,直接跳转home下的article组件
                    if(!query.redirect){
                        this.$router.push({path:'/home/article'})
                    }else{
                        this.$router.push({path:query.redirect})
                    }

                }else{
                    this.$message.error("登录失败,请检查用户名和密码")
                }

            }).catch((err)=>{
                console.log(err)
            })
          } else {
            console.log('验证失败');
            return false;
          }
        })
    },

    }


}

</script>

<style lang="scss" scoped>
#login{
    position:absolute;
    display:flex;
    top:0;
    left:0;
    right:0;
    bottom:0;
    background:linear-gradient(45deg,skyblue,pink);

}

#container{
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    margin:auto;
    width:30%;
    height:50%;
    min-height:300px;
    min-width:400px;
    background:white;
    border-radius:10px;
    box-shadow:0 0 5px 3px gray;
}
h3{
    margin-bottom:30px;
    font-size:30px;
    font-weight:bold;
}


</style>