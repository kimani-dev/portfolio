<template>
  <div id="about-me">
    <v-row>
      <v-col cols="12" sm="6" align-self="center">
        <div class="text-subtitle-1 white--text" id="aboutText">
          Creative Front-End Developer providing high-impact web solutions for
          diverse industry organizations. Skilled in designing, developing and
          testing multiple web-based applications incorporating a range of
          technologies. Aspiring to combine broad background with strong
          technical skills to excel as a Front-End Developer.
        </div>
      </v-col>

      <v-spacer></v-spacer>

      <v-col>
        <div class="d-flex flex-column">
          <v-list two-line color="transparent" dark>
            <v-list-item id="contactItem" dense>
              <v-list-item-icon>
                <v-icon color="primary"> mdi-map-marker </v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title
                  class="text-uppercase primary--text font-weight-bold"
                >
                  location
                </v-list-item-title>
                <v-list-item-subtitle class="text-capitalize">
                  nairobi, kenya
                </v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
            <v-list-item id="contactItem">
              <v-list-item-icon>
                <v-icon color="primary"> mdi-email </v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title
                  class="text-uppercase primary--text font-weight-bold"
                >
                  email
                </v-list-item-title>
                <v-list-item-subtitle class="">
                  daviemim07@gmail.com
                </v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
            <v-list-item id="contactItem">
              <v-list-item-icon>
                <v-icon color="primary"> mdi-phone </v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title
                  class="text-uppercase primary--text font-weight-bold"
                >
                  phone
                </v-list-item-title>
                <v-list-item-subtitle class="text-capitalize">
                  +254757210709
                </v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </div>
      </v-col>

      <v-spacer></v-spacer>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "about-me",
  mounted() {
    this.gsap.fromTo(
      "#aboutText",
      { scale: 0, opacity: 0, rotation: 3 },
      {
        opacity: 1,
        duration: 2,
        rotation: 0,
        scale: 1,
        ease: "elastic",
        scrollTrigger: {
          trigger: "#aboutText",
          toggleActions: "restart pause resume none",
        },
      }
    );

    this.gsap.from("#contactItem", {
      opacity: 0,
      scale: 0,
      duration: 2,
      stagger: {
        each: 0.1,
        from: "edges",
      },
      scrollTrigger: {
        trigger: "#aboutText",
      },
    });
  },
};
</script>

<style></style>
