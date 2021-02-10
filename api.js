import Vue from 'vue';
import axios from 'axios'; 
import main from './main'; 
import './assets/style.css';  
Vue.prototype.$axios = axios; 
const moment = require('moment');
require('moment/locale/id');

Vue.use(require('vue-moment'), {
    moment
});
 require('vue2-animate/dist/vue2-animate.min.css');  

class Api {
  constructor() { 
  }

  call(requestType, url, data = null, headers = [], r = false) {
    return new Promise((resolve, reject) => {
      axios[requestType](url, data, headers).then(response => {
        main.$f7.preloader.hide();
        resolve(response);
      }).catch(({ response }) => {
        main.$f7.preloader.hide();
        if (r) {
          reject(response);
        }
      });
    });
  }
} 
window.onoffline = function() {
    alert('Sepertinya koneksi internet anda terganggu');
}

export default Api;