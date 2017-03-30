import Vue from 'vue'
import Router from 'vue-router'
import Landing from '@/components/Landing'
import Meet from '@/components/Meet'

Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        name: 'Landing',
        component: Landing
    }, {
        path: '/meet',
        name: 'Meet',
        component: Meet
    }]
})