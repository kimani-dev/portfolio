<template>
  <div id="about-me">
    <v-card dark color="transparent" elevation="4">
      <v-row>
        <v-col cols="12" sm="6" align-self="center">
          <div class="text-subtitle-1 white--text px-3" id="aboutText">
            Experienced Software Developer adept in all stages of advanced
            development. Knowledgeable in user interface, testing, and debugging
            processes. Bringing forth expertise in design, installation,
            testing, and maintenance of web systems. Equipped with a diverse and
            promising skill set. Proficient in an assortment of technologies.
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
    </v-card>
  </div>
</template>

<script>
export default {
  name: "about-me",
  mounted() {
    this.gsap.fromTo(
      "#aboutText",
      { opacity: 0, x: -200 },
      {
        opacity: 1,
        duration: 2,
        x: 0,
        ease: "slow",
        scrollTrigger: {
          trigger: "#aboutText",
        },
      }
    );

    this.gsap.from("#contactItem", {
      opacity: 0,
      x: 100,
      duration: 2,
      stagger: {
        each: 0.3,
      },
      ease: "slow",
      scrollTrigger: {
        trigger: "#aboutText",
      },
    });
  },
};
</script>

<style></style>
