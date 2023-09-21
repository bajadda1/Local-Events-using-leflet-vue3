import { createApp } from 'vue'
import './style.css'

import App from './App.vue'

import home from "./views/home.vue";

import Search from "./views/search.vue";

import create from "./views/create.vue";

import about from "./views/about.vue";

import signup from "./views/signup.vue";

import login from "./views/login.vue";

import logout from "./views/logout.vue";





import {createRouter, createWebHashHistory} from "vue-router";

import {store} from "./store.js";


import {library} from '@fortawesome/fontawesome-svg-core'
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'
import {faEnvelope, faCog, faGlobe, faServer, faKey, faSearch, faWrench, faCommentDollar, faHandsHelping, faChartBar, faExclamationTriangle, faLandmark, faUserCheck,fas} from '@fortawesome/free-solid-svg-icons'


library.add(faEnvelope, faCog, faGlobe, faServer, faKey, faSearch, faWrench, faCommentDollar, faHandsHelping, faChartBar, faExclamationTriangle, faLandmark, faUserCheck,fas);


const routes = [
    { path: '/', component: home },
    {path: '/create', component:create },
    {path: '/search', component:Search},
    {path: '/about', component:about},
    { path: '/login', component:login },
    { path: '/logout', component:logout },
    { path: '/signup', component:signup },
]
//---------------------------------------------------------------------------------API
//-------------------------------------------------------------------------------------
const router = createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: createWebHashHistory(),
    routes, // short for `routes: routes`
})
createApp(App).use(router).use(store).component('font-awesome-icon', FontAwesomeIcon).mount("#app")







