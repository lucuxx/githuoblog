<template>
  <div id="article">
    <commons width="100%" v-show="showAdd" title="文章管理">
      <template slot="commonsHeard">

      </template>
      <template slot="commonsContent">
        <table>
          <tr>
            <th>标题</th>
            <th>日期</th>
            <th>作者</th>
            <th>分类</th>
            <th>是否发布</th>
            <th>操作</th>
          </tr>
          <tr v-for="(item,index) in articleData" :key="index">
            <td>{{item.shortTitle}}</td>
            <td>{{item.pubDate | filterDate }}</td> 
            <td>{{item.authore}}</td>
            <td>{{item.category}}</td>
            <td>{{item.isPublished}}</td>
            <td>
                <div class="caozuo">
                    <span style="color:red" @click="deleteArticle(item._id)">删除</span>
                    <span style="color:green" @click="dateArticle(item)">编辑</span>
                    <span @click="articleView(item)">预览</span>
                </div>
              
            </td>
          </tr>
        </table>
      </template>
      <template slot="commonsFoot">
        <el-pagination background layout="prev, pager, next" 
        :total="total"
        @current-change="loadData"
        ></el-pagination>
      </template>
    </commons>
    <router-view></router-view>
  </div>
</template>

<script>
export default {

  beforeRouteUpdate(to,from,next){
        this.loadData(1);
        next();
    },
  mounted() {
    this.$http.get(this.$apis.findArticle, { pageSize: 10, pageNo: 1 })
      .then(resp => {
        this.articleData = resp.data.data;
        this.total = resp.data.total;
      });
  },
  data() {
    return {
      articleData: [],
      total:0,
      showAdd:true,
    };
  },
  methods:{
      loadData(pageNo){
        this.$http.get(this.$apis.findArticle, { pageSize: 10, pageNo:pageNo})
         .then(resp => {
            this.articleData = resp.data.data;
             this.total = resp.data.total;
      });
      },

      // 删除文章
      deleteArticle(id){
        //    this.$confirm('是否继续删除?', '提示', {
        //   confirmButtonText: '确定',
        //   cancelButtonText: '取消',
        //   type: 'warning'
        // }).then(() => {
        //     this.$http.post(this.$apis.deleteArticle,{_id:id})
        //     .then((resp)=>{
        //         this.$message({
        //             type:resp.data.success?"success":"danger",
        //             message:resp.data.message
        //         });
        //         this.loadData(1);
        //     })
        // }).catch(() => {
        //   this.$message({
        //     type: 'info',
        //     message: '取消删除'
        //   });          
        // });


        // 使用封装的全局mixin
        var action = ()=>{
              this.post(this.$apis.deleteArticle,{_id:id})
              .then(()=>{
                  this.loadData(1);
              })
          }
          this.operatorConfirm("删除文章",action);
    },
  // 预览文章
      articleView(item){      
            this.$router.push({name:"showArticle",params:{content:item.content}})
            
      },

    // 编辑文章
      dateArticle(item){
            this.$router.push({name:"editor",params:{articleInfo:item}})
      }
      
      
  },

  // 过滤(处理)时间
  filters:{
      filterDate(value){
          return value.slice(0,10);
      }
  }
}
</script>

<style lang="scss" scoped>
#article {
  padding: 10px;
  box-sizing: border-box;
}
table {
  width: 100%;
}
tr {
  height: 30px;
  line-height: 35px;
  text-align: center;
}
tr:nth-child(2n-1) {
  background: rgb(200, 230, 241);
}
.caozuo span{
    margin-left:10px;
    cursor:pointer;
    
    
}


</style>
