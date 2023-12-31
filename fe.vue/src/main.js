import Vue from "vue";
import VueRouter from "vue-router";
import router from "./router";
import store from "./store";
import App from "./App.vue";
import "@/assets/reset.css";
import "@/assets/preset.css";
import "./axios"

Vue.config.productionTip = false;
Vue.use(VueRouter);

new Vue({
    render: (h) => h(App),
    router,
    store,
}).$mount("#app");
