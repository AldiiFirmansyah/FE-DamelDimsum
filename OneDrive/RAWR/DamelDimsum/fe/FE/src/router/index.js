import Home from "@/pages/Home.vue";
import Menu from "@/pages/Menu.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
    { path: "/", component: Home },
    { path: "/menu", component: Menu },
]

export default createRouter({
    history: createWebHistory(),
    routes,
})