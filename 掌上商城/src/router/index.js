import {createRouter, createWebHistory} from 'vue-router'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            component: () => import("@/views/layout/index.vue"),
            children: [
                {
                    path: '',
                    component: () => import("@/views/layout/home.vue")
                },
                {
                    path: '/home',
                    component: () => import("@/views/layout/home.vue")
                },
                {
                    path: '/category',
                    component: () => import("@/views/layout/category.vue")
                },
                {
                    path: '/cart',
                    component: () => import("@/views/layout/cart.vue")
                },
                {
                    path: 'user',
                    component: () => import("@/views/layout/user.vue")
                }
            ]
        },
        {
            path: "/login",
            component: () => import("@/views/login/index.vue")
        },
        {
            path: '/search',
            component: () => import("@/views/search/index.vue")
        }
    ]
})

export default router
