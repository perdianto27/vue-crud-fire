import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'jquery';
import 'bootstrap'
import 'popper.js'
import './assets/app.scss'
import { ClientTable, Event } from 'vue-tables-2';
import Swal from 'sweetalert2';

window.Swal = Swal;
Vue.use(Event);
Vue.use(ClientTable, {}, false, 'bootstrap4');
window.$ = window.jQuery = require('jquery');
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
