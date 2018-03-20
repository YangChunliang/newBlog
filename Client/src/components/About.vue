<template>
    <div class="my-about">
        <div class="name">{{ name }}</div>
        <div class="infor">{{ infor }}</div>
        <div class="address">{{ address }}</div>
        <div class="status">{{ status }}</div>
    </div>
</template>

<script>
    export default {
        name: "about",
        data(){
            return{
                name: '杨春亮',
                infor: '前端爱好者',
                address: '吉林长春人',
                status: '待业实习生'
            }
        }
    }
</script>

<style scoped lang="less">
    .my-about{
        padding: 40px 0 30px 38px;
        display: inline-block;
        width:1015px;
        margin-left: 20vw;
        .name{
            color: #499ae2;
            font-size: 30px;
            font-family: cursive;
            margin-bottom: 10px;
        }
        .infor,.address,.status{
            color: #6f8a6f;
            font-family: cursive;
            font-size: 20px;
        }
    }
</style>
