<template>
<div class="my-back2">
    <my-login :flag="isAdmin" @ok="loginPass"></my-login>
    <div>后台正文</div>
</div>
</template>

<script>
    import MyLogin from './components/MyLogin.vue'
    export default {
        name: "back",
        components: {
            MyLogin
        },
        data(){
            return{
                isAdmin: true
            }
        },
        methods: {
            loginPass(){
                this.isAdmin = false;
            }
        }
    }
</script>

<style scoped>
</style>
