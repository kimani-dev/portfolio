<template>
  <div id="my-experience">
    <v-row>
      <v-col>
        <div class="d-flex flex-column">
          <h1 class="primary--text display-2">Where I've been</h1>
        </div>

        <v-timeline dark class="white--text" :dense="$vuetify.breakpoint.xs">
          <v-timeline-item
            icon="mdi-book"
            fill-dot
            v-for="(experience, i) in experiences"
            :key="i"
            id="timeLineItem"
          >
            <template v-slot:opposite>
              <p class="primary--text headline">{{ experience.year }}</p>
            </template>

            <h1 class="font-weight-light text-capitalize headline">
              {{ experience.title }}
            </h1>
            <div class="py-4">
              <ul v-for="work in experience.works" :key="work">
                <li class="subtitle-2 text-capitalize">{{ work }}</li>
              </ul>
            </div>
          </v-timeline-item>
        </v-timeline>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "my-experience",
  data: () => ({
    experiences: [
      {
        title: "suvence technologies",
        year: "2022",
        works: ["working as a full stack web developer"],
      },
      {
        title: "software technologies limited",
        year: "2021",
        works: [
          "created and deployed client systems",
          "worked with Vue JS and Laravel",
          "deployed on AWS",
        ],
      },
      {
        title: "freelance software developer",
        year: "2021",
        works: [
          " Created a mobile app for management of unexpected automobile issues. Integrated Google Maps and the Safaricom Daraja API,",
          "Created a Custom Writing Website for a client. Integrated Paypal and the Stripe API.",
          " Created a functional blog known as JamboChronicles",
        ],
      },
      {
        title: "nextsense technologies",
        year: "2020",
        works: [
          "worked as a web developer",
          "worked with HTML, CSS, JS and bootstrap to create responsive websites",
        ],
      },
    ],
  }),
  mounted() {
    this.gsap.fromTo(
      "#timeLineItem",
      { opacity: 0, x: 200 },
      {
        opacity: 1,
        duration: 2,
        x: 0,
        ease: "power",
        stagger: {
          each: 0.5,
          from: "center",
        },
        scrollTrigger: { trigger: "#timeLineItem" },
      }
    );
  },
};
</script>

<style></style>
