import Vue from 'vue'
import Router from 'vue-router'
// import myHeader from '../components/Header'
import Goodslist from '../views/Goodslist'
// import mytext from '../components/mytext'

Vue.use(Router)

export default new Router({
  routes: [
    // {path: '/', component: myHeader},
    {path: '/', component: Goodslist}
  ]
})
