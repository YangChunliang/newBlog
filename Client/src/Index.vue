<template>
  <div id="app">
    <left-nav></left-nav>
    <router-view></router-view>
  </div>
</template>

<script>
import LeftNav from './components/LeftNav.vue'
export default {
  name: 'app',
  data () {
    return {
    }
  },
  components: {
      LeftNav
  }
}
</script>

<style>
</style>
