import './assets/main.css'
import { createApp } from 'vue'
import router from './router'
import App from './App.vue'
import BaseIcon from '@/components/common/BaseIcon.vue'

const app = createApp(App)

app.use(router)
app.component('BaseIcon', BaseIcon)

app.mount('#app')

