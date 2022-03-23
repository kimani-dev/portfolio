<template>
  <v-row id="my-services">
    <v-col>
      <h1 class="primary--text display-2">What I can do for you.</h1>

      <v-expansion-panels popout mandatory class="mt-3" dark>
        <v-expansion-panel
          v-for="(service, i) in services"
          :key="i"
          id="expansionPanel"
        >
          <v-expansion-panel-header class="text-capitalize">
            <div>
              <v-icon left color="primary">mdi-circle-small</v-icon>
              {{ service.title }}
            </div>
            <template v-slot:actions>
              <v-icon color="primary"> mdi-chevron-down </v-icon>
            </template>
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            {{ service.description }}
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "my-services",
  data: () => ({
    services: [
      {
        title: "custom web app development",
        description:
          "Fueling the interactivity and expressions into web portals via a customized approach using clean code and great usability.",
      },
      {
        title: "UI-UX Design",
        description:
          "Creating fluid and user-focused UI-UX designs to help you navigate every aspect of digital landscape offering intuitive, responsive and fully functional products that boost your brand value.",
      },
      {
        title: "vue js development",
        description:
          "Delivering vue projects with UI libraries such a Vuetify from scratch to production offering scalable and stable products.",
      },
      {
        title: "API development and integration",
        description:
          "Powerful, secure and easily maintained APIs using the latest represantational state transfer (REST) architecture. Includes integration of products with existing APIs such as Stripe.",
      },
      {
        title: "migration, support and maintenance",
        description:
          "Migrating from old systems or upgrading slow systems to more intuitive and elegant designs and performance with end to end support for modernizing and uplifting your apps.",
      },
    ],
  }),
  mounted() {
    this.gsap.fromTo(
      "#expansionPanel",
      { rotation: 30, opacity: 0 },
      {
        duration: 2,
        rotation: 0,
        scale: 1,
        opacity: 1,
        ease: "power",
        stagger: {
          each: 0.2,
          from: "center",
        },
        scrollTrigger: {
          trigger: "#my-services",
          start: "top 400px",
        },
      }
    );
  },
};
</script>
