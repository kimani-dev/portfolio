<script setup>
const frontend = [
  // Frontend Frameworks & Libraries
  {
    title: 'Vue.js',
    icon: 'mdi-vuejs',
    description:
      'Mastered the art of building dynamic and interactive user interfaces with Vue.js, ensuring seamless user experiences.'
  },
  {
    title: 'React.js',
    icon: 'mdi-react',
    description:
      'Strong understanding of React fundamentals and core concepts, capable of contributing to React projects.'
  },
  {
    title: 'HTML & CSS',
    icon: 'mdi-language-html5',
    description:
      'Solid grounding in the foundation of web development, crafting beautifully structured and pixel-perfect layouts.'
  },

  // Tools & Technologies
  {
    title: 'JavaScript (ES6+)',
    icon: 'mdi-language-javascript',
    description:
      'Fluent in modern JavaScript syntax and best practices, writing clean and efficient code for interactive elements.'
  },
  {
    title: 'Typescript',
    icon: 'mdi-language-typescript',
    description:
      "Passionate about TypeScript's ability to write cleaner and more expressive JavaScript."
  },
  {
    title: 'CSS Preprocessors (Sass/LESS)',
    icon: 'mdi-file-code',
    description:
      'Leveraging the power of preprocessors to maintain scalable and organized styles for complex projects.'
  },
  {
    title: 'Responsive Design & Accessibility',
    icon: 'mdi-responsive',
    description:
      'Building websites that adapt flawlessly to any screen size and prioritize accessibility for all users.'
  },

  // Bonus
  {
    title: 'UI/UX Design Principles',
    icon: 'mdi-palette',
    description:
      'Possessing a keen eye for design and understanding the principles of creating user-centered interfaces.'
  }
]
const backend = [
  // Programming Languages & Frameworks
  {
    title: 'Laravel',
    icon: 'mdi-laravel',
    description:
      'Expert in building secure and scalable web applications with the Laravel PHP framework.'
  },
  {
    title: 'Node.js/Express',
    icon: 'mdi-nodejs',
    description:
      'Comfortable building server-side applications and APIs using Node.js and Express.js.'
  },
  {
    title: 'Java (Intermediate)',
    icon: 'mdi-language-java',
    description:
      'Proficient in object-oriented programming principles and capable of working with Java-based projects.'
  },

  // Databases & Cloud Services
  {
    title: 'MySQL/PostgreSQL',
    icon: 'mdi-database',
    description:
      'Experienced in designing and managing relational databases for efficient data storage and retrieval.'
  },
  {
    title: 'AWS (EC2, S3, etc.)',
    icon: 'mdi-cloud',
    description:
      'Understanding of deploying and managing applications on Amazon Web Services platforms.'
  },
  {
    title: 'RESTful API Design',
    icon: 'mdi-api',
    description:
      'Building clean and well-documented APIs for seamless data exchange between applications.'
  },
  {
    title: 'Firebase',
    icon: 'mdi-firebase',
    description:
      "Proficient in building and deploying modern web and mobile applications with Firebase's cloud-based tools."
  },

  // Bonus
  {
    title: 'CI/CD Pipelines',
    icon: 'mdi-source-branch-sync',
    description:
      'Understanding of automating build, test, and deployment processes to streamline development workflow.'
  }
]
</script>

<template>
  <v-container fluid class="mt-5">
    <h3 class="text-h4 text-primary">My Skills . . .</h3>
    <v-row>
      <v-col cols="12" md="6">
        <v-row class="mt-2">
          <v-col
            cols="12"
            md="6"
            v-for="({ icon, title, description }, index) in frontend"
            :key="index"
          >
            <v-card height="150">
              <v-card-title>
                <div class="d-flex">
                  <v-icon :icon="icon" color="primary" class="mx-auto" size="30"></v-icon>
                </div>
                <p class="text-center text-caption text-uppercase text-wrap">{{ title }}</p>
              </v-card-title>
              <v-card-text>
                <p class="text-caption">
                  {{ description }}
                </p>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
      <v-divider vertical color="primary"></v-divider>
      <v-col cols="12" md="6" class="elevation-3">
        <v-row class="mt-2">
          <v-col
            cols="12"
            md="6"
            v-for="({ icon, title, description }, index) in backend"
            :key="index"
          >
            <v-card height="150">
              <v-card-title>
                <div class="d-flex">
                  <v-icon :icon="icon" color="primary" class="mx-auto" size="30"></v-icon>
                </div>
                <p class="text-center text-caption text-uppercase text-wrap">{{ title }}</p>
              </v-card-title>
              <v-card-text>
                <p class="text-caption">
                  {{ description }}
                </p>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>
