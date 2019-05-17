<template>
    <div id="Category">
        <commons width="40%" title="分类列表">
            <template slot="commonsHeard">
                <div style="float:right;margin-right:10px;">
                    <el-button type="primary" size="mini">新增</el-button>
                </div>
            </template>
            <template slot="commonsContent">
                <table style="width:100%">
                    <tbody>
                    <tr>
                        <th>全选</th>
                        <th>类型</th>
                        <th>图标</th>
                        <th>操作</th>
                    </tr>
                    <tr v-for="(item,index) in allCategory" :key="index">
                        <td>
                            <el-checkbox ></el-checkbox>
                        </td>
                        <td>
                            {{item.name}}
                        </td>
                        <td  style="width:50px">
                                <img :src="item.imgAddr" alt="" style="width:100%">
                        </td>
                        <td>
                            <el-button size="mini" type="danger" @click="deleteCategory(item)">删除</el-button>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </template>
        </commons>
    </div>
</template>

<script>

import {mapGetters} from 'vuex'

export default {
    computed:{
        ...mapGetters(['allCategory'])
    },
    methods:{
        deleteCategory(item){
            var action = ()=>{
                this.post(this.$apis.deleteCategory,{_id:item._id})
            }
            this.operatorConfirm("删除"+item.name+"分类",action)
            .then(()=>{
                this.$store.dispatch('loadALLCategory')
            })
        }
    }
}
</script>
<style lang="scss" scoped>
    #Category{
        width: 92%;
        height: 92%;
        padding: 10px;
        box-sizing: border-box;
    }
  
    tr {
        text-align: center;
        height: 50px;
        line-height: 50px;
        width:100%;
        td{
            img{
                vertical-align: middle;
            }
            button{
                vertical-align: middle;
            }
        }
    }
</style>
