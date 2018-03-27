<template>
    <div class="my-view" v-loading="loading">
        <div class="content-item">
            <h2 class="c-title">{{ myContent.title }}</h2>
            <p class="view-txt" v-html="toHtml"></p>
            <span class="my-infor">
                <div>{{ getFormatTime(myContent.addTime) }}</div>
                <div class="my-view2"><i class="fa fa-eye"></i> {{ myContent.views }} </div>
            </span>
        </div>
        <div id="SOHUCS" :sid="this.$route.params.view_id"></div>
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
                loading: true,
                myContent: ''
            }
        },
        mounted(){
            (function() {
                //鐣呰█婊ら噸
                if (window.changyan !== undefined || window.cyan !== undefined) {
                    return;
                }
                var createNs = function() {
                    if (window.changyan !== undefined) {
                        return;
                    } else {
                        window.changyan = {};
                        window.changyan.api = {};
                        window.changyan.api.config = function(conf) {
                            window.changyan.api.tmpIsvPageConfig = conf;
                        };
                        window.changyan.api.ready = function(fn) {
                            window.changyan.api.tmpHandles = window.changyan.api.tmpHandles || [];
                            window.changyan.api.tmpHandles.push(fn);
                        };
                        window.changyan.ready = function(fn) {
                            if (window.changyan.rendered) {
                                fn && fn();
                            } else {
                                window.changyan.tmpHandles = window.changyan.tmpHandles || [];
                                window.changyan.tmpHandles.push(fn);
                            }
                        }
                    }
                };

                var createMobileNs = function() {
                    if (window.cyan) {
                        return;
                    }
                    window.cyan = {};
                    window.cyan.api = {};
                    window.cyan.api.ready = function(fn) {
                        window.cyan.api.tmpHandles = window.cyan.api.tmpHandles || [];
                        window.cyan.api.tmpHandles.push(fn);
                    };
                };
                var loadVersionJs = function() {
                    var loadJs = function(src, fun) {
                        var head = document.getElementsByTagName('head')[0] || document.head || document.documentElement;

                        var script = document.createElement('script');
                        script.setAttribute('type', 'text/javascript');
                        script.setAttribute('charset', 'UTF-8');
                        script.setAttribute('src', src);

                        if (typeof fun === 'function') {
                            if (window.attachEvent) {
                                script.onreadystatechange = function() {
                                    var r = script.readyState;
                                    if (r === 'loaded' || r === 'complete') {
                                        script.onreadystatechange = null;
                                        fun();
                                    }
                                };
                            } else {
                                script.onload = fun;
                            }
                        }

                        head.appendChild(script);
                    };

                    var ver = + new Date() + window.Math.random().toFixed(16);
                    var url = 'https://changyan.itc.cn/upload/version-v3.js?' + ver;
                    loadJs(url);
                };
                createNs();
                createMobileNs();
                loadVersionJs();
            }());
            window.changyan.api.config({
                appid: 'cytwyrlgH',
                conf: 'prod_66d07e30552a154c26970b765bbfd772'
            });
            this.renderData();
        },
        methods:{
            renderData(){
                this.loading = true;
                Axios({
                    method: 'get',
                    url: `/view?contentid=${this.$route.params.view_id}`,
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
            },

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
        .content-item{
            position:relative;
            border-bottom: solid 1px #d9e2ea;
            margin-bottom: 30px;
            width:1015px;
            >p{
                margin-top: 25px;
                margin-bottom: 20px;
                line-height:1.5rem;
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
    }
</style>
