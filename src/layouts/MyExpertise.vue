<script setup>
import gsap from 'gsap'
const expertise = [
  // 1. Website Architect & Developer
  {
    title: 'Bringing Ideas to Life: Website Architect & Developer',
    description:
      "From initial concept to polished pixels, I craft stunning, user-friendly websites that resonate with your audience and drive results. Whether it's a sleek portfolio, a dynamic e-commerce platform, or a content-rich blog, I'll translate your vision into a digital masterpiece.",
    icon: 'web'
  },
  // 2. Mobile App Magician
  {
    title: 'Mobile App Magician: Building Apps That Engage and Empower',
    description:
      "I don't just build mobile apps, I create interactive experiences that capture hearts and minds. From native iOS and Android development to hybrid cross-platform solutions, I'll turn your mobile app vision into a pocket-sized powerhouse.",
    icon: 'cellphone-text'
  },
  // 3. API & Backend Architect
  {
    title: 'The Bridge Between: API & Backend Architect',
    description:
      "The backbone of every great application is a robust and secure backend. I'm adept at designing and building APIs, integrating services, and managing databases to ensure your project runs smoothly and scales with ease.",
    icon: 'vpn'
  },
  // 4. Full-Stack Maestro
  {
    title: 'Full-Stack Maestro: Orchestrating Every Layer',
    description:
      "I'm not just a jack-of-all-trades, I'm a master of all. From front-end development to backend logic and data management, I understand the entire development ecosystem and can seamlessly navigate each layer to bring your project to life.",
    icon: 'database-sync'
  },
  // 5. Professional Mentor & Guide
  {
    title: 'Investing in Your Growth: Professional Mentor & Guide',
    description:
      "Sharing my knowledge is just as rewarding as building. I offer professional mentorship to aspiring developers, helping them hone their skills, navigate the industry, and unlock their full potential. Whether you're a junior developer or a seasoned pro, I'm here to support your journey.",
    icon: 'school'
  },
  // 6. Continuous Learner & Collaborator
  {
    title: 'Always Learning, Always Collaborating',
    description:
      "The tech world is ever-evolving, and I'm always at the forefront of innovation. I actively seek out new challenges, stay abreast of the latest trends, and embrace collaborative environments to push boundaries and deliver exceptional results.",
    icon: 'lightbulb'
  }
]

function animate(el, done) {
  gsap.fromTo(
    el,
    {
      opacity: 0
    },
    {
      opacity: 1,
      delay: el.dataset.index * 0.16,
      duration: 1,
      onComplete: done
    }
  )
}
</script>

<template>
  <v-container fluid>
    <v-row>
        <v-col>
            <h3 class="text-h4 text-primary">What I Can Do For You . . .</h3>
        </v-col>
    </v-row>
    <v-row>
      <transition-group name="slide-in" appear :css="false" @enter="animate">
        <v-col
          v-for="({ title, description, icon }, index) in expertise"
          :key="index"
          :data-index="index"
          cols="12" md="4"
        >
          <v-hover>
            <template #default="{ isHovering, props }">
              <v-card
                class="fill-height"
                :elevation="isHovering ? '5' : '2'"
                v-bind="props"
                :color="isHovering ? 'primary' : ''"
              >
                <v-card-title class="h-50">
                  <div class="d-flex flex-column">
                    <v-icon
                      :icon="`mdi-${icon}`"
                      size="60"
                      class="mx-auto"
                      :color="isHovering ? '' : 'primary'"
                    ></v-icon>
                    <h4 class="text-wrap text-center">{{ title }}</h4>
                  </div>
                </v-card-title>
                <v-card-text>
                  <p class="text-subtitle-2">
                    {{ description }}
                  </p>
                </v-card-text>
              </v-card>
            </template>
          </v-hover>
        </v-col>
      </transition-group>
    </v-row>
  </v-container>
</template>
