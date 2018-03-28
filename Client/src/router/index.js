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
const HouTai = () => import('../components/HouTai.vue');
const LeftNav = () => import('../components/LeftNav.vue');

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'ArticleContent',
            components: {
                default: LeftNav,
                nav: ArticleContent
            }
        },
        {
            path: '/about',
            name: 'About',
            components: {
                default: LeftNav,
                nav: About
            }
        },
        {
            path: '/mylink',
            name: 'MyLink',
            components: {
                default: LeftNav,
                nav: MyLink
            }
        },
        {
            path: '/specialtopic',
            name: 'SpecialTopic',
            components: {
                default: LeftNav,
                nav: SpecialTopic
            }
        },
        {
            path: '/onfile',
            name: 'OnFile',
            components: {
                default: LeftNav,
                nav: OnFile
            }
        },
        {
            path: '/detail/:view_id',
            name: 'MyView',
            components: {
                default: LeftNav,
                nav: MyView
            }
        },
        {
            path: '/houtai',
            name: 'HouTai',
            components: {
                default: "",
                nav: HouTai
            }
        }
    ]
})
