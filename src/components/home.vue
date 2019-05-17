<template>
    <div id="home">
        <div class="leftNav">          
            <navbar/>
        </div>
        <div class="rightMain">
            <div class="headerTop">
                <button @click="addArticle" >
                   <i class="el-icon-plus"></i> 
                </button>
                <button @click="back" style="color:white">
                    <i class="el-icon-switch-button"></i>
                </button>
            </div>
           
           <!-- 可以适当引入动画 -->
                <router-view></router-view>
             
        
        </div>
    </div>
</template>

<script>

import navbar from "./navbar"
export default {
    components:{
        navbar,
    },
    methods:{
        back(){
            //  this.$confirm('是否继续退出?', '提示', {
            //     confirmButtonText: '确定',
            //     cancelButtonText: '取消',
            //     type: 'danger'
            // }).then(() => {
            //     this.$message({
            //         type: 'success',
            //         message: '退出成功!'
            //     });
            //     localStorage.clear();
            //     this.$router.push({name:'login'})
            // }).catch(() => {
            //     this.$message({
            //         type: 'info',
            //         message: '取消退出'
            //     });          
            // });
            

            //使用封装后的全局mixin  

             var action = ()=>{
                localStorage.clear();
                this.$router.push({name:'login'});
             
            }
            this.operatorConfirm("退出",action)
        },
        addArticle(){
            this.$router.push({name:"editor"})

        }
    },

    // vuex  发起请求数据
    
    created(){
        this.$store.dispatch('loadALLCategory')
    }
}


</script>

<style lang="scss" scoped> 
#home{
    position:absolute;
    display:flex;
    justify-content: center;
    align-items:center;
    top:0;
    bottom:0;
    left:0;
    right:0;
    background:url("http://img.zcool.cn/community/02f3795729696032f875a39935167a.jpg") no-repeat;
    background-size:cover;
    background-attachment: fixed;
}
.leftNav{
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items:center;
    width:20%;
    min-width:250px;
    height:90%;
    background:linear-gradient(45deg,skyblue,pink);
   
}

.rightMain{
    width:70%;
    min-width:850px;
    height:90%;
    background:gainsboro;
}

.headerTop{
    display:flex;
    justify-content: space-around;
    align-items:center;
    width:100%;
    height:60px;
    background:gray;
}

button{
    width:80px;
    height:40px;
    border-radius:10px;
    border:none;
    outline:none;
    text-align:center;
    line-height:40px;
    font-size:25px;
}
button:hover{
    transform:translateY(2px);
    cursor:pointer;
}

button:nth-child(1){
    background:greenyellow;
}



button:nth-child(2){
    background:red;
}





</style>