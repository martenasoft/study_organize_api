export default {
    actions: {
        async fetchItem(ctx, name) {
            console.log(name)
            const res = await fetch(
                "https://jsonplaceholder.typicode.com/posts?_limit=3"
            );
            const posts = await res.json();
            ctx.commit('updatePosts', posts);
        }
    },
    mutations: {
        updateItem(state, item) {
            state.item = item;
        },

    },
    state: {
        item: {
            title: null,
            start: null,
            end: null,
            about: null
        }
    },
    getters: {
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