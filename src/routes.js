import {createWebHistory,createRouter} from 'vue-router';
import HomePage from './Component/HomePage.vue';
import LoginPage from './Component/LoginPage.vue';
import ProfilePage from './Component/ProfilePage.vue';
const routes = [
    {
        name: 'Home',
        path: '/',
        component: HomePage
    },{
        name: 'login',
        path:'/login',
        component:LoginPage
    },
    {
        name:'Profile',
        path:"/profile/:name",
        component:ProfilePage
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;