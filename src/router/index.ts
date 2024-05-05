import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "home",
            component: () => import("@/views/Home.vue"),
        },
        {
            path: '/heart',
            name: "HPC",
            component: () => import('@/views/Heart.vue')
        },
        {
            path: '/ospc',
            name: "OSPC",
            component: () => import('@/views/OSPC.vue')
        },
        {
            path: '/cheese-twist',
            name: "Cheese Twist",
            component: () => import('@/views/CheeseTwist.vue')
        },
        {
            path: '/pills-guide',
            name: "Pill's Tetris Guide",
            component: () => import('@/views/Pill.vue')
        },
        {
            path: '/hes-him',
            redirect: '/pills-guide'
        },
        {
            path: '/:catchAll(.*)',
            name: "Not Found",
            component: () => import('@/views/404.vue')
        }
    ],
});

export default router;
