import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import('../views/home/Home')
const Faxian = () => import('../views/faxian/Faxian')
const Dingdan = () => import('../views/dingdan/Dingdan')
const My = () => import('../views/my/My')

Vue.use(VueRouter)

const router = new VueRouter({
    routes: [
        {
            path: '',
            redirect: '/home'
        },
        {
            path: '/home',
            component: Home
        },
        {
            path: '/faxian',
            component: Faxian
        },
        {
            path: '/dingdan',
            component: Dingdan
        },
        {
            path: '/my',
            component: My
        },
    ]
})

export default router