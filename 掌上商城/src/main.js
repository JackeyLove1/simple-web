import {createApp} from 'vue'
import {piniaInstance} from '@/stores/index.js'

import 'vant/lib/index.css';
import '@/styles/index.css'
import Vant from 'vant'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(piniaInstance)
app.use(router)
app.use(Vant)

app.mount('#app')
