<script setup>
import { ref } from 'vue'
import { useDisplay } from 'vuetify'

const rules = {
  required: (v) => !!v || 'This field is required'
}
const form = ref({
  name: '',
  email: '',
  subject: '',
  message: ''
})
</script>

<template>
  <v-container>
    <v-row>
      <v-col cols="12" md="6">
        <h3 class="text-h4 text-primary">Let's talk . . .</h3>
        <v-form class="mt-3">
          <v-text-field
            label="Name"
            prepend-inner-icon="mdi-account"
            v-model="form.name"
            :rules="[rules.required]"
            variant="solo"
          />
          <v-text-field
            label="Email"
            prepend-inner-icon="mdi-email"
            v-model="form.email"
            :rules="[rules.required]"
            variant="solo"
          />
          <v-text-field
            label="Subject"
            prepend-inner-icon="mdi-message"
            v-model="form.subject"
            :rules="[rules.required]"
            variant="solo"
          />
          <v-textarea
            label="Message"
            prepend-inner-icon="mdi-text"
            v-model="form.message"
            :rules="[rules.required]"
            variant="solo"
          ></v-textarea>
          <v-btn color="primary" block>Send A Message</v-btn>
        </v-form>
      </v-col>
      <v-col v-if="!useDisplay().mobile" cols="6"></v-col>
    </v-row>
  </v-container>
</template>
