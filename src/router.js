import Vue from 'vue';
import VueRouter from 'vue-router';
import HelloWorld from './components/HelloWorld';
import Home from './components/Home';
import Player from './components/Player';

Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/player',
            component: Player,
            name: 'player'
        },
        {
            path: '/helloworld',
            component: HelloWorld,
            name: 'helloworld'
        },
        {
            path: '/home',
            component: Home,
            name: 'home'
        },
        {
            path: '/*',
            redirect: '/home'
        }
    ]
});

export default router;