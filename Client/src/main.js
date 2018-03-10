import Vue from 'vue'
import router from './router'
import App from './Index.vue'
import common from '../static/css/common.css'

new Vue({
    el: '#app',
    router,
    render: h => h(App)
});
