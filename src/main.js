import { createApp } from 'vue'
import App from './App.vue'
import"bootstrap";
import"bootstrap/dist/css/bootstrap.min.css"

import router from './router'


// Vue.component('font-awesome-icon', FontAwesomeIcon);

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'


library.add(fas,far,fab)


const app=createApp(App)
app.component('font-awesome-icon', FontAwesomeIcon)
app.use(router)
app.mount('#app')

// createApp(App).mount('#app')
