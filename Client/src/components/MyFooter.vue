<template>
    <div class="my-footer">
        <div>© 2018 - 林殊 的小站 - 吉 ICP 备 17004978 号</div>
        <div class="my-power">Powered by <a href="https://koa.bootcss.com/">Koa 2</a> & <a href="https://cn.vuejs.org/">Vue 2</a></div>
    </div>
</template>

<script>
    export default {
        name: "my-footer"
    }
</script>

<style scoped>
    .my-footer{
        text-align: center;
        margin-top: 30px;
        font-size: .9em;
        color: #666;
    }
    .my-power>a{
        color: #337ab7;
    }
    .my-footer>.my-power{
        margin-top: 10px;
    }
</style>
