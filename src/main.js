import Vue from 'vue';
import App from './App.vue';
import { firestorePlugin } from 'vuefire';
import VueRouter from 'vue-router';
import VueCompositionApi from '@vue/composition-api';

import './assets/css/app.css';
import '@fortawesome/fontawesome-free/js/all.js';

Vue.use(VueCompositionApi);
Vue.use(VueRouter);
Vue.use(firestorePlugin);

Vue.config.productionTip = false;

import Home from './components/Home';
import ChatRoom from './components/ChatRoom';

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: Home,
            name: 'home'
        },
        {
            path: '/chats/:id',
            component: ChatRoom,
            name: 'chat'
        }
    ]
});

new Vue({
    router,
    render: h => h(App),
}).$mount('#app')
