<template>
  <v-row id="my-services" class="mt-3">
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
        title: "Frontend development",
        description:
          "I am an expert in front-end languages such as HTML, CSS/SCSS, Bootstrap, JavaScript, Vue.js, Node.js and React.js. I focus on using technologies that not only make your solutions attractive, but also enhance its performance. I make sure that your websites, applications and products have a user-friendly UI/UX.",
      },
      {
        title: "Backend Development",
        description:
          "I am proficient in handling applications that run on servers like applications and APIs. I build websites that function seamlessly and fulfill the expectations of your customers. I use programming languages and frameworks like PHP, SQL, Java, Node.js and Laravel.",
      },
      {
        title: "API development and integration",
        description:
          "I have immense experience in providing custom web API and integration services. I offer entire web API development services that help in the smooth and seamless functioning of your solutions. And if you require, Ii will build custom APIs for you to be used by external applications without any hindrances. I execute integrations for your payment systems, social networks, business tools, etc.",
      },
      {
        title: "UI/UX Design",
        description:
          "I can craft all the possible web experiences with pixel-perfect UI/UX designs that you can imagine. I build full stack web applications, Mobile applications, web portals, etc.",
      },
      {
        title: "migration, support and maintenance",
        description:
          "I help you migrate from old systems or upgrading slow systems to more intuitive and elegant designs and performance with end to end support for modernizing and uplifting your apps.",
      },
    ],
  }),
  mounted() {
    this.gsap.fromTo(
      "#expansionPanel",
      { opacity: 0, x: 200 },
      {
        duration: 2,
        x: 0,
        opacity: 1,
        ease: "slow",
        stagger: {
          each: 0.5,
        },
        scrollTrigger: {
          trigger: "#my-services",
        },
      }
    );
  },
};
</script>
