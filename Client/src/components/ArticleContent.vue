<template>
    <div class="content" v-loading="loading">
        <div class="content-item" v-for="item in contentData">
            <a class="c-title" href="javascript:">{{ item.title }}</a>
            <p>{{ item.description }}</p>
            <router-link :to="item.viewId" class="c-continue" >继续阅读 >></router-link>
            <span class="my-infor">
                <div>{{ getFormatTime(item.addTime) }}</div>
                <div class="my-view"><i class="fa fa-eye"></i> {{ item.views }} </div>
            </span>
        </div>
        <el-pagination
                background
                layout="prev, pager, next"
                @current-change="handleCurrentChange"
                :page-count="page_total">
        </el-pagination>
        <my-footer/>
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
                page_total: 0,
                loading: true
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
                this.loading = true;
                Axios({
                    method: 'get',
                    url: `http://localhost:3000/content?page=${current_page}`,
                }).then((response) => {
                    let data = response.data;
                    this.contentData = data.content;
                    this.page_total = data.pages;
                    for(let item of this.contentData){
                        item.viewId = `/view?contentid=${item._id}`;
                    }
                    setTimeout(()=>{
                        this.loading = false;
                    },100);
                })
            },
            getFormatTime(time_str){
                return time_str.split('T')[0];
            }
        },
        computed: {
            reversedMessage: function () {
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
        display: inline-block;
        margin-left: 20vw;
    }
    .content-item{
        position:relative;
        border-bottom: solid 1px #d9e2ea;
        margin-bottom: 30px;
        width:1015px;
    }
    .content-item>.c-title{
        font-size: 28px;
        font-weight: 300;
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
    .my-infor{
        position:absolute;
        top:0;
        right:0;
        color: #555;
        font-size: .9em;
    }
    .my-view{
        text-align: right;
        margin-top: 10px;
    }
    .my-view>i{
        color:#2479CC;
    }
</style>
