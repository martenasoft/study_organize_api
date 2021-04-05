import Vue from 'vue';
import VueRouter from 'vue-router';
import VueBodyClass from 'vue-body-class';
import Login from "../components/Login";
import Timeline from "../components/Timeline";
import Calendar from "../components/Calendar";
import store from "./../store";
import Registration from "./../components/Registration"

Vue.use(VueRouter);

const routes = [
    {
        name: 'Registration',
        path: '/registration',
        component: Registration,
        meta: { bodyClass: 'login-layout' }
    },
    {
        name: 'Login',
        path: '/user-login',
        component: Login,
        meta: { bodyClass: 'login-layout' }
    },
    {
        name: 'Timeline',
        path: '/timeline',
        component: Timeline
    },
    {
        name: 'FullCalendar',
        path: '/calendar',
        component: Calendar
    }
];
const router = new VueRouter({
    routes
});
const vueBodyClass = new VueBodyClass(routes);
router.beforeEach((to, from, next) => {
    vueBodyClass.guard(to, next);
  //  const user = store.getters;
    const notRedirect = ["Registration", "Login"];


    console.log(
        notRedirect.includes(router.currentRoute),
        notRedirect.includes(from.name)
    );

    if (user === null && (!notRedirect.includes(router.currentRoute.name) && !notRedirect.includes(from.name))) {
      //  next({name: 'Login'});
    }

    //console.log(store.getters.getUserToken)

   // console.log(router.currentRoute)
    //console.log(router.currentRoute)
 //   console.log(user === null , from.name, notRedirect.find(from.name) );
   // if (user === null && from.name != "Registration" && from.name != "Login") {
       // next({name: 'Login'})
    //}
});

export default router;
