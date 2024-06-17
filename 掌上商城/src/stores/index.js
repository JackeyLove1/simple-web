import { ref, computed } from 'vue'
import {createPinia, defineStore} from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

export const piniaInstance = createPinia()

piniaInstance.use(piniaPluginPersistedstate)
