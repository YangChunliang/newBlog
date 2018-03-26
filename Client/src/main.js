import Vue from 'vue'
import { Pagination,Loading} from 'element-ui';
import router from './router'
import App from './Index.vue'
import '../static/css/common.less'

Vue.use(Pagination);
Vue.use(Loading);
Vue.config.productionTip = false;
new Vue({
    el: '#app',
    router,
    render: h => h(App)
});
