<template>
    <div class="back-nav">
        <div class="login-infor">
            <div class="user-info">{{username}}</div>
            <div class="out-login" @click = 'loginOut'>退出</div>
        </div>
        <el-menu
                default-active="2"
                class="el-menu-vertical-demo"
                @open="handleOpen"
                @close="handleClose">
            <el-submenu index="1">
                <template slot="title">
                    <i class="fa fa-book"></i>
                    <span>文章管理</span>
                </template>
                <router-link to="/manage/content_list">
                    <el-menu-item index="1-1">
                        文章列表
                    </el-menu-item>
                </router-link>
                <router-link to="/manage/content_add">
                    <el-menu-item index="1-2">
                        新增文章
                    </el-menu-item>
                </router-link>
            </el-submenu>
            <el-submenu index="2">
                <template slot="title">
                    <i class="fa fa-tags"></i>
                    <span slot="title">分类管理</span>
                </template>
                <router-link to="/manage/category_list">
                    <el-menu-item index="2-1">分类列表</el-menu-item>
                </router-link>
                <router-link to="/manage/category_add">
                    <el-menu-item index="2-2">新增分类</el-menu-item>
                </router-link>
            </el-submenu>
            <el-submenu index="3">
                <template slot="title">
                    <i class="fa fa-user-circle"></i>
                    <span slot="title">个人管理</span>
                </template>
                <router-link to="/manage/personal_center">
                    <el-menu-item index="3-1">个人中心</el-menu-item>
                </router-link>
            </el-submenu>
        </el-menu>
    </div>
</template>

<script>
    import Axios from 'axios'
    export default {
        name: "back-nav",
        props: ['username'],
        methods: {
            loginOut(){
                Axios({
                    method: 'get',
                    url: 'http://localhost:3000/loginout',
                    data:{}
                }).then((res) => {
                    if(res.data.code === 0){
                        location.reload();
                    }
                });
            },
            handleOpen(key, keyPath) {
                // console.log(key, keyPath);
            },
            handleClose(key, keyPath) {
                // console.log(key, keyPath);
            }
        }
    }
</script>

<style scoped lang="less">
    .back-nav{
        width:200px;
        float: left;
        margin-left: 25px;
        span{
            font-size: 21px;
            font-family: KaiTi;
        }
        .fa{
            margin-right: 5px;
            font-size: 18px;
        }
        .login-infor{
            padding-top: 20px;
            padding-left: 20px;
            padding-bottom: 10px;
            .user-info{
                font-size: 24px;
                font-family: KaiTi;
                display: inline-block;
                height: 30px;
            }
            .out-login{
                display: inline-block;
                cursor: pointer;
                color: #938fce;
                margin-left: 10px;
                &:hover{
                    text-decoration: underline;
                }
            }
        }
    }
    li.el-menu-item{
        margin-left: 20px;
        min-width: 180px;
    }
</style>
