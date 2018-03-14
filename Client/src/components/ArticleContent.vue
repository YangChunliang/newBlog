<template>
    <div class="content">
        <div class="content-item" v-for="item in helloData">
            <a class="c-title" href="javascript:;">{{ item.title }}</a>
            <p>{{ item.content }}</p>
            <a class="c-continue" href="javascript:;">继续阅读 >></a>
        </div>
    </div>
</template>

<script>
    import Axios from 'axios';
    export default {
        name: "article-content",
        data () {
            return {
                helloData: ""
            }
        },
        mounted(){
            Axios({
                method: 'get',
                url: 'http://localhost:3000/content',
            }).then((response) => {
                this.helloData = response.data;
            })
        }
    }
</script>

<style scoped>
    .content{
        padding: 40px 0 0 38px;
        /*background-color: #ccc;*/
        display: inline-block;
    }
    .content-item{
        border-bottom: solid 1px #d9e2ea;
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
</style>
