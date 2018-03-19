import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import router from './router'
import App from './Index.vue'
import '../static/css/common.less'

Vue.use(ElementUI);
Vue.config.productionTip = false;
new Vue({
    el: '#app',
    router,
    render: h => h(App)
});
