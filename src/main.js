import Vue from 'vue'
import App from './App.vue'
import router from './plugins/router'
import store from './plugins/store'

import './plugins/mixins'
import './plugins/filters'
import './plugins/vue-plugins'

import './assets/scss/main.scss'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
