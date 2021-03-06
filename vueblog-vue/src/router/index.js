import Vue from 'vue'
import Login from "@/views/Login";
import Blogs from "@/views/Blogs";
import BlogEdit from "@/views/BlogEdit";
import BlogDetail from "@/views/BlogDetail";
import VueRouter from "vue-router";
import Register from "@/views/Register";
Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Index',
        redirect: {name: "Blogs"}
    },
    {
        path: '/login',
        name: 'Login',
        component: Login
    },
    {
        path: '/register',
        name: 'register',
        component: Register
    },
    {
        path: '/blog/add',
        name: 'BlogAdd',
        component: BlogEdit,
        meta: {
            requireAuth:true
        }
    },

    {
        path: '/blog/:blogId',
        name: 'BlogDetail',
        component: BlogDetail
    },



    {
        path: '/blog/:blogId/edit',
        name: 'BlogEdit',
        component: BlogEdit,
        meta: {
            requireAuth:true
        }
    },
    {
        path: '/blogs',
        name: 'Blogs',
        component: Blogs
    },


]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
