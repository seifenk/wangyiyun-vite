import { createRouter, createWebHistory } from 'vue-router'


const routes = [
    {
        path: "/",
        name: "home",
        component: () => import("../views/Home.vue"),
    },
    {
        path: "/itemMusic",
        name: "itemMusic",
        component: () => import("../views/ItemMusic.vue"),
    },
    {
        path: "/search",
        name: "search",
        component: () => import("../views/SearchPage.vue"),
    },
    {
        path: "/me",

        component: () => import("../views/Me.vue"),

    }
];

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
