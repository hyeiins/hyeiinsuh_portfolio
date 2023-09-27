import { createApp } from 'vue'
import router from './router'

// set up vuetify with theme and icons
// Vuetify
import "vuetify/styles";
import { createVuetify } from "vuetify"
import * as components from "vuetify/components"
import * as directives from "vuetify/directives"
// Vuetify icons
import { aliases, fa } from 'vuetify/iconsets/fa'
import {mdi} from "vuetify/lib/iconsets/mdi" 
import '@mdi/font/css/materialdesignicons.css'
import '@fortawesome/fontawesome-free/css/all.css'

import App from './App.vue'

const vuetify = createVuetify({
    components,
    directives,
    icons: {
        defaultSet: 'fa',
        aliases,
        sets: {
            mdi,
            fa
        }
    }
});

createApp(App).use(router).use(vuetify).mount('#app')
