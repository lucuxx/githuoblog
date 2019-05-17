<template>
    <div id="navbar">
         <div class="userInfo">     
                <img class="userImg" src="http://img2.imgtn.bdimg.com/it/u=3146576452,262234246&fm=26&gp=0.jpg"/>           
                <div class="userName">
                    {{title}}
                </div>
                <div class="setBtn" @click="setBtn">
                    <i class="el-icon-setting"></i>
                    <span> 设 置</span>
                </div>
            </div>
        <ul>
            <li v-for="(item,index) in navlist" :key="index" @click="pushView(item,index)" :class="{active:item.name==$route.name}">
                {{item.title}}
            </li>
        </ul>
    </div>



</template>

<script>
export default {
    data(){
        return {
            navlist:[
                {title:"文章管理",name:"article"},
                {title:"分类管理",name:"category"},
                {title:"团队管理",name:"team"}
            ],
            title:"Lucux",
        
        }
    },
    methods:{
        pushView(item,index){        
            this.$router.push({name:item.name})
        },
        setBtn(){
            this.$router.push({name:"set"})
        }
    }


}

</script>

<style  lang="scss" scoped>
#navbar{
    width:100%;
    ul{
        width:100%;
        display:flex;
        flex-direction: column;
        justify-content: center;
        align-items:center;
    }
}


// 因为后期给li添加样式的问题,考虑权重影响,将li从上面样式中单独抽取出来

 li{
        width:60%;
        height:40px;
        margin-top:20px;
        text-align:center;
        line-height:40px;
        background:gray;
        border-radius:10px;
        color:white;

}
li:hover{
        cursor:pointer;
}

.active{
    background:greenyellow;
    color:black;
}


.userInfo{
    width:100%;
    display:flex;
    flex-direction: column;
    justify-content: space-around;
    align-items:center;
    .userImg{
        width:150px;
        height:150px;
        border-radius:50%;
        overflow:hidden;
    }
    .userName{
        margin:20px auto;
    }
    .setBtn{
        height:30px;
        width:80px;
        border:1px solid gray;
        border-radius:10px;
        text-align:center;
        line-height:30px;
        background:rgba(225,225,225,.7);
        cursor:pointer;

    }
     .setBtn:hover{
         background:rgba(255,255,255,.2);
     }
}

</style>