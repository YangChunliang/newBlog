<template>
    <div class="left-nav">
        <img class="left-header" src="../../static/img/my-header.png" alt="">
        <div class="left-name">Younger</div>
        <div class="left-infor">不积跬步无以至千里</div>
        <ul>
            <li class="left-item" v-for="item in infor">
                <router-link :to="item.href"><i :class="item.lei"></i> {{item.name}}</router-link>
            </li>
        </ul>
        <li class="left-item"><a href="/backManage.html"><i class="el-icon-setting"></i> 设置</a></li>
    </div>
</template>

<script>

    export default {
        name: "left-nav",
        data (){
            return {
                infor: [
                    {
                        href: '/',
                        name: '首页',
                        lei: 'el-icon-loading'
                    },{
                        href: '/specialtopic',
                        name: '专题',
                        lei: 'el-icon-goods'
                    },{
                        href: '/onfile',
                        name: '归档',
                        lei: 'el-icon-bell'
                    },{
                        href: '/link',
                        name: '友链',
                        lei: 'el-icon-share'
                    },{
                        href: '/about',
                        name: '关于',
                        lei: 'el-icon-service'
                    }
                ]
            }

        },
        methods: {
            startHacking () {
                this.$notify({
                    title: 'It works!',
                    type: 'success',
                    message: 'We\'ve laid the ground work for you. It\'s time for you to build something epic!',
                    duration: 5000
                })
            }
        }
    }
</script>

<style scoped>
    .left-nav{
        width:20vw;
        height:100vh;
        float:left;
        background:url("../../static/img/my-bgcnav.png");
    }
    .left-header{
        width: 130px;
        border-radius: 50%;
        margin: 30px auto 0;
    }
    .left-name{
        font-size: 22px;
        text-align: center;
        color: #499ae2;
        margin-top: 10px;
        margin-bottom: 5px;
    }
    .left-infor{
        color: #a0b3c3;
        text-align: center;
        font-size: 15px;
    }
    .left-item {
        text-align: center;
        margin-top: 10px;
        /*color:#499ae2;*/
    }
    .left-item>a{
        color:#499ae2;
    }
    .left-item>a:hover{
        text-shadow: 1px 1px #e4bebe;
    }
</style>
