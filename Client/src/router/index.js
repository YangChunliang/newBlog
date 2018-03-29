import Vue from 'vue'
import Router from 'vue-router'

const ArticleContent = () => import('../components/ArticleContent.vue');
const About = () => import('../components/About.vue');
const MyLink = () => import('../components/MyLink.vue');
const SpecialTopic = () => import('../components/SpecialTopic.vue');
const OnFile = () => import('../components/OnFile.vue');
const MyView = () => import('../components/MyView.vue');
const BackManage = () => import('../components/BackManage.vue');
const LeftNav = () => import('../components/LeftNav.vue');
const ContentList = () => import('../components/ContentList');
const ContentAdd = () => import('../components/ContentAdd');
const CategoryList = () => import('../components/CategoryList');
const CategoryAdd = () => import('../components/CategoryAdd');
const PersonalCenter = () => import('../components/PersonalCenter');
const MyBase = () => import('../components/MyBase');

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
            path: '/manage',
            name: 'BackManage',
            components: {
                default: "",
                nav: BackManage
            },
            children: [
                {
                    path: 'content_list',
                    component: ContentList
                },
                {
                    path: 'content_add',
                    component: ContentAdd
                },
                {
                    path: 'category_list',
                    component: CategoryList
                },
                {
                    path: 'category_add',
                    component: CategoryAdd
                },
                {
                    path: 'personal_center',
                    component: PersonalCenter
                },
                {
                    path: '',
                    component: MyBase
                }
            ]
        }
    ]
})
