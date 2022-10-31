<template>
  <div id="skills-education">
    <v-row>
      <v-col>
        <div class="d-flex flex-column">
          <h1 class="primary--text display-2 font-weight-medium">
            What I know.
          </h1>

          <v-row class="mt-3">
            <v-col cols="12" sm="6">
              <div class="primary--text text-capitalize text-h5">
                my education
              </div>

              <v-card
                dark
                class="mt-2"
                outlined
                v-for="(item, i) in education"
                :key="i"
                id="educationItem"
              >
                <v-card-text>
                  <div class="white--text text-capitalize">
                    <p><v-icon left>mdi-town-hall</v-icon> {{ item.school }}</p>
                    <p class="primary--text font-weight-bold">
                      <v-icon left>mdi-school</v-icon>
                      {{ item.course }}
                    </p>
                    <p>
                      <v-icon left> mdi-calendar</v-icon> {{ item.duration }}
                    </p>
                  </div>
                </v-card-text>
              </v-card>
            </v-col>

            <v-divider vertical></v-divider>

            <v-spacer></v-spacer>

            <v-col>
              <h2 class="text-h5 text-capitalize primary--text">my skills</h2>

              <div>
                <p class="primary--text title text-uppercase font-weight-light">
                  programming
                </p>

                <div>
                  <div
                    class="d-flex mt-2"
                    v-for="(language, n) in skills.programming"
                    :key="n"
                  >
                    <p class="my-auto white--text subtitle-1 text-capitalize">
                      {{ language.title }}
                    </p>
                    <v-spacer></v-spacer>
                    <v-rating
                      id="ratingItem"
                      small
                      readonly
                      half-increments
                      background-color="primary"
                      empty-icon="mdi-circle-outline"
                      full-icon="mdi-circle"
                      half-icon="mdi-circle-half-full"
                      :value="language.rating"
                    ></v-rating>
                  </div>
                </div>
              </div>

              <div>
                <p
                  class="primary--text title text-uppercase mt-2 font-weight-light"
                >
                  others
                </p>

                <div>
                  <div
                    class="d-flex mt-2"
                    v-for="(skill, n) in skills.others"
                    :key="n"
                  >
                    <p class="my-auto white--text subtitle-1 text-capitalize">
                      {{ skill.title }}
                    </p>
                    <v-spacer></v-spacer>
                    <v-rating
                      id="ratingItem"
                      small
                      readonly
                      half-increments
                      background-color="primary"
                      empty-icon="mdi-circle-outline"
                      full-icon="mdi-circle"
                      half-icon="mdi-circle-half-full"
                      :value="skill.rating"
                    ></v-rating>
                  </div>
                </div>
              </div>
            </v-col>

            <v-spacer></v-spacer>
          </v-row>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "skills-education",
  data: () => ({
    education: [
      {
        school: "KCA",
        course: "degree in software development",
        duration: "2022 - 2024",
      },
      {
        school: "institute of software technologies",
        course: "diploma in software development",
        duration: "2020 - 2020",
      },
      {
        school: "karura adventist school",
        course: "high school diploma",
        duration: "2016 - 2019",
      },
    ],
    skills: {
      programming: [
        {
          title: "HTML5",
          rating: 5,
        },
        {
          title: "CSS3",
          rating: 5,
        },
        {
          title: "javascript",
          rating: 5,
        },
        {
          title: "PHP",
          rating: 4,
        },
        {
          title: "JAVA",
          rating: 4,
        },
      ],
      others: [
        {
          title: "Vue JS",
          rating: 5,
        },
        {
          title: "Laravel",
          rating: 4,
        },
        {
          title: "Android",
          rating: 5,
        },
        {
          title: "REST",
          rating: 5,
        },
        {
          title: "Git",
          rating: 4,
        },
      ],
    },
  }),
  mounted() {
    this.gsap.fromTo(
      "#educationItem",
      { scale: 2, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        ease: "bounce",
        duration: 2,
        stagger: {
          each: 0.1,
          from: "edges",
        },
        scrollTrigger: "#educationItem",
      }
    );

    this.gsap.fromTo(
      "#ratingItem",
      { x: -100, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        delay: 2,
        ease: "slow",
        duration: 1,
        stagger: 0.2,
        scrollTrigger: "#educationItem",
      }
    );
  },
};
</script>

<style></style>
