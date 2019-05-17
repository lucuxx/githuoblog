<template>
  <div>
    <el-dialog title="预览文章" :visible.sync="dialogVisible" width="70%" :before-close="handerClose">
      <div v-html="showData"></div>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="cancelView">退 出</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
        data() {
        return {
            dialogVisible: true,
            showData:"",
            }
        },
        mounted(){
           this.showData= this.$route.params.content;
           
        },
        methods:{
            cancelView(){
                this.dialogVisible = false;             
                this.$router.back();
                
            },

            // 右上角关闭按钮的事件,需要注意
            handerClose(){
                this.dialogVisible = false;             
                this.$router.back();
            }
        }

}
</script>

<style lang="scss" scoped>

</style>