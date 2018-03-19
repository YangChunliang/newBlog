import Vue from 'vue'
import router from './router'
import Back from './Back.vue'
import common from '../static/css/common.less'

new Vue({
    el: '#my-back',
    router,
    render: h => h(Back)
});
