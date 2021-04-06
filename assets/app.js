/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */

// any CSS you import will output into a single css file (app.css in this case)

import './css/bootstrap.min.css';
import './font-awesome/4.5.0/css/font-awesome.min.css';
import './css/fonts.googleapis.com.css';
import './css/ace.min.css';
import './css/ace-skins.min.css';
import './css/ace-rtl.min.css';
import './css/jquery-ui.custom.min.css';
import './css/fullcalendar.min.css';

import './js/bootstrap.min';
import './js/jquery-ui.custom.min';
import './js/jquery.ui.touch-punch.min';

import './js/bootbox';
import './js/jquery.easypiechart.min.js';
import './js/jquery.sparkline.index.min.js';
import './js/jquery.flot.min.js';
import './js/jquery.flot.pie.min.js';
import './js/jquery.flot.resize.min.js';
import './js/ace-elements.min.js';
import './js/ace.min.js';

//import './js/bootstrap-datetimepicker.min.js';
import './js/bootstrap-datepicker.min.js';

import './bootstrap';

import Vue from 'vue';
import VueCookies from 'vue-cookies';
import VueResource from 'vue-resource';

import App from './src/App';
import store from "./src/store";
import router from "./src/router"

Vue.use(VueResource);
Vue.use(VueCookies);
Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: h =>h(App)
}).$mount('#app');
