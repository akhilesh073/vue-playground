import { createRouter, createWebHistory } from "vue-router";

import About from '../views/About';
import Home from '../views/Home';

const routes = [{
    path: '/',
    name: 'HomeComp',
    component: Home
},{
    path: '/about',
    name: 'AboutComp',
    component: About
}];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});

export default router;