import Vue from 'vue'
import App from './App.vue'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import VueRouter from "vue-router";
import Routes from "./Routes"

Vue.config.productionTip = false

Vue.use(VueRouter)

const router = new VueRouter({
  routes: Routes,
  //Pour enlever le # qui est au milieu des routes
  //le # est la pour montrer qu'on ne recharge pas les pages depuis le serveur
  mode: 'history'
})

export const bus = new Vue();

new Vue({
  render: h => h(App),
  router: router
}).$mount('#app')
