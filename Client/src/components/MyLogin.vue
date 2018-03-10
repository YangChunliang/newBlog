<template>
    <div class="my-login" v-show="flag">
        <div class="my-box">
            <input type="text" v-model="user" placeholder="用户名">
            <input type="password" v-model="psw" placeholder="密码">
            <button @click="isAdmin">登录</button>
        </div>
    </div>
</template>

<script>
    import Axios from 'axios';
    export default {
        name: "back-login",
        props:{
            flag: {
                type: Boolean,
                default: true
            }
        },
        data (){
            return {
                user: "",
                psw: ""
            }
        },
        methods:{
            isAdmin(){
                //调用接口，验证用户名与密码
                Axios({
                    method: 'post',
                    url: 'http://localhost:3000/login',
                    data:{
                        user: this.user,
                        psw: this.psw
                    }
                }).then((res) => {
                    if(res.data.result.isAdmin === true){
                        this.$emit("ok");
                    }
                });
            }
        }
    }
</script>

<style scoped>
    .my-login{
        width:100vw;
        height:100vh;
        background-color: #a0c3ec;
        position: absolute;
    }
    .my-box{
        width:300px;
        height:300px;
        background-color: #fff;
        position: absolute;
        top: 50%;
        left: 50%;
        margin-left:-150px;
        margin-top:-150px;
    }
</style>
