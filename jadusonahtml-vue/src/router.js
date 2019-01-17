import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

import SingleProduct from './views/SingleProduct'
import Index from './views/Index'
import LoginRegister from './views/LoginRegister'
import Shop from './views/Shop'
import NotFound from './views/NotFound'

Vue.use(Router);

export default new Router({
    // mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        /*
                {
                    path: '/',
                    name: 'home',
                    component: Home
                },
                {
                    path: '/about',
                    name: 'about',
                    // route level code-splitting
                    // this generates a separate chunk (about.[hash].js) for this route
                    // which is lazy-loaded when the route is visited.
                    component: () => import(/!* webpackChunkName: "about" *!/ './views/About.vue')
                }
        */
        {
            path: '/',
            component: Home,
            children: [
                {path: '/', component: Index},
                {path: '/index', component: Index},
                {path: '/single-product/:pid', component: SingleProduct, props: true},
                {path: '/shop/:kw', component: Shop, props: true}
            ]
        },
        {
            path: '/login-register',
            component: LoginRegister
        },
        {path: '/*', component: NotFound}
    ]
})
