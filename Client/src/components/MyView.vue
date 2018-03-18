<template>
    <div class="my-view">{{ hai }}</div>
</template>

<script>
    import Axios from 'axios';
    export default {
        name: "my-view",
        data () {
            return {
                viewId: '',
                loading: true,
                hai: ''
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
                    this.hai = data.content;
                    setTimeout(()=>{
                        this.loading = false;
                    },500);
                })
            }
        }
    }
</script>

<style scoped>
    .my-view{
        margin-left: 20vw;
    }
</style>
