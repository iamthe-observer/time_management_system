import { createApp } from 'vue'
import './style.css'
import 'v-calendar/dist/style.css'
import App from './App.vue'
import router from './router/router'
import { createPinia } from 'pinia'
import PrimeVue from 'primevue/config'
import 'animate.css'
import VCalendar from 'v-calendar'

// const app = createApp(App)
// const pinia = createPinia()
// app.use(pinia)
// app.use(VCalendar, {})
// app.use(PrimeVue)
// app.use(router)
// app.mount('#app')
createApp(App)
  .use(createPinia())
  .use(VCalendar, {})
  .use(PrimeVue)
  .use(router)
  .mount('#app')
