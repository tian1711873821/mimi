// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// import $ from 'jquery'
// import '../src/assets/bootstrap/js/bootstrap.min.js'
// import '../src/assets/bootstrap/css/bootstrap.min.css'
// import Vueresource from 'vue-resource'

//图片懒加载
import VueLazyLoad from 'vue-lazyload'
Vue.use(VueLazyLoad,{
  loading:"/static/loading-svg/loading-bars.svg"
})


import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.prototype.axios = axios;
Vue.use(VueAxios, axios);


Vue.config.productionTip = false
// Vue.use(Vueresource)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
