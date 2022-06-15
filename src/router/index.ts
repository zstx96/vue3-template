import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        redirect: 'home',
    },
    {
        path: '/home',
        component: () => import('@/views/home.vue'),
    },
]

export default createRouter({
    routes,
    history: createWebHistory(),
})
