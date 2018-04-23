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
        <textarea name="" id="my-desc" cols="110" rows="7" placeholder="请输入文章简介"></textarea>
        <br>
        <textarea name="" id="my-content" cols="70" rows="28" placeholder="原始内容"></textarea>
        <textarea name="" id="" cols="70" rows="28" placeholder="转义内容"></textarea><br>
        <el-button type="primary" @click="formSub">提交</el-button>
    </div>
</template>

<script>
    import Axios from 'axios';
    export default {
        name: "content-add",
        props:["userid"],
        data(){
            return {
                myContent: '',
                options: [],
                value: '',
                title: ''
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
                console.log(this.userid);
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
</style>
