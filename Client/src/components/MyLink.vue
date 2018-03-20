<template>
    <div class="my-link">
        <ul>
            <li v-for="item in linkData">
                <a :href="item.mLink" target="_blank">{{ item.name }}</a>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "mylink",
        data(){
            return{
                linkData:[
                    {
                        name: '屈屈的博客',
                        mLink: 'https://imququ.com/'
                    },
                    {
                        name: '月影大大的博客',
                        mLink: 'https://www.h5jun.com/'
                    },
                    {
                        name: '奇舞周刊',
                        mLink: 'https://weekly.75team.com/'
                    },
                    {
                        name: '张鑫旭的空间',
                        mLink: 'http://www.zhangxinxu.com/wordpress/'
                    },
                    {
                        name: '前端乱炖',
                        mLink: 'http://www.html-js.com/'
                    },
                    {
                        name: 'w3cplus',
                        mLink: 'https://www.w3cplus.com/'
                    }
                ]
            }
        }
    }
</script>

<style scoped lang="less">
    .my-link{
        padding: 40px 0 30px 38px;
        display: inline-block;
        width:1015px;
        margin-left: 20vw;
        a{
            color: #499ae2;
        }
    }
</style>
