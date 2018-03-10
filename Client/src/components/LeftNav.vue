<template>
    <div class="left-nav">
        <ul>
            <li v-for="item in infor">
                <router-link :to="item.href">{{item.name}}</router-link>
            </li>
        </ul>
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
