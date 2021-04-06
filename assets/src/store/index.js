import Vue from 'vue';
import Vuex from 'vuex';

import userSore from "./modules/userSore";
import calendar from "./modules/calendar";

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        userSore,
        calendar
    }
});