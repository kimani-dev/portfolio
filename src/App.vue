<script setup>
import { RouterView } from 'vue-router'
// import AppBar from './components/AppBar.vue'
import SideBar from './components/SideBar.vue'
// import AppFooter from './components/AppFooter.vue'
</script>

<template>
  <v-layout>
    <!-- <AppBar /> -->
    <SideBar />
    <v-main>
      <v-container fluid class="pa-0">
        <RouterView />
      </v-container>
    </v-main>
    <!-- <AppFooter /> -->
  </v-layout>
</template>
