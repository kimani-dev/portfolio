<script setup>
const highlight = 'text-capitalize text-primary'
</script>

<template>
  <v-card>
    <v-card-title>
      <h3 class="text-h4 text-primary">Introduction . . .</h3>
    </v-card-title>
    <v-card-text>
      <v-row>
        <v-col>
          <p class="text-subtitle-1">
            Passionate about pixels and code, I'm a
            <span :class="highlight">full-stack developer</span>
            with <span :class="highlight">6+ years</span> of experience crafting user-centric
            experiences. From sleek <span :class="highlight">websites</span> and interactive
            <span :class="highlight">web apps</span> to
            <span :class="highlight">mobile</span> masterpieces, I love diving into complex
            challenges and crafting solutions that empower users and streamline workflows.
          </p>
          <p class="text-subtitle-1 mt-2">
            My secret weapons? <span :class="highlight">Vue Js</span> and
            <span :class="highlight">Laravel</span> and others, wielded with a focus on increasing
            engagement and delivering innovative results. But beyond the tech, I'm a collaborative
            <span :class="highlight">team player</span>, always learning, always pushing boundaries.
          </p>
          <p class="text-subtitle-1 mt-2">
            When not coding, you'll find me racking up wins in the
            <span :class="highlight">pool</span> hall, mastering
            <span :class="highlight">eSports</span> challenges, capturing the beauty of nature
            through <span :class="highlight">photography</span>, or sharing my knowledge as a
            part-time developer <span :class="highlight">mentor</span>. So, whether you're an
            employer seeking a skilled developer, a client with a vision, or a fellow coder looking
            to connect, welcome! Let's turn your ideas into reality."
          </p>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>
