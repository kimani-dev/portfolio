<template>
  <v-app>
    <v-app-bar
      v-if="$vuetify.breakpoint.xs"
      app
      dark
      color="transparent"
      flat
      scroll-off-screen
    >
      <v-icon large @click="drawer = !drawer" color="primary">mdi-menu</v-icon>
    </v-app-bar>
    <v-fab-transition>
      <v-btn
        fab
        bottom
        right
        fixed
        color="primary"
        @click="$vuetify.goTo(0)"
        v-show="top"
        v-scroll="onScroll"
      >
        <v-icon> mdi-chevron-up </v-icon>
      </v-btn>
    </v-fab-transition>
    <v-navigation-drawer app dark v-model="drawer">
      <p
        class="display-2 text-uppercase text-center primary--text font-weight-bold"
      >
        dk
      </p>
      <p
        class="white--text text-h5 text-capitalize text-center fonr-weight-bold"
      >
        david kimani
      </p>
      <p
        class="white--text text-subtitle-1 text-uppercase font-weight-light text-center"
      >
        front-end developer
      </p>

      <v-divider></v-divider>

      <div class="mt-4 d-flex flex-column align-center">
        <v-btn
          class="text-capitalize mt-2"
          ripple
          id="navButton"
          tile
          text
          active-class="primary--text"
          :to="`#${i.section}`"
          v-for="(i, index) in buttons"
          :key="index"
          >{{ i.text }}</v-btn
        >
      </div>

      <template v-slot:append>
        <div class="pa-2 d-flex justify-center">
          <v-btn icon href="https://github.com/wathamiwakimani" target="blank">
            <v-icon> mdi-github </v-icon>
          </v-btn>
          <v-btn icon href="https://linkedin.com/in/davidkimani" target="blank">
            <v-icon> mdi-linkedin </v-icon>
          </v-btn>
          <v-btn icon href="https://ithewakimani.xyz" target="blank">
            <v-icon> mdi-web </v-icon>
          </v-btn>
        </div>
      </template>
    </v-navigation-drawer>
    <v-main>
      <router-view />
    </v-main>
    <v-footer app absolute inset dark>
      <p class="mx-auto">
        David Kimani &copy;{{ new Date().getFullYear() }}. All Rights Reserved.
      </p>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    top: null,
    buttons: [
      {
        text: "about me",
        section: "about-me",
      },
      {
        text: "services",
        section: "my-services",
      },
      {
        text: "experience",
        section: "my-experience",
      },
      {
        text: "skills and education",
        section: "skills-education",
      },
      {
        text: "portfolio",
        section: "my-portfolio",
      },
      {
        text: "contact",
        section: "contact-me",
      },
    ],
    drawer: false,
  }),
  methods: {
    onScroll(e) {
      if (typeof window === "undefined") return;
      const top = window.pageYOffset || e.target.scrollTop || 0;
      this.top = top > 20;
    },
  },
  created() {
    this.$watch(
      () => this.$route.hash,
      (to) => this.$vuetify.goTo(to)
    );
  },
  mounted() {
    if (!this.$vuetify.breakpoint.xs) {
      this.drawer = true;
    }

    this.gsap.from("#navButton", {
      duration: 0.5,
      opacity: 0,
      scale: 0,
      y: 200,
      ease: "power1",
      stagger: {
        each: 0.1,
        from: "edges",
      },
    });
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap");
#app {
  font-family: "Montserrat Alternates", sans-serif;
  background-color: #303030;
}
</style>
