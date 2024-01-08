<script setup>
import AboutMe from '@/layouts/AboutMe.vue'
import MyExperience from '@/layouts/MyExperience.vue'
import MyExpertise from '@/layouts/MyExpertise.vue'
import MySkills from '@/layouts/MySkills.vue'
</script>

<template>
  <div>
    <v-parallax
      src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=455&q=80"
      gradient="to bottom, rgba(0,0,0,0.4), rgba(0,0,0,0.9)"
      height="100vh"
    >
      <div class="d-flex flex-column justify-end h-100 pa-3">
        <h1 class="text-h3 text-uppercase text-primary">Full Stack Software Engineer</h1>
        <h2 class="text-h4 text-uppercase mt-3">David Kimani</h2>
      </div>
    </v-parallax>
    <AboutMe />
    <MyExpertise />
    <MyExperience />
    <MySkills />
  </div>
</template>
