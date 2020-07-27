import Vue from 'vue';
import App from './App.vue';
import './assets/css/app.css';
import '@fortawesome/fontawesome-free/js/all.js';

Vue.config.productionTip = false;

new Vue({
    render: h => h(App),
}).$mount('#app')
