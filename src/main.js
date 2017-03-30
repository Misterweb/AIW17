window.jQuery = window.$ = require('jquery');
require('materialize-css/dist/css/materialize.min.css');
require('materialize-css/dist/js/materialize.min.js');

// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Materials from 'vue-materials'
import globals from './libs/globals'

Vue.config.productionTip = false
Vue.use(Materials);

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    template: '<App/>',
    components: { App }
})