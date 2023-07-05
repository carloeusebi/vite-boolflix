import { createApp } from 'vue'
import './assets/sass/index.scss'
import App from './App.vue';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { faStar as sStar } from '@fortawesome/free-solid-svg-icons'
import { faStar as rStar } from '@fortawesome/free-regular-svg-icons'

library.add(sStar, rStar);


const app = createApp(App)
    .component('font-awesome-icon', FontAwesomeIcon);

app.mount('#app')