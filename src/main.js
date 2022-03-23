import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import vuetify from "./plugins/vuetify";
import LottieAnimation from "lottie-web-vue";

import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

ScrollTrigger.defaults({
  toggleActions: "restart pause resume none",
});

gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.matchMedia({
  "(max-width: 600px)": function () {
    ScrollTrigger.kill();
  },
});

Vue.config.productionTip = false;
Vue.use(LottieAnimation);

Vue.mixin({
  created() {
    this.gsap = gsap;
  },
});

new Vue({
  router,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
