<template>
    <div class="left-nav">
        <img class="left-header" src="../../static/img/my-header.png" alt="">
        <div class="left-name">林殊</div>
        <div class="left-infor">不积跬步无以至千里</div>
        <ul>
            <li class="left-item" v-for="item in infor">
                <router-link :to="item.href"><i :class="item.lei"></i> {{item.name}}</router-link>
            </li>
        </ul>
        <li class="left-item"><a href="/backManage.html"><i class="fa fa-cog fa-spin"></i> 设置</a></li>
        <img class="fish-move" src="../../static/img/fish-move.gif" alt="">
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
                        lei: 'fa fa-home'
                    },{
                        href: '/specialtopic',
                        name: '专题',
                        lei: 'fa fa-linux'
                    },{
                        href: '/onfile',
                        name: '归档',
                        lei: 'fa fa-apple'
                    },{
                        href: '/mylink',
                        name: '友链',
                        lei: 'fa fa-link'
                    },{
                        href: '/about',
                        name: '关于',
                        lei: 'fa fa-gitlab'
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

<style scoped lang="less">
    .left-nav{
        width:20vw;
        height:100vh;
        position: fixed;
        top:0;
        left:0;
        background-color: #a3a3da;
        .left-header{
            width: 130px;
            border-radius: 50%;
            margin: 30px auto 0;
        }
        .left-name{
            font-size: 22px;
            text-align: center;
            color: #ffffff;
            margin-top: 10px;
            margin-bottom: 5px;
        }
        .left-infor{
            color: #fff;
            text-align: center;
            font-size: 15px;
        }
        .fish-move{
            width:60%;
            margin-top:50px;
            margin-left:40px;
        }
        .left-item {
            text-align: center;
            margin-top: 10px;
            list-style: none;
            >a{
                color:#fff;
                &:hover{
                    text-shadow: 1px 1px #e4bebe;
                }
            }
        }
    }
</style>
