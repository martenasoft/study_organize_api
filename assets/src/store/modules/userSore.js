import Vue from 'vue';
import config from './../../config';

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
        async userLogin({commit, state}) {

            const requestOptions = {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    //    "Access-Control-Allow-Origin" : "https://study-theme-symfony.wip"
                },
                body: JSON.stringify({
                    username: state.loginData.username,
                    password: state.loginData.password
                })
            };

            const response = await fetch(config.baseUrl + '/api/login_check', requestOptions)
                .then(response => response.json());
        },
        async fetchUser(ctx) {

            const requestOptions = {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization" : 'Bearer ' + Vue.$cookies.get('token')
                }
            };

            const response = await fetch(config.baseUrl + '/api/get-user', requestOptions);

            const user = await response.json();
            ctx.commit('updateUser', user);

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
