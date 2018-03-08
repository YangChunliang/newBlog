<template>
  <div class="navBox">
    <ul>
      <li v-for="item in items">
        <router-link :to="item.href">{{item.name}}</router-link>
      </li>
    </ul>
  </div>
</template>
<script>
  export default {
    name: 'leftNav',
    data () {
      return {
        items: [{
          name: '首页',
          href: '/'
        },{
          name: '专题',
          href: '/zhuanti'
        },{
          name: '归档',
          href: '/guidang'
        },{
          name: '友链',
          href: '/youlian'
        },{
          name: '关于',
          href: '/guanyu'
        }]
      }
    }
  }
</script>
<style scoped>
.navBox{
  float: left;
  width: 20%;
  height: 100vh;
  background-color: #ccc;
}
</style>
