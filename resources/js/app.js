import Vue from 'vue'
import VTooltip from 'v-tooltip'

require('./bootstrap');

Vue.use(VTooltip);

import App from './components/App.vue'

const app = new Vue({
    el: '#app',
    components: { App },
    template: "<app/>"
});
