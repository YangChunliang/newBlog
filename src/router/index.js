import Vue from 'vue'
import Router from 'vue-router'
import ZhuanTi from '../components/ZhuanTi.vue'
import GuiDang from '../components/GuiDang.vue'
import YouLian from '../components/YouLian.vue'
import GuanYu from '../components/GuanYu.vue'

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/zhuanti',
      name: 'ZhuanTi',
      component: ZhuanTi
    },
    {
      path: '/guidang',
      name: 'GuiDang',
      component: GuiDang
    },
    {
      path: '/youlian',
      name: 'YouLian',
      component: YouLian
    },
    {
      path: '/guanyu',
      name: 'GuanYu',
      component: GuanYu
    }
  ]
})
