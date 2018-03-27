import Vue from 'vue'
import router from './router'
import Back from './Back.vue'

new Vue({
    el: '#my-back',
    router,
    render: h => h(Back)
});
