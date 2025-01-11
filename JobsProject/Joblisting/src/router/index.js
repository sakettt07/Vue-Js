import HomeView from "@/views/HomeView.vue";
import {createRouter,createWebHistory} from "vue-router";
import JobView from "@/views/JobView.vue";
import NotFoundView from "@/views/NotFoundView.vue";
import SingleJobView from "@/views/SingleJobView.vue";

const router=createRouter({
    history:createWebHistory(import.meta.env.BASE_URL),
    routes:[
        {
            path:'/',
            name:'home',
            component:HomeView,
        },
        {
            path:'/jobs',
            name:'jobs',
            component:JobView,
        },
        {
            path:'/:catchAll(.*)',
            name:'not-found',
            component:NotFoundView,
        },
        {
            path:'/jobs/:id',
            name:'jobpage',
            component:SingleJobView,
        },
        
    ],
})
export default router;