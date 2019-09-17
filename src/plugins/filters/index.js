/**
 * import and init global filters
 */

import Vue from 'vue';

import currencyFormat from './currencyFormat';

Vue.filter('currencyFormat', currencyFormat);
