/**
* @description: This is router code for all pages
* @author Parvez Ahmed
* @date 2023-06-22 19:53:17
* @version 1.0 
*
* Change Logs:
* Date: 2023-06-23 19:20:01   Author: Parvez Ahmed     Notes: No Reload Single page application no multiples news post
*
*/

import { createRouter, createWebHistory } from "vue-router";
import AdminPanel from "../views/Admin.vue";
import PostPage from "../views/PostPage.vue";
import AuthPage from "../views/Auth.vue";
import NotFound from "../views/NotFound.vue";
import HomePage from "../views/Home.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            name: "Home",
            path: "/",
            component: HomePage
        },
        {
            name: "News",
            path: "/news/:post",
            component: PostPage,
            props: true
        },
        {
            name: 'Auth',
            path: '/auth',
            component: AuthPage,
        },
        {
            name: "Auth Admin",
            path: "/auth/admin",
            component: AuthPage
        },
        {
            name: "Admin",
            path: "/admin",
            component: AdminPanel
        },
        {
            path: '/:catchAll(.*)',
            component: NotFound
        }
    ]
})

export default router;