import Vue from 'vue'
import VueI18n from 'vue-i18n'

import App from './App.vue'

Vue.config.debug = true;

Vue.use(VueI18n);
Vue.config.lang = 'en-US';


new Vue({
    el: 'body',
    components: {
        App
    }
});
