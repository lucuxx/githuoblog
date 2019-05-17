import Vue from 'vue';
Vue.mixin({
    methods:{
        post(url,params){
            return this.$http.post(url,params).then((resp)=>{
                this.$message({
                    type: resp.data.success?'success':'danger',
                    message: resp.data.message
                });
            })
        },
        /**
         * 操作认证，
         * 删除，退出等按钮时，弹框确认，
         * message: 提示信息
         * action: 行为，当用户确认操作时，要触发的行为
         */
        operatorConfirm(message,action){
            this.$confirm('您确定要'+message+"么？", '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'danger'
            }).then(() => {
                action();
            }).catch(() => {
                this.$message({
                    type: 'info',
                    message: '取消'+message
                });          
            });
        }
    }
})