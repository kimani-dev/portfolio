<template>
  <div>
    <v-img
      height="100vh"
      position="bottom center"
      gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,0.9)"
      class="align-center align-sm-end white--text"
      src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=455&q=80"
    >
      <div>
        <v-container>
          <v-row>
            <div class="d-flex flex-column">
              <v-row justify="center" justify-sm="end">
                <h1
                  class="text-uppercase display-3 font-weight-light justify-end mr-4"
                >
                  david kimani
                </h1>
              </v-row>
              <h1
                :class="
                  isMobile
                    ? 'text-uppercase display-3 font-weight-light primary--text text-center'
                    : 'text-uppercase display-4 font-weight-light primary--text text-center'
                "
              >
                front-end developer
              </h1>
            </div>
          </v-row>
          <v-row justify="center">
            <v-col align-self="center" cols="2">
              <v-btn
                color="primary"
                id="downButton"
                v-show="$vuetify.breakpoint.xs"
                x-large
                icon
                ripple
                @click="$vuetify.goTo('#about-me')"
              >
                <v-icon x-large> mdi-chevron-down</v-icon>
              </v-btn>
            </v-col>
          </v-row>
        </v-container>
      </div></v-img
    >

    <v-container>
      <About />
      <Service />
      <Experience />
      <SkillsAndEducation />
      <Portfolio />
      <Contact />
    </v-container>
  </div>
</template>

<script>
import About from "../components/About.vue";
import Service from "../components/Service.vue";
import Experience from "../components/Experience.vue";
import SkillsAndEducation from "@/components/SkillsAndEducation.vue";
import Portfolio from "@/components/Portfolio.vue";
import Contact from "@/components/Contact.vue";

export default {
  name: "HomeView",
  components: {
    About,
    Service,
    Experience,
    SkillsAndEducation,
    Portfolio,
    Contact,
  },
  computed: {
    isMobile() {
      return this.$vuetify.breakpoint.xs;
    },
  },
  mounted() {
    if (this.isMobile) {
      let tl = this.gsap.timeline({ repeat: 5 });
      tl.to("#downButton", {
        y: 40,
        duration: 2,
        ease: "bounce",
      });
    }
  },
};
</script>
