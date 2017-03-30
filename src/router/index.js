import Vue from 'vue'
import Router from 'vue-router'
import Landing from '@/components/Landing'
import Meet from '@/components/Meet'
import Subscribe from '@/components/Subscribe'

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
        path: '/meet',
        name: 'Meet',
        component: Meet
    }]
})