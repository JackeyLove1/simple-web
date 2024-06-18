import { createApp } from 'vue'
import './style.css'
import router from "@/router/index.js";

import App from './App.vue'
import Vant from 'vant'
import {piniaInstance} from "@/stores/index.js";
import 'vant/lib/index.css';
import '@/styles/index.less'

const app = createApp(App)
app.use(router)
app.use(Vant)
app.use(piniaInstance)
app.mount('#app')
