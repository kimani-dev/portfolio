<script setup>
import { ref } from 'vue'

const projects = [
  // Project 1: eParliament System
  {
    title: 'Streamlining Parliamentary Workflow: eParliament System',
    date: '2024 (Ongoing)', // Update year to specific launch date
    description:
      'Developed a paperless parliament session management system for a confidential client, featuring text-to-speech conversion, document parsing, real-time chat integration, and more. This innovative solution fosters efficient legislative processes and enhances transparency.',
    link: 'NDA', // Replace with project URL if possible
    images: [
      'https://i.imgur.com/jQFoqDxm.png',
      'https://i.imgur.com/xtlTaF6m.png',
      'https://i.imgur.com/EnQZQegm.png'
    ], // Add relevant image URLs here
    technologies: ['Laravel', 'Vue.js', 'AWS', 'Google Cloud Speech', 'Twilio'] // Add relevant backend and frontend technologies used
  },

  // Project 2: Document Management System
  {
    title: 'Boosting Organizational Efficiency: Document Management System',
    date: '2023',
    description:
      'Built a secure document management system for an undisclosed client, enabling seamless document tracking and version control. The system mirrors a code repository, facilitating document flow across departments, document approvals, and e-cabinet storage.',
    link: 'edms.onrender.com', // Replace with project URL if possible
    images: [
      'https://i.imgur.com/jQFoqDxm.png',
      'https://i.imgur.com/xtlTaF6m.png',
      'https://i.imgur.com/EnQZQegm.png'
    ], // Add relevant image URLs here
    technologies: ['Laravel', 'MySQL', 'GitLab', 'Custom UI/UX design'] // Add relevant backend and frontend technologies used
  },

  // Project 3: Suvence Technologies Corporate Website
  {
    title: 'Elevating Brand Presence: Suvence Technologies Website',
    date: '2023',
    description:
      'Revamped the corporate website for Suvence Technologies Limited, crafting a modern and responsive design that showcases their services and expertise. The website features interactive elements, SEO optimization, and seamless lead generation functionality.',
    link: 'https://www.suvencetechnologies.com/',
    images: [
      'https://i.imgur.com/jQFoqDxm.png',
      'https://i.imgur.com/xtlTaF6m.png',
      'https://i.imgur.com/EnQZQegm.png'
    ],
    technologies: ['Vue.js', 'Tailwind CSS', 'Laravel Mix', 'WordPress integration'] // Add relevant backend and frontend technologies used
  },

  // Project 4: KCA University Tech Club Website
  {
    title: 'Empowering Tech Enthusiasts: KCA University Tech Club Website',
    date: '2023',
    description:
      'Developed a dynamic and engaging website for the KCA University Tech Club, fostering community engagement and promoting tech events. The website features membership management, news updates, and interactive forums.',
    link: 'https://kcatechclub.org/',
    images: [
      'https://i.imgur.com/jQFoqDxm.png',
      'https://i.imgur.com/xtlTaF6m.png',
      'https://i.imgur.com/EnQZQegm.png'
    ],
    technologies: ['React.js', 'Django', 'PostgreSQL', 'Material UI'] // Add relevant backend and frontend technologies used
  },

  // Project 5: Jambo Chronicles Blog
  {
    title: 'Sharing Stories, Sparkling Conversations: Jambo Chronicles Blog',
    date: '2022 - Present',
    description:
      'Launched and maintain Jambo Chronicles, a personal blog exploring diverse topics and sparking thought-provoking conversations. The blog showcases my passion for writing and content creation, while serving as a platform for experimentation with web development technologies.',
    link: 'https://www.jambocronicles.com/',
    images: [
      'https://i.imgur.com/jQFoqDxm.png',
      'https://i.imgur.com/xtlTaF6m.png',
      'https://i.imgur.com/EnQZQegm.png'
    ],
    technologies: ['WordPress', 'Elementor Pro', 'SEO optimization'] // Add relevant backend and frontend technologies used
  }
]

const carousel = ref(0)
</script>

<template>
  <v-container class="mt-3" id="container">
    <h3 class="text-h4 text-primary">Featured Projects . . .</h3>
    <v-row class="mt-2">
      <v-col class="d-flex" cols="12">
        <v-carousel
          :show-arrows="false"
          v-model="carousel"
          cycle
          continuous
          hide-delimiter-background
        >
          <v-carousel-item v-for="(project, index) in projects" :key="index" eager>
            <v-card>
              <v-card-title>
                <p class="text-primary">{{ project.title }}</p>
              </v-card-title>
              <v-card-text>
                <v-row>
                  <v-col cols="12" md="6" align-self="center">
                    {{ project.description }}
                    <v-list>
                      <v-list-subheader>Project Info</v-list-subheader>
                      <v-list-item :title="project.date" subtitle="Date"></v-list-item>
                      <v-list-item title="Confidential" subtitle="Client"></v-list-item>
                    </v-list>
                    <!-- skills start -->
                    <v-chip
                      v-for="(technology, index) in project.technologies"
                      :key="index"
                      color="primary"
                      class="ml-1"
                      >{{ technology }}</v-chip
                    >
                    <!-- skills end -->
                  </v-col>
                  <v-col cols="12" md="6">
                    <v-carousel hide-delimiter-background :show-arrows="false" height="300px">
                      <v-carousel-item v-for="(image, index) in project.images" :key="index" eager>
                        <div class="d-flex flex-column justify-center h-100 mt-n3">
                          <v-img :src="image" eager></v-img>
                        </div>
                      </v-carousel-item>
                    </v-carousel>
                  </v-col>
                </v-row>
              </v-card-text>
            </v-card>
          </v-carousel-item>
        </v-carousel>
      </v-col>
    </v-row>
  </v-container>
</template>
