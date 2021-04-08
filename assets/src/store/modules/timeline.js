import Vue from "vue";

export default {
    actions: {
        async fetch(ctx) {
            const res = await fetch(
                "/api/calendars/",
                {
                    headers: {
                        "accept" : "application/json",
                        "Content-Type": "application/json",
                        "Authorization" : 'Bearer '+Vue.$cookies.get('token')
                    },
                }
            );
            const data = await res.json();
            ctx.commit('update', data);
        }
    },
    mutations: {
        update(state, data) {
            state.data = data;
        }
    },
    state: {
        data: []
    },
    getters: {
        items(state) {
            return state.data;
        }
    },
}