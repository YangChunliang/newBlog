import Vue from 'vue'
import Router from 'vue-router'
// import ArticleContent from '../components/ArticleContent.vue'
// import About from '../components/About.vue'
// import MyLink from '../components/MyLink.vue'
// import SpecialTopic from '../components/SpecialTopic.vue'
// import OnFile from '../components/OnFile.vue'
// import MyView from '../components/MyView.vue'

const ArticleContent = () => import('../components/ArticleContent.vue');
const About = () => import('../components/About.vue');
const MyLink = () => import('../components/MyLink.vue');
const SpecialTopic = () => import('../components/SpecialTopic.vue');
const OnFile = () => import('../components/OnFile.vue');
const MyView = () => import('../components/MyView.vue');

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'ArticleContent',
            component: ArticleContent
        },
        {
            path: '/about',
            name: 'About',
            component: About
        },
        {
            path: '/mylink',
            name: 'MyLink',
            component: MyLink
        },
        {
            path: '/specialtopic',
            name: 'SpecialTopic',
            component: SpecialTopic
        },
        {
            path: '/onfile',
            name: 'OnFile',
            component: OnFile
        },
        {
            path: '/detail/:view_id',
            name: 'MyView',
            component: MyView
        }
    ]
})
