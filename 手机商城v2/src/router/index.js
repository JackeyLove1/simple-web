import {createRouter, createWebHashHistory} from 'vue-router'
import {useUserStore} from "@/stores/modules/user.js";


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
    },
    {
        path: '/prodetail/:id',
        component: () => import('@/view/prodetail/index.vue')
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})


const authUrls = ['/pay', '/myorder']
router.beforeEach((to, from, next) => {
    if (!authUrls.includes(to.path)) {
        next();
        return;
    }
    const userStore = useUserStore()
    const token = userStore.getUserInfo()?.token
    if (token) {
        next();
    } else {
        next('/login');
    }
})

export default router