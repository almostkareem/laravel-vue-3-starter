import './bootstrap';

import { createApp } from 'vue'

window.createApp = createApp;


import HomeVue from './Home.js'

window.vueMachines = {
    home: HomeVue,
};