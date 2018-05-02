<template>
    <div class="content-add">
        <h3>新增文章</h3>
        <el-select v-model="value" placeholder="请选择">
            <el-option
                    v-for="item in options"
                    :key="item._id"
                    :label="item.name"
                    :value="item._id">
            </el-option>
        </el-select>
        <el-input v-model="title" placeholder="请输入文章标题" style="width: 600px;margin-left: 30px;"></el-input>
        <textarea name="" v-model="desc" id="my-desc" cols="110" rows="7" placeholder="请输入文章简介"></textarea>
        <br>
        <textarea name="" id="my-content" v-model="txtBefore" @keyup="txtChange" cols="70" rows="28" placeholder="原始内容"></textarea>
        <div class="txt-after" v-html="txtAfter"></div>
        <el-button type="primary" @click="formSub">提交</el-button>
    </div>
</template>

<script>
    import Axios from 'axios';
    import Showdown from 'showdown';
    export default {
        name: "content-add",
        props:["userid"],
        data(){
            return {
                myContent: '',
                options: [],
                value: '',
                title: '',
                txtBefore: '',
                txtAfter: '',
                desc: ''
            }
        },
        mounted(){
            Axios({
                method: 'get',
                url: 'http://localhost:3000/category',
                data:{
                }
            }).then((res) => {
                this.options = res.data;
            });
        },
        methods:{
            formSub(){
                if(!this.userid || !this.value || !this.title || !this.desc || !this.txtBefore){
                    this.$notify.error({
                        title: '错误',
                        message: '内容未填写完整！'
                    });
                }else{
                    Axios({
                        method: 'post',
                        url: 'http://localhost:3000/addContent',
                        data:{
                            userId: this.userid,
                            category: this.value,
                            title: this.title,
                            desc: this.desc,
                            txtBefore: this.txtBefore
                        }
                    }).then((res) => {
                        let data = res.data;
                        if(data.status === 0){
                            this.$notify({
                                title: '成功',
                                message: '文章创建成功！',
                                type: 'success'
                            });
                            this.value = '';
                            this.title = '';
                            this.desc = '';
                            this.txtBefore = '';
                            this.txtAfter = '';
                        }
                    });
                }
            },
            txtChange(){
                const converter = new Showdown.Converter();
                this.txtAfter = converter.makeHtml(this.txtBefore);
            }
        }
    }
</script>

<style scoped>
    .content-add{
        width:1100px;
        float:left;
        margin-left: 20px;
        padding-top:10px;
        padding-bottom:10px;
    }
    textarea{
        resize: none;
        padding: 5px 15px;
        line-height: 1.5;
        box-sizing: border-box;
        font-size: 14px;
        font-family: "Microsoft YaHei";
        color: #606266;
        border: 1px solid #dcdfe6;
        border-radius: 4px;
        -webkit-transition: border-color .2s cubic-bezier(.645,.045,.355,1);
        transition: border-color .2s cubic-bezier(.645,.045,.355,1);
    }
    textarea:focus{
        outline: 0;
        border-color: #409EFF;
    }
    textarea:hover{
        border-color: #c0c4cc;
    }
    #my-desc{
        width:856px;
        margin-top:20px;
        margin-bottom:20px;
    }
    textarea::-webkit-input-placeholder{
        color:#c0c4cc;
        font-size:14px;
        font-family: "Microsoft YaHei";
    }
    .txt-after{
        float: right;
        width: 539px;
        height: 600px;
        padding: 5px 15px;
        line-height: 1.5;
        box-sizing: border-box;
        font-size: 14px;
        color: #606266;
        border: 1px solid #dcdfe6;
        border-radius: 4px;
        transition: border-color .2s cubic-bezier(.645,.045,.355,1);
    }
</style>
