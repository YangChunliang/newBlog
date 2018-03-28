<template>
  <div id="app">
    <router-view></router-view>
    <router-view name="nav"></router-view>
  </div>
</template>
<script>
export default {
  name: 'app',
  data () {
    return {
        input: ''
    }
  }
}
</script>
<style>
</style>
