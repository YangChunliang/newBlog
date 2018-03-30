<template>
    <div class="my-login" v-show="flag">
        <div class="my-box">
            <input class="my-input" type="text" v-model="user" placeholder="用户名">
            <input class="my-input" type="password" v-model="psw" placeholder="密码"><br>
            <div class="sub" @click="isAdmin">登录</div>
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
                    if(res.data.code === 0){
                        this.$emit("ok");
                    }else{
                        alert("密码错误");
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
        position: absolute;
        top:0;
        left:0;
        background-color: #64de64;
    }
    .my-box{
        width:300px;
        background-color: #fff;
        position: absolute;
        top: 50%;
        left: 50%;
        margin-left:-150px;
        margin-top:-150px;
        border-radius: 5px;
        padding-bottom:20px;
        border:solid #dee6de 1px;
        box-shadow: #ccc 4px 4px ;
    }
    .my-input{
        display: block;
        width: 240px;
        height: 32px;
        border-radius: 3px;
        margin: 20px auto 0;
        padding-left: 10px;
        box-sizing: border-box;
    }
    .sub{
        cursor: pointer;
        width: 140px;
        height: 30px;
        border-radius: 3px;
        margin: 0px auto;
        background-color: #65d062;
        color: #fff;
        text-align: center;
        line-height: 30px;
    }
    .sub:hover{
        background-color: #44b944;
    }
</style>
