import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import PrimeVue from 'primevue/config';

import 'primevue/resources/themes/saga-blue/theme.css'; //theme
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';
const app = createApp(App);

app.use(PrimeVue);
app.use(router).mount("#app");