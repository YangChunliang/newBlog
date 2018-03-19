<template>
    <div class="my-view" v-loading="loading">
        <div class="content-item">
            <a class="c-title" href="javascript:;">{{ myContent.title }}</a>
            <p v-html="toHtml"></p>
            <span class="my-infor">
                <div>{{ getFormatTime(myContent.addTime) }}</div>
                <div class="my-view2"><i class="fa fa-eye"></i> {{ myContent.views }} </div>
            </span>
        </div>
        <my-footer></my-footer>
    </div>
</template>

<script>
    import Axios from 'axios';
    import Showdown from 'showdown';
    import MyFooter from './MyFooter.vue';
    export default {
        name: "my-view",
        data () {
            return {
                viewId: '',
                loading: true,
                myContent: ''
            }
        },
        mounted(){
            this.viewId = this.getUrlArgu("contentid");
            this.renderData(this.viewId);
        },
        methods:{
            getUrlArgu(name){//获取URL中的参数
                let reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i"); // 匹配目标参数
                let result = window.location.search.substr(1).match(reg); // 对querystring匹配目标参数
                if (result != null) {
                    return decodeURIComponent(result[2]);
                } else {
                    return null;
                }
            },
            renderData(myId){
                this.loading = true;
                Axios({
                    method: 'get',
                    url: `http://localhost:3000/view?contentid=${myId}`,
                }).then((response) => {
                    let data = response.data;
                    this.myContent = data.content;
                    setTimeout(()=>{
                        this.loading = false;
                    },100);
                })
            },
            getFormatTime(time_str){
                time_str += "";
                return time_str.split("T")[0];
            }
        },
        computed: {
            toHtml: function () {
                return new Showdown.Converter().makeHtml(this.myContent.content);
            }
        },
        components: {
            MyFooter
        }
    }
</script>

<style scoped lang="less">
    .my-view{
        margin-left: 20vw;
        padding: 40px 0 30px 38px;
        display: inline-block;
    }
    .content-item{
        position:relative;
        border-bottom: solid 1px #d9e2ea;
        margin-bottom: 30px;
        width:1015px;
        >.c-title{
            font-size: 28px;
            font-weight: 300;
            color: #333;
            transition: color .3s;
            &:hover{
                color: #337ab7;
            }
        }
        >p{
            margin-top: 25px;
            margin-bottom: 20px;
        }
        .my-infor{
            position:absolute;
            top:0;
            right:0;
            color: #555;
            font-size: .9em;
            .my-view2{
                text-align: right;
                margin-top: 10px;
                >i{
                    color:#2479CC;
                }
            }
        }
    }
</style>
