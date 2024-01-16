<script setup>
const jobs = [
  // Full Stack Software Engineer at Clifford Technologies Limited
  {
    title: 'Full Stack Engineer',
    icon: 'rocket-outline',
    description: [
      'Unleashed a lightning-fast CI/CD pipeline, slashing deployment times to under an hour.',
      'Pioneered Inertia.js and Pinia integration, shaving 20% off development cycles.',
      'Boosted user engagement by 30% through expert code optimization, keeping visitors hooked.',
      'Masterminded cutting-edge solutions with Laravel, Vue 3, TypeScript, Inertia, and Pinia.'
    ],
    from: 'Sep 2023',
    to: 'Present',
    company: 'Clifford Technologies Limited'
  },

  // Senior Frontend Developer at Suvence Technologies Limited
  {
    title: 'Senior Frontend Developer',
    icon: 'code-braces',
    description: [
      'Led the development of 6+ high-priority features with a 95% satisfaction rating.',
      'Mentored junior developers, reducing their bug-fixing time by 30% and accelerating project delivery.',
      'Streamlined code review workflows, boosting team productivity by 15%.',
      'Collaborated with backend teams to optimize API response times by 20%, enhancing user experience.'
    ],
    from: 'Mar 2022',
    to: 'Aug 2023',
    company: 'Suvence Technologies Limited'
  },

  // Co-Founder at Techify Academy
  {
    title: 'Founder & Professional Mentorship',
    icon: 'cast-education',
    description: [
      'Cultivated a vibrant learning hub with over 200 active developers in just 2 months.',
      'Led the development of a revolutionary AI-powered coding assessment engine.',
      'Crafted personalized learning journeys with interactive challenges and real-world projects.',
      'Championed collaborative learning through peer mentorship, workshops, and code reviews.'
    ],
    from: 'Sep 2022',
    to: 'Present',
    company: 'Techify Academy'
  },

  // Full Stack Software Engineer at Software Technologies Limited
  {
    title: 'Full Stack Developer',
    icon: 'code-block-braces',
    description: [
      'Boosted Laravel API response times by 25% through code optimization and caching.',
      'Automated eParliament and eBoard deployments on AWS EC2, reducing downtime by 60%.',
      'Designed and implemented RESTful APIs for client projects, improving data integration and functionality.',
      'Promoted best practices, reducing bug occurrences by 30% and improving code maintainability.'
    ],
    from: 'Sep 2021',
    to: 'Feb 2022',
    company: 'Software Technologies Limited'
  },

  // Software Developer (Freelance)
  {
    title: 'Freelance Software Development',
    icon: 'puzzle-outline',
    description: [
      'Delivered 11+ web, backend, and Android projects using Java, Android, Laravel, and Vue.js.',
      'Successfully completed 95% of projects on time and within budget, exceeding client expectations.',
      'Collaborated closely with clients to build 4 high-impact features, boosting user engagement by 60%.',
      'Developed 3 custom APIs, optimizing development time by 30% and maximizing client satisfaction.'
    ],
    from: 'Nov 2019',
    to: 'Mar 2021',
    company: 'Freelance and Contracts'
  }
]
</script>

<template>
  <v-container fluid class="mt-3">
    <v-row no-gutters>
      <v-col cols="12">
        <h3 class="text-h4 text-primary">Where I've Been . . .</h3>
        <v-timeline side="end" line-color="primary" class="mt-2">
          <v-timeline-item
            v-for="(job, index) in jobs"
            :key="index"
            width="100%"
            dot-color="transparent"
          >
            <template #icon>
              <v-icon :icon="`mdi-${job.icon}`" color="primary"></v-icon>
            </template>

            <v-card width="100%">
              <v-card-title>
                <p class="text-h6">{{ job.title }}</p>
                <p class="text-subtitle-1 text-primary">{{ job.company }}</p>
                <p class="text-caption">{{ job.from }} - {{ job.to }}</p>
              </v-card-title>
              <v-card-text>
                <v-list>
                  <v-list-item
                    v-for="(item, index) in job.description"
                    :key="index"
                    prepend-icon="mdi-circle-small"
                  >
                    <template #title>
                      <p class="text-subtite-2 overflow-x-hidden">{{ item }}</p>
                    </template>
                  </v-list-item>
                </v-list>
              </v-card-text>
            </v-card>
          </v-timeline-item>
        </v-timeline>
      </v-col>
    </v-row>
  </v-container>
</template>
