import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import http from './tools/http'
import './mock'

let app = createApp(App)

app.config.globalProperties.$http = http

app.use(store)
app.use(router)

app.mount('#app')
