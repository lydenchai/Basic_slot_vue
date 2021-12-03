import { createApp } from "vue";
import App from "./App.vue";
import Card from "./components/UI/Card.vue";
import Navbar from "./components/navbar/Navbar.vue";
import router from './router';

const app = createApp(App);

app.component("card", Card);
app.component("navbar", Navbar);

app.use(router);
app.mount("#app");
