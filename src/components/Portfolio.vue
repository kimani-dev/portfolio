<template>
  <div id="my-portfolio">
    <v-row>
      <v-col>
        <h1 class="primary--text display-2 font-weight-medium">
          What I've done.
        </h1>

        <v-carousel
          hide-delimiter-background
          :show-arrows="false"
          dark
          v-model="carousel"
        >
          <v-carousel-item
            v-for="(project, n) in projects"
            :key="n"
            id="carouselItem"
          >
            <div class="py-4">
              <div class="text-center headline text-capitalize primary--text">
                {{ project.title }}
              </div>
              <div class="text-center title text-capitalize white--text">
                {{ project.type }}
              </div>

              <v-row>
                <v-col cols="12" sm="6" id="carouselLeft">
                  <div
                    class="title font-weight-light text-capitalize primary--text"
                  >
                    project details
                  </div>

                  <div class="body white--text">
                    {{ project.description }}
                  </div>

                  <div
                    class="title font-weight-light text-capitalize primary--text mt-3"
                  >
                    project info
                  </div>

                  <div>
                    <v-row dense>
                      <v-col cols="10" sm="7" class="d-flex">
                        <p class="white--text text-capitalize">
                          <v-icon left color="primary">mdi-account</v-icon>
                          client name
                        </p>
                        <v-spacer></v-spacer>
                        <p class="text-capitalize white--text">
                          {{ project.owner }}
                        </p>
                      </v-col>
                      <v-col cols="10" sm="7" class="d-flex">
                        <p class="white--text text-capitalize">
                          <v-icon left color="primary">mdi-calendar</v-icon>
                          start date
                        </p>
                        <v-spacer></v-spacer>
                        <p class="text-capitalize white--text">
                          {{ project.start }}
                        </p>
                      </v-col>
                      <v-col cols="10" sm="7" class="d-flex">
                        <p class="white--text text-capitalize">
                          <v-icon left color="primary">mdi-calendar</v-icon>
                          end date
                        </p>
                        <v-spacer></v-spacer>
                        <p class="text-capitalize white--text">
                          {{ project.end }}
                        </p>
                      </v-col>
                      <v-col cols="10">
                        <v-tooltip bottom>
                          <template v-slot:activator="{ on, attrs }">
                            <v-btn
                              color="primary"
                              outlined
                              v-on="on"
                              v-bind="attrs"
                              small
                              :href="project.demo"
                              target="blank"
                              >demo
                              <v-icon right>mdi-chevron-right</v-icon></v-btn
                            >
                          </template>
                          <span class="caption">Some are live!</span>
                        </v-tooltip>
                      </v-col>
                    </v-row>
                  </div>
                </v-col>
                <v-col
                  align-self="center"
                  v-if="!$vuetify.breakpoint.xs"
                  id="carouselRight"
                  sm="6"
                >
                  <v-img
                    contain
                    :src="require(`@/assets/${project.img}.png`)"
                  ></v-img>
                </v-col>
              </v-row>
            </div>
          </v-carousel-item>
        </v-carousel>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "my-portfolio",
  data: () => ({
    carousel: 0,
    projects: [
      {
        title: "E-parliament system",
        type: "Frontend Development",
        description:
          "I did the frontend for a county assembly for managing legistlative documents and procedures with text to speech generated hansards ",
        owner: "county assembly",
        img: "eparliament",
        start: "2022 jan",
        end: "2022 feb",
        demo: "https://eparliament.onrender.com",
      },
      {
        title: "Techify Web App",
        type: "Frontend & Backend Development",
        description: "Created the frontend and backend of Techify Academy",
        owner: "David Kimani",
        img: "techify",
        start: "2022 sep",
        end: "2022 oct",
        demo: "https://techify.academy",
      },
      {
        title: "Company website",
        type: "migration",
        description:
          "Performed modernization of the company website and upgraded the technologies used",
        owner: "nextsense tech",
        img: "nextsense",
        start: "2021 oct",
        end: "2021 oct",
        demo: "https://nextsensetech.com",
      },
      {
        title: "Blog",
        type: "UI design and migration",
        description:
          "Migrated the blog from an old to a more refreshing website with better interactivity shipped with new database structure and APIs",
        owner: "Jambo Chronicles",
        img: "jambochronicles",
        start: "2022 feb",
        end: "2022 feb",
        demo: "https://jambochronicles.com",
      },
    ],
  }),
  mounted() {
    this.gsap.fromTo(
      "#carouselLeft",
      { opacity: 0, x: -200 },
      {
        opacity: 1,
        x: 0,
        ease: "slow",
        duration: 2,
        scrollTrigger: { trigger: "#carouselLeft" },
      }
    );
    this.gsap.fromTo(
      "#carouselRight",
      { opacity: 0, x: 200 },
      {
        opacity: 1,
        x: 0,
        ease: "slow",
        duration: 2,
        scrollTrigger: { trigger: "#carouselLeft" },
      }
    );

    // pinning
    let panels = this.gsap.utils.toArray("#carouselItem");

    this.gsap.to(panels, {
      xPercent: -100 * (panels.length - 1),
      ease: "slow",
      scrollTrigger: {
        trigger: "#my-portfolio",
        pin: true,
        scrub: 1,
        onUpdate: (self) => {
          if (self.progress < 0.2) {
            this.carousel = 0;
          } else if (self.progress > 0.2 && self.progress < 0.4) {
            this.carousel = 1;
          } else if (self.progress > 0.4 && self.progress < 0.6) {
            this.carousel = 2;
          } else {
            this.carousel = 3;
          }
        },
        // snap: 1 / (panels.length - 1),
      },
    });
  },
};
</script>

<style></style>
