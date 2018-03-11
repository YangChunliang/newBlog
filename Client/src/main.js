import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import router from './router'
import App from './Index.vue'
import common from '../static/css/common.css'

Vue.use(ElementUI);
Vue.config.productionTip = false;
new Vue({
    el: '#app',
    router,
    render: h => h(App)
});
