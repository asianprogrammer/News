/**
* @description: This is router code for all pages
* @author Parvez Ahmed
* @date 2023-06-22 19:53:17
* @version 1.0 
*
* Change Logs:
* Date    2023-06-22 19:55:16      Author  Parvez: Ahmed     Notes: No Reload Single page application no multiples news post
*
*/

import {createRouter, createWebHistory} from "vue-router";
import AdminPanel from "../views/Admin.vue";
import PostPage from "../views/PostPage.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            name: "Home",
            path: "/",
        },
        {
            name: "News",
            path: "/news/:post",
            component: PostPage,
            props: true
        },
        {
            name: "Admin",
            path: "/admin",
            component: AdminPanel
        }
    ]
})

export default router;