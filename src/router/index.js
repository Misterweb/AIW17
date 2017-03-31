import Vue from 'vue'
import Router from 'vue-router'
import Landing from '@/components/Landing'
import Meet from '@/components/Meet'
import Subscribe from '@/components/Subscribe'
import Login from '@/components/Login'

Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        name: 'Landing',
        component: Landing
    }, {
        path: '/subscribe',
        name: 'Subscribe',
        component: Subscribe
    }, {
        path: '/login',
        name: 'Login',
        component: Login
    }, {
        path: '/meet/:id',
        name: 'Meet',
        component: Meet
    }]
})