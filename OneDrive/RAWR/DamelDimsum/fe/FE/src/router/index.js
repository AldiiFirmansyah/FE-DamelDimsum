import Home from "@/pages/Home.vue";
import Login from "@/pages/Login.vue";
import Menu from "@/pages/Menu.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
    { path: "/", component: Home },
    { path: "/menu", component: Menu },
    { path: "/login", component: Login },
]

export default createRouter({
    history: createWebHistory(),
    routes,
})