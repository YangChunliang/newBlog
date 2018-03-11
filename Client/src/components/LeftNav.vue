<template>
    <div class="left-nav">
        <ul>
            <li v-for="item in infor">
                <router-link :to="item.href">{{item.name}}</router-link>
            </li>
        </ul>
        <a href="/backManage.html"><i class="el-icon-setting"></i></a>
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
                        name: '首页'
                    },{
                        href: '/specialtopic',
                        name: '专题'
                    },{
                        href: '/onfile',
                        name: '归档'
                    },{
                        href: '/link',
                        name: '友链'
                    },{
                        href: '/about',
                        name: '关于'
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
    background-color: #ccc;
}
</style>
