import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import router from './router/router';
import { createPinia } from 'pinia';
import PrimeVue from 'primevue/config';
import 'animate.css';

const app = createApp(App);
const pinia = createPinia();

app.use(pinia);
app.use(PrimeVue);
app.use(router);
app.mount('#app');
