import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Toaster from "@meforma/vue-toaster";
import './assets/tailwind.css'

const options = {
    position: 'top-right',
    duration: 2500
}

createApp(App).use(store).use(router).use(Toaster, options).mount('#app')
