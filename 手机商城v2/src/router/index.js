import {createMemoryHistory, createRouter, createWebHashHistory} from 'vue-router'


const routes = [
    {
        path: '/',
        component: () => import('@/view/layout/index.vue'),
        children: [
            {
                path: '',
                component: () => import('@/view/layout/home.vue')
            },
            {
                path: '/home',
                component: () => import('@/view/layout/home.vue')
            },
            {
                path: '/category',
                component: () => import('@/view/layout/category.vue')
            },
            {
                path: '/cart',
                component: () => import('@/view/layout/cart.vue')
            },
            {
                path: '/user',
                component: () => import('@/view/layout/user.vue')
            },
        ]
    },
    {
        path: '/search',
        component: () => import('@/view/search/index.vue')
    },
    {
        path: '/login',
        component: () => import('@/view/login/index.vue')
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router