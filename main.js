import Vue from 'vue';
import VueRouter from 'vue-router';
import Framework7 from 'framework7/framework7.esm.bundle.js';
import Framework7Vue from 'framework7-vue/framework7-vue.esm.bundle.js'; 
window.Event = new Vue();  
Vue.use(VueRouter);
Framework7.use(Framework7Vue);

window.axios = require('axios'); 

import store from './store';

import Api from './api.js';
 
window.api = new Api();  
 
import MarqueeText from 'vue-marquee-text-component';

Vue.component('marquee-text', MarqueeText);

import 'framework7/css/framework7.bundle.min.css';
import './assets/sass/app.scss';

import routes from './routes';
import app from './screens/app.vue';

import JwPagination from 'jw-vue-pagination';
Vue.component('jw-pagination', JwPagination);
export default new Vue({
  store,
  data() {
    return {
      app: {
        name: process.env.VUE_APP_TITLE,
        id: 'com.wpapp',
        routes: routes
      },
    }
  },
  render: h => h(app),
}).$mount('#app');
