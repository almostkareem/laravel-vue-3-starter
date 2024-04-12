import './bootstrap';
import { createApp } from 'vue'

import.meta.glob([
    '../images/**',
    '../fonts/**',
]);

window.createApp = createApp;

import HomeVue from './Home.js'

window.vueMachines = {
    home: HomeVue,
};