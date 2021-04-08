import Vue from 'vue';
import Vuex from 'vuex';

import userSore from "./modules/userSore";
import calendar from "./modules/calendar";
import timeline from "./modules/timeline";

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        timeline,
        userSore,
        calendar
    }
});