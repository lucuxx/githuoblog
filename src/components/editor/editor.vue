<template>
    <div id="editor">
        <mt-editor v-model="articleInfo.content" :config="config"></mt-editor>
         <div style="width:100%;height:44px;text-align:right;margin-right:20px;padding:20px;box-sizing:border-box;">
            <el-button type="danger" size="mini" @click="cancel">取消</el-button>
            <el-button type="primary" size="mini" @click="commitBtn">提交</el-button>
        </div>
        <el-dialog 
            title="提示"
            :visible.sync="dialogVisible"
            width="35%"            
            :before-close="handleClose">
            <el-form :model="articleInfo" :rules="rules" ref="articleInfo" label-width="80px" >
                <el-form-item label="文章标题" prop="title">
                    <el-input v-model="articleInfo.title"></el-input>
                </el-form-item >
                 <el-form-item label="短标题" prop="shortTitle">
                    <el-input v-model="articleInfo.shortTitle"></el-input>
                </el-form-item>
                 <el-form-item label="发布时间" prop="pubDate">
                    <el-date-picker
                        v-model="articleInfo.pubDate"
                        type="datetime"
                        placeholder="选择日期时间">
                    </el-date-picker>
                </el-form-item>
                 <!-- <el-form-item label="作者" prop="authore">
                    <el-input v-model="articleInfo.authore"></el-input>
                </el-form-item> -->
                 <el-form-item label="文章类型">
                    <el-select v-model="articleInfo.category" placeholder="请选择">
                        <el-option
                        v-for="(item,index) in categorys"
                        :key="index"
                        :label="item.name"
                        :value="item.name">
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="是否发布">
                    <el-select v-model="articleInfo.isPublished">
                        <el-option label="发布" :value="true"></el-option>
                        <el-option label="不发布" value="false"></el-option>
                    </el-select>
                </el-form-item>
            </el-form>
            <span slot="footer" class="dialog-footer" >
                <el-button type="danger" @click="dialogVisible=false" >取 消</el-button>
                <el-button type="primary" @click="addNew" >{{isUpdateArticle?"更 新":"确 认"}}</el-button>
            </span>
        </el-dialog>

    </div>
</template>

<script>

    export default {
        data() {
            return {
             
                    dialogVisible:false,
                     isUpdateArticle:false,
                articleInfo:{
                    title:'',
                    shortTitle:'',
                    pubDate: new Date(),
                    content:'',
                    authore: 'lucux',
                    category:'',
                    isPublished: ''
                },
                categorys: [
                    {name:'javascript'},
                    {name:'vue.js'},
                    {name:'react'},
                    {name:'微信开发'}
                ],
                rules:{
                    title: [
                        {required:true,message:'文章标题不能为空',trigger:'blur'}
                    ],
                    shortTitle:[
                        {required:true,message:'标题不能为空',trigger:'blur'},
                        {max:10,message:'短标题不能超过10个字符',trigger:'blur'}
                    ],
                    pubDate:[
                        {required:true,message:'发布日期不能为空',trigger:'blur'}
                    ],
                    // authore:[
                    //     {required:true,message:'作者不能为空',trigger:'blur'}
                    // ]
                },      
                config:[
                        {"command":"image","title":'图片'},
                        {"command":"table","title":'表格'},
                        {"command":"link","title":'链接'},
                        {"command":"bold","title":"加粗"},
                        {"command":"italic","title":"斜体"},
                        {"command":"underline","title":"下划线"},
                        {"command":"strikethrough","title":"删除线"},
                        {"command":"justifyLeft","title":"居左"},
                        {"command":"justifyCenter","title":"居中"},
                        {"command":"justifyRight","title":"居右"},
                        {"command":"justifyFull","title":"两侧"},
                        {"command":"InsertUnorderedList","title":"无序列表"},
                        {"command":"insertOrderedList","title":"有序列表"},
                        {"command":"superscript","title":"上标"},
                        {"command":"subscript","title":"下标"},
                        {"command":"code","title":"代码"},
                        {"command":"removeFormat","title":"擦除"},
                        {"command":"undo","title":"撤销"},
                        {"command":"redo","title":"重做"},
                       
                ]
            }
        },
        
        created(){
        if(this.$route.params.articleInfo){
            this.isUpdateArticle = true;
            this.articleInfo = this.$route.params.articleInfo;
        }else{
            this.isUpdateArticle = false;
        }
        },
          
        methods:{
            commitBtn(){
                this.dialogVisible=true;
            },
            cancel(){
                var action = ()=>{
                    this.$router.push({name:"article"})
                }
                this.operatorConfirm("退出编辑",action);
            },
            handleClose(){
                this.dialogVisible = false;
                this.articleInfo = {}
            },

        // 点击确认提交时,判断是否是更新还是新增文章
        addNew(){
            this.$refs['articleInfo'].validate((valid)=>{
                if(valid){
                    var url = ''
                    if(this.isUpdateArticle){
                        url = this.$apis.updateArticle;
                    }else{
                        url = this.$apis.addNewArticle;
                    }
                    this.post(url,this.articleInfo)
                   
                    .then(()=>{
                        this.articleInfo = {};
                        this.handleClose();
                        this.$router.push({name:"article"})
                       
                    })
                }else{
                    return false;
                }
            })
        },
       
    },
    //  updateArticle(){
    //         alert("更新文章");
    //     },
  
}
    
</script>

<style lang="scss" scoped>
#editor{
    width:99%;
    height:400px;
    margin:0 auto;
    box-sizing:border-box;
}



</style>