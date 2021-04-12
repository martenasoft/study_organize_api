import config from "../../config";
import Vue from "vue";

export default {
    actions: {
        async fetchItems(ctx, successCallback) {

            const res = await fetch(
                "/api/calendars",
                {
                    "order[start]": "desc",
                    headers: {
                        "accept" : "application/json",
                        "Content-Type": "application/json",
                        "Authorization" : 'Bearer '+Vue.$cookies.get('token')
                    },
                }
            );
            const items = await res.json();
            successCallback(items);
            ctx.commit('updateItems', items);
        },
        async fetchItem(ctx, name) {
            const res = await fetch(
                "/api/calendars/"
            );
            const posts = await res.json();
            console.log(posts)
            ctx.commit('calendarItems', posts);
        },

        async submitItem(ctx) {
            const requestOptions = {
                method: "POST",
                headers: {
                    "accept" : "application/json",
                    "Content-Type": "application/json",
                    "Authorization" : 'Bearer '+Vue.$cookies.get('token')
                    //    "Access-Control-Allow-Origin" : "https://study-theme-symfony.wip"
                },
                body: JSON.stringify({
                    title: ctx.getters.calendarItem.title,
                    start: ctx.getters.calendarItem.start,
                    end: ctx.getters.calendarItem.end,
                    about: ctx.getters.calendarItem.about,
                })
            };

            const response = await fetch(config.baseUrl + '/api/calendars', requestOptions);

            // ctx.state.item.obj.event.setEnd('2021-04-30')
        //    console.log(ctx.store.item.start);
        }
    },
    mutations: {
        updateItems(state, items) {
            state.items = items;
        },
        updateItem(state, item) {
            state.item = item;
        },

    },
    state: {
        items: [],
        item: {
            id: null,
            title: null,
            start: null,
            end: null,
            about: null,
            obj: null
        }
    },
    getters: {
        calendarItems(state) {
            return state.items;
        },

        calendarItem(state) {

            const dateFormat = function(date) {

                if (date === null) {
                    return null;
                }
                const d = date.getDate();
                const m = date.getMonth()+1;
                const y = date.getFullYear();
                return  y+'-'+(m < 10 ? '0' : '')+m+'-'+(d<10 ? '0':'')+d;
            }

        //    console.log(dateFormat(state.item.start))

            state.item.start = dateFormat(state.item.start);
            state.item.end = dateFormat(state.item.end);



            return state.item;
        }
    },
}