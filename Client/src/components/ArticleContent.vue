<template>
    <div class="content">
        <div class="content-item" v-for="item in contentData">
            <a class="c-title" href="javascript:;">{{ item.title }}</a>
            <p>{{ item.description }}</p>
            <a class="c-continue" href="javascript:;">继续阅读 >></a>
            <span>
                <div>{{ getFormatTime(item.addTime) }}</div>
                <div>{{ item.views }}</div>
            </span>
        </div>
        <el-pagination
                background
                layout="prev, pager, next"
                @current-change="handleCurrentChange"
                :page-count="page_total">
        </el-pagination>
        <my-footer></my-footer>
    </div>
</template>

<script>
    import Axios from 'axios';
    import MyFooter from './MyFooter.vue';
    export default {
        name: "article-content",
        data () {
            return {
                contentData: [],
                page_total: 0
            }
        },
        mounted(){
            this.renderData(1);
        },
        methods:{
            handleCurrentChange(val){
                this.renderData(val);
            },
            renderData(current_page){
                Axios({
                    method: 'get',
                    url: `http://localhost:3000/content?page=${current_page}`,
                }).then((response) => {
                    let data = response.data;
                    this.contentData = data.content;
                    this.page_total = data.pages;
                })
            },
            getFormatTime(time_str){
                return time_str.split('T')[0];
            }
        },
        computed: {
            // 计算属性的 getter
            reversedMessage: function () {
                // `this` 指向 vm 实例
                // return this.message.split('').reverse().join('')
            }
        },
        components: {
            MyFooter
        }
    }
</script>

<style scoped>
    .content{
        padding: 40px 0 30px 38px;
        /*background-color: #ccc;*/
        display: inline-block;
        margin-left: 20vw;
    }
    .content-item{
        border-bottom: solid 1px #d9e2ea;
        margin-bottom: 30px;
        width:1015px;
    }
    .content-item>.c-title{
        font-size: 28px;
        font-weight: normal;
        color: #333;
        transition: color .3s;
    }
    .content-item>.c-title:hover{
        color: #337ab7;
    }
    .content-item>p{
        margin-top: 25px;
        margin-bottom: 20px;
    }
    .c-continue{
        display: inline-block;
        color: #2479CC;
        font-size: 15px;
        transition: color .3s;
        margin-bottom: 20px;
    }
    .c-continue:hover{
        text-decoration: underline;
    }
    .el-pagination{
        text-align: center;
    }
</style>
