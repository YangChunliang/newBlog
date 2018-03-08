<template>
  <div>
    <left-nav></left-nav>
    <router-view></router-view>
  </div>
</template>

<script>
  import LeftNav from "./components/LeftNav.vue";
  export default {
    name: 'index',
    components: {
      LeftNav
    },
    data () {
      return {
      }
    }
  }
</script>

<style>
*{
  margin:0;
  padding:0;
}
</style>
