import Vue from 'vue';
import config from './../../config';
import router from "../../router";

export default {
    actions: {
        async userRegistration(ctx/*{commit, state}*/) {

            const requestOptions = {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    //    "Access-Control-Allow-Origin" : "https://study-theme-symfony.wip"
                },
                body: JSON.stringify({
                    email: ctx.getters.registerData.email,
                    password: ctx.getters.registerData.password,
                    plainPassword: ctx.getters.registerData.plainPassword
                })
            };

            const response = await fetch(config.baseUrl + '/register', requestOptions);

            const posts = await response.json();
            Vue.$cookies.set('token', posts.token);
        },
        async userLogin(ctx) {

            const requestOptions = {
                method: "POST",
                headers: {
                    "accept" : "application/json",
                    "Content-Type": "application/json",
                    //    "Access-Control-Allow-Origin" : "https://study-theme-symfony.wip"
                },
                body: JSON.stringify({
                    username: ctx.getters.loginData.username,
                    password: ctx.getters.loginData.password
                })
            };

            const response = await fetch(config.baseUrl + '/api/login_check', requestOptions);
            const user = await response.json();
            Vue.$cookies.set('token', user.token);
            ctx.commit('setUserToken', user.token);

            if (user.token !== null) {
                await ctx.getters.fetchUser;
                router.push('/')
            }
        },

    },
    mutations: {

        setUserToken(state, userToken) {
            state.userToken = userToken;
        },
        updateUser(state, user) {
            state.user = user;
        },
        updateLoginData(state, loginData) {
            state.loginData = loginData;
        },
        updateRegisterData(state, registerData) {
            state.registerData = registerData;
        }
    },
    state: {
        userToken: null,
        //user: {id: 1}
        user: null,
        registerData: {
            email: 'user11@user.com',
            password: "123123",
            plainPassword: "123123",
        },
        loginData: {
            username: 'user11@user.com',
            password: '123123'
        }

    },

    getters: {

        async fetchUser(state) {

            const requestOptions = {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization" : 'Bearer ' + Vue.$cookies.get('token')
                }
            };

            const response = await fetch(config.baseUrl + '/api/get-user', requestOptions);
            const user = await response.json();

            state.user = user;

        },

        getUserToken(state) {
            const token =  state.userToken;
            return token === null ? Vue.$cookies.get('token') : token;
        },
        registerData(state) {
            return state.registerData;
        },
        loginData(state) {
            return state.loginData;
        },
        user(state) {
            return state.user;
        }
    },
}
