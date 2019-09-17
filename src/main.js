import Vue from 'vue';
import App from './App.vue';

import router from './router';
import store from './store';

import './plugins/mixins';
import './plugins/filters';
// import './plugins/directives';
import './plugins/misc';

import './assets/scss/main.scss';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
