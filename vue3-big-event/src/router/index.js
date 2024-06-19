import {createRouter, createWebHistory, createWebHashHistory} from 'vue-router'

const router = createRouter({
    history: createWebHashHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            component: () => import('@/views/layout/LayoutContainer.vue'),
            children: [
                {
                    path: '',
                    component: () => import('@/views/login/LoginPage.vue')
                }
            ]
        },
        {
            path: '/login',
            component: () => import('@/views/login/LoginPage.vue')
        }
    ]
})

export default router
