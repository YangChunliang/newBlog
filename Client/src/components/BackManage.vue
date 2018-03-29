<template>
    <div class="hou-tai">
        <back-nav></back-nav>
        <my-login :flag="isAdmin" @ok="loginPass"></my-login>
        <router-view></router-view>
    </div>
</template>

<script>
    import MyLogin from './MyLogin.vue'
    import BackNav from './BackNav.vue'
    export default {
        name: "houtai",
        components:{
            MyLogin,
            BackNav
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
.hou-tai{
    /*padding: 40px 0 30px 38px;*/
    /*display: inline-block;*/
}
</style>
