<script setup>
import { shallowRef } from 'vue'
import { TresCanvas, useRenderLoop } from '@tresjs/core'
import { Stars } from '@tresjs/cientos'

import AboutMe from '@/layouts/AboutMe.vue'
import ContactMe from '@/layouts/ContactMe.vue'
import FeaturedProjects from '@/layouts/FeaturedProjects.vue'
import MyExperience from '@/layouts/MyExperience.vue'
import MyExpertise from '@/layouts/MyExpertise.vue'
import MySkills from '@/layouts/MySkills.vue'

const yRotation = shallowRef(0)
useRenderLoop().onLoop(({ delta }) => {
  yRotation.value += 0.02 * delta
})
</script>

<template>
  <div>
    <v-container fluid style="height: 100vh" class="pa-0">
      <v-row class="fill-height">
        <v-col>
          <TresCanvas>
            <TresPerspectiveCamera :position="[3, 3, 3]" :look-at="[3, 3, 3]" />
            <Stars
              :rotation="[0, yRotation, 0]"
              :radius="50"
              :depth="50"
              :count="5000"
              :size="0.3"
              :size-attenuation="true"
            />
            <TresAmbientLight :intensity="1" />
          </TresCanvas>
        </v-col>
      </v-row>
    </v-container>
    <AboutMe />
    <MyExpertise />
    <MyExperience />
    <MySkills />
    <FeaturedProjects />
    <ContactMe />
  </div>
</template>
