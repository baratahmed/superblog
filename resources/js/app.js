require('./bootstrap');
window.Vue = require('vue');
//import Vue from 'vue'
import VueRouter from 'vue-router'
import Swal from 'sweetalert2'

Vue.use(VueRouter)
import {routes} from './routes'

//Vue.component('example-component', require('./components/ExampleComponent.vue').default);
//Vue.component('home', require('./components/admin/AdminHome.vue').default);
Vue.component('admin-main', require('./components/admin/AdminMaster.vue').default);

//V-form
import { 
	Form,
  HasError,
  AlertError,
  AlertErrors, 
  AlertSuccess
} from 'vform'

const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  onOpen: (toast) => {
    toast.addEventListener('mouseenter', Swal.stopTimer)
    toast.addEventListener('mouseleave', Swal.resumeTimer)
  }
})

window.Form = Form;
window.Swal = Swal;
window.Toast = Toast;
const router = new VueRouter({
  routes, // short for `routes: routes`
  mode: 'history',
})


const app = new Vue({
    el: '#app',
    router
});
