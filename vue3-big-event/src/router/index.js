import {createRouter, createWebHistory, createWebHashHistory} from 'vue-router'
import {useUserStore} from "@/stores/index.js";

const router = createRouter({
    history: createWebHashHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            component: () => import('@/views/layout/LayoutContainer.vue'),
            redirect: '/article/manage',
            children: [
                {
                    path: '/article/manage',
                    component: () => import('@/views/article/ArticleManage.vue')
                },
                {
                    path: '/article/channel',
                    component: () => import('@/views/article/ArticleChannel.vue'),
                },
                {
                    path: '/user/profile',
                    component: () => import('@/views/user/UserProfile.vue')
                },
                {
                    path: '/user/avatar',
                    component: () => import('@/views/user/UserAvatar.vue')
                },
                {
                    path: '/user/password',
                    component: () => import('@/views/user/UserPassword.vue')
                },
                {
                    path: '/test',
                    component: () => import('@/views/test/Test.vue')
                }
            ]
        },
        {
            path: '/login',
            component: () => import('@/views/login/LoginPage.vue')
        }
    ]
})

router.beforeEach((to, from, next) => {
    const token = useUserStore().token
    if (token && to.path !== '/login') {
        next()
    } else {
        next('/login')
    }
})
export default router
