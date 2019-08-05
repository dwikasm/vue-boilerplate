import Vue from 'vue'
import App from './App.vue'
import router from './vue-commons/router'
import store from './vue-commons/store'

import './vue-commons/mixins'
import './vue-commons/filters'

import './assets/scss/main.scss'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
