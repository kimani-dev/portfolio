<template>
  <div id="contact-me">
    <v-row>
      <v-col>
        <div>
          <h1 class="primary--text display-2 font-weight-medium">
            Let's talk.
          </h1>
          <v-row class="mt-3">
            <v-col cols="12" sm="6">
              <v-form v-model="form">
                <v-text-field
                  label="Name"
                  prepend-icon="mdi-account"
                  clearable
                  filled
                  dark
                  :rules="[rules.required]"
                  v-model="name"
                  outlined
                ></v-text-field>
                <v-text-field
                  label="Email"
                  prepend-icon="mdi-email"
                  clearable
                  filled
                  dark
                  :rules="[rules.required, rules.email]"
                  v-model="email"
                  outlined
                ></v-text-field>
                <v-text-field
                  label="Subject"
                  prepend-icon="mdi-message"
                  clearable
                  filled
                  dark
                  :rules="[rules.required]"
                  v-model="subject"
                  outlined
                ></v-text-field>
                <v-textarea
                  label="Message"
                  prepend-icon="mdi-text"
                  outlined
                  filled
                  v-model="message"
                  :rules="[rules.required]"
                  dark
                  clearable
                ></v-textarea>
                <v-btn type="submit" block color="primary" :disabled="!form"
                  >contact me</v-btn
                >
              </v-form>
            </v-col>
            <v-col v-if="!$vuetify.breakpoint.xs">
              <!-- animation -->
              <LottieAnimation
                ref="anim"
                :animationData="require('@/assets/contact.json')"
                :loop="true"
              />
            </v-col>
          </v-row>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import LottieAnimation from "lottie-web-vue";

export default {
  name: "contact-me",
  data: () => ({
    name: "",
    email: "",
    subject: "",
    message: "",
    rules: {
      required: (v) => !!v || "Required",
      email: (v) => !!v,
    },
    form: false,
  }),
  components: {
    LottieAnimation,
  },
};
</script>

<style></style>
