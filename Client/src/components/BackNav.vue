<template>
    <div class="back-nav">
        <div class="login-infor">
            <span>{{username}}</span>
            <button @click = 'loginOut'>退出</button>
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
                console.log(key, keyPath);
            },
            handleClose(key, keyPath) {
                console.log(key, keyPath);
            }
        }
    }
</script>

<style scoped lang="less">
    .back-nav{
        width:200px;
    }
</style>
