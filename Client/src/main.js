import Vue from 'vue'
import { Pagination,Loading, Menu, MenuItem, MenuItemGroup, Submenu,
    Select, Option, Table, TableColumn, Tag, Button,Input, Notification
,MessageBox,Message,FormItem,Form} from 'element-ui';
import router from './router'
import App from './Index.vue'
import '../static/css/common.less'

Vue.use(Pagination);
Vue.use(Loading);
Vue.use(Menu);
Vue.use(MenuItem);
Vue.use(MenuItemGroup);
Vue.use(Submenu);
Vue.use(Select);
Vue.use(Option);
Vue.use(Table);
Vue.use(TableColumn);
Vue.use(Tag);
Vue.use(Button);
Vue.use(Input);
Vue.use(FormItem);
Vue.use(Form);
Vue.prototype.$confirm = MessageBox.confirm;
Vue.prototype.$prompt = MessageBox.prompt;
Vue.prototype.$notify = Notification;
Vue.prototype.$message = Message;
Vue.config.productionTip = false;
new Vue({
    el: '#app',
    router,
    render: h => h(App)
});
