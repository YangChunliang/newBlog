<template>
    <div class="hou-tai">
        <back-nav :username="name"></back-nav>
        <my-login :flag="isAdmin" @ok="loginPass"></my-login>
        <router-view :userid="myId"></router-view>
    </div>
</template>

<script>
    import MyLogin from './MyLogin.vue'
    import BackNav from './BackNav.vue'
    import Axios from 'axios'
    export default {
        name: "houtai",
        components:{
            MyLogin,
            BackNav
        },
        data(){
            return{
                name: '亮哥',
                isAdmin: false,
                myId: ''
            }
        },
        mounted: function(){
            this.isLogin();
        },
        methods: {
            loginPass(){
                this.isAdmin = false;
                Axios({
                    method: 'get',
                    url: 'http://localhost:3000/islogin',
                    data:{}
                }).then((res) => {
                    if(res.data.code === 0){
                        this.name = res.data.username;
                        this.myId = res.data.id;
                    }
                });
            },
            isLogin(){
                //调用接口，查看是否已经登录
                Axios({
                    method: 'get',
                    url: 'http://blog.springmoon.cn:3000/islogin',
                    data:{}
                }).then((res) => {
                    if(res.data.code === 0){
                        this.name = res.data.username;
                        this.myId = res.data.id;
                    }else{
                        this.isAdmin = true;
                    }
                });
            }
        }

    }
//    首次进入->验证cookie是否存在->登录账户->存入cookie->验证cookie是否存在
//    再次进入->验证cookie是否存在
</script>

<style scoped>
.hou-tai{
    /*padding: 40px 0 30px 38px;*/
    /*display: inline-block;*/
}
</style>
