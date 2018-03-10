import Vue from 'vue'
import Router from 'vue-router'
import ArticleContent from '../components/ArticleContent.vue'
import About from '../components/About.vue'
import Link from '../components/Link.vue'
import SpecialTopic from '../components/SpecialTopic.vue'
import OnFile from '../components/OnFile.vue'

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
            path: '/link',
            name: 'Link',
            component: Link
        },
        {
            path: '/onfile',
            name: 'OnFile',
            component: OnFile
        },
        {
            path: '/specialtopic',
            name: 'SpecialTopic',
            component: SpecialTopic
        }
    ]
})
