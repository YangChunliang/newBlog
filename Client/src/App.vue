<template>
  <div id="app">
    <h1>客户端数据：{{ msg }}</h1>
    <h1>服务端数据：{{ helloData }}</h1>
  </div>
</template>

<script>
import Axios from 'axios'
export default {
  name: 'app',
  data () {
    return {
      msg: '哈哈哈',
      helloData: ""
    }
  },
  mounted(){
    Axios({
      method: 'get',
      url: 'http://localhost:3000/hello',
    }).then((response) => {
    this.helloData = response.data;
    })
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
