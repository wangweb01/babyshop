import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import vuex from 'vuex'

Vue.use(vuex);
var store = new vuex.Store({});

Vue.config.productionTip = false;

axios.defaults.withCredentials = true;
Vue.prototype.axios = axios;

new Vue({
    router,
    render: h => h(App),
    store
}).$mount('#app');
