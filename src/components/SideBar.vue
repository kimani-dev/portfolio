<script setup>
import gsap from 'gsap'

const links = [
  {
    title: 'Introduction',
    icon: 'mdi-account-tie'
  },
  {
    title: 'Expertise',
    icon: 'mdi-rocket-launch'
  },
  {
    title: 'Work History',
    icon: 'mdi-briefcase-variant'
  },
  {
    title: 'Skills and Education',
    icon: 'mdi-book-open'
  },
  {
    title: 'Featured Projects',
    icon: 'mdi-seal-variant'
  }
]

function linksEnter(el, done) {
  gsap.fromTo(
    el,
    {
      opacity: 0,
      left: -30
    },
    {
      opacity: 1,
      left: 0,
      duration: 1,
      delay: el.dataset.index * 0.2,
      onComplete: done
    }
  )
}
</script>

<template>
  <v-navigation-drawer name="drawer" width="300">
    <v-img src="/favicon.png" alt="Logo" height="200" cover />
    <div class="d-flex flex-column pa-5 text-center">
      <p class="text-h6">David Kimani</p>
      <p class="text-subtitle-1 text-uppercase mt-2">Software Developer</p>
    </div>
    <v-divider></v-divider>
    <v-list>
      <transition-group appear :css="false" @enter="linksEnter">
        <v-list-item
          v-for="({ title, icon }, i) in links"
          :key="i"
          :data-index="i"
          :title="title"
          :prepend-icon="icon"
          link
        />
      </transition-group>
    </v-list>
    <template #append>
      <div class="pa-2 d-flex justify-center">
        <v-btn icon="mdi-github" href="https://github.com/kimani-dev" target="_blank" />
        <v-btn icon="mdi-linkedin" href="https://linkedin.com/in/davidkimani" target="_blank" />
        <v-btn icon="mdi-web" href="https://ithewakimani.dev" target="_target" />
      </div>
    </template>
  </v-navigation-drawer>
</template>
