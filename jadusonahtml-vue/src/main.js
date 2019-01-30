import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import vuex from 'vuex'

Vue.use(vuex);
var store = new vuex.Store({
    state: {
        cartCount: 0
    },
    mutations: {
        increment(state, count) {
            state.cartCount += count
        }
    },
    getters: {
        optCartCount: function (state) {
            return state.cartCount
        }
    }
});

Vue.use(ElementUI);

Vue.config.productionTip = false;

axios.defaults.withCredentials = true;
Vue.prototype.axios = axios;

new Vue({
    router,
    render: h => h(App),
    store
}).$mount('#app');
