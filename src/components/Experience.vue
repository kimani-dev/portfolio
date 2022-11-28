<template>
  <div id="my-experience">
    <v-row>
      <v-col>
        <div class="d-flex flex-column">
          <h1 class="primary--text display-2">Where I've been</h1>
        </div>

        <v-timeline
          dark
          class="white--text"
          reverse
          :dense="$vuetify.breakpoint.xs"
        >
          <v-timeline-item
            icon="mdi-domain"
            fill-dot
            v-for="(experience, i) in experiences"
            :key="i"
            id="timeLineItem"
          >
            <template v-slot:opposite>
              <p class="primary--text headline">{{ experience.year }}</p>
            </template>

            <h1 class="font-weight-light text-capitalize headline">
              {{ experience.company }}
            </h1>
            <p>{{ experience.position }}</p>
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
        company: "Techify Academy",
        position: "Founder",
        year: "2022",
        works: [
          "Founder of Techify Academy - An online developer platform to learn to code and get involved in online development-related discussions which has achieved more than 200 active developers in a span of two months",
          "Working on a code assessment module to immerse developers in coding-related quizzes to enhance learning and skill improvement",
          "Leading an agile team of six in the development of new modules for the system as well as overseeing the development of the mobile application.",
        ],
      },
      {
        company: "suvence technologies",
        position: "Full stack web developer",
        year: "2022",
        works: [
          "Planning, developing, testing, and maintaining client and the company's web applications to increase efficiency and usability",
          "Solving complex problems in the migration of company products into the latest web technologies e.g Seamless migration of web applications on Vue 2 to Vue 3",
          "Interfacing with clients to identify their business requirements to ensure they are met and increase the company's client retention.",
          "Successfully modified numerous web applications and retained a constant look and feel for each hence increasing user-friendliness by 30%.",
        ],
      },
      {
        company: "software technologies limited",
        position: "Software developer",
        year: "2021",
        works: [
          "Worked productively with the Product Team to understand requirements and business specifications around Portfolio Management, Analytics, and Risk.",
          "Implemented and updated application modules under the direction of the Senior Developer.",
          "Mentored interns and junior developers to acquaint them with the company protocols, stack as well as duties.",
          "Using my own knowledge and expertise, suggested potential adjustments and improvements to some company products which increased efficiency, and received positive feedback from the Senior Developer.",
        ],
      },
      {
        company: "freelance & contracts",
        position: "Full stack developer",
        year: "2021",
        works: [
          "Provided effective troubleshooting and remediation for web applications.",
          "Successfully identified, diagnosed, and fixed website problems, including broken links, typographical errors, and formatting issues to increase user-friendliness",
          "Analyzed and designed new systems and applications. Received highly positive feedback from my clients.",
          "Refactored the Infrastructure for jambochronicles.com which is a Kenyan-based blog that increased traffic by 40%",
          "Collaborated with developers from Nextsense to create an E-Parliament solution. Delivered one time and under budget to positive remarks from the contractor",
        ],
      },
      {
        company: "nextsense technologies",
        position: "Software Development Intern",
        year: "2020",
        works: ["Completed my 5-month internship"],
      },
    ],
  }),
  mounted() {
    this.gsap.fromTo(
      "#timeLineItem",
      { opacity: 0, x: -200 },
      {
        opacity: 1,
        duration: 3,
        x: 0,
        ease: "slow",
        stagger: {
          each: 0.5,
        },
        scrollTrigger: { trigger: "#timeLineItem" },
      }
    );
  },
};
</script>

<style></style>
