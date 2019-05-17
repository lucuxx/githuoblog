<template>
    <div id="Setting">
        <commons width="40%" height="30%" title="用户设置">
           <template slot="commonsContent">
               <br/>
                <el-form :model="userInfo" :rules="rules" ref="userInfo" label-width="80px">
                    <el-form-item prop="newAccountName" label="用户名">
                        <el-input v-model="userInfo.newAccountName"></el-input>
                    </el-form-item>
                    <el-form-item prop="oldPassword" label="旧密码">
                        <el-input v-model="userInfo.oldPassword" type="password"></el-input>
                    </el-form-item>
                    <el-form-item prop="newPassword" label="新密码">
                        <el-input v-model="userInfo.newPassword" type="password"></el-input>
                    </el-form-item>
                    <el-form-item prop="confirmPassword" label="确认密码">
                        <el-input v-model="userInfo.confirmPassword" type="password"></el-input>
                    </el-form-item>
                </el-form>
           </template>
           <template slot="commonsFoot">
               <div style="width:100%;text-align:right;padding:20px;box-sizing:border-box;">
                    <el-button type="danger" size="mini" @click="resetForm">重置</el-button>
                    <el-button type="primary" size="mini" @click="changePassword">确定</el-button>
               </div>
           </template>
        </commons>
    </div>
</template>

<script>
export default {
    data(){
        var checkPWD = (rule,value,callback)=>{
            if(!value||value.trim()===''){
                callback(new Error("密码不能为空"))
            }
            if(value.length<5||value.length>20){
                callback(new Error("密码长度在6到20之间"))
            }
            callback();
        }
        var confirmPWD = (rule, value, callback)=>{
          
            if(value!=this.userInfo.newPassword){
                callback(new Error("两次输入的密码不一致，请重新输入"))
            }else{
                callback();
            }
        }
        return {
            userInfo:{
                oldAccountName:'admin'
            },
            rules:{
                newAccountName: [
                    {required:true,message:'用户名不能为空',trigger:'blur'}
                ],
                oldPassword:[
                    {required:true,message:'旧密码不能为空',trigger:'blur'},
                    {validator:checkPWD,trigger:'blur'}
                ],
                newPassword:[
                    {required:true,message:'新密码不能为空',trigger:'blur'},
                    {validator:checkPWD,trigger:'blur'}
                ],
                confirmPassword:[
                    {required:true,message:'确认密码不能为空',trigger:'blur'},
                    {validator:confirmPWD,trigger: 'blur'}
                ]
            }
        }
    },
    methods:{
        changePassword(){
            alert("f");
            this.$refs['userInfo'].validate((valid)=>{
                if(valid){
                    alert("f");
                    this.post(this.$apis.updateUser,this.userInfo)
                    .then((resp)=>{
                        localStorage.clear();
                        this.$router.push({name:'login'})
                    })
                }else{
                    return false;
                }
            })
        },
        resetForm(){
            this.userInfo={}
            this.$refs['userInfo'].resetFields();
        }
    }
}
</script>
<style lang="scss" scoped>
    #Setting{
        width: 100%;
        display: flex;
        justify-content: center;
        padding: 20px;
        box-sizing: border-box;
    }
</style>
