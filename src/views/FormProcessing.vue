<template>
  <div>
    <h1>Form Processing</h1>
    <ul>
      <li v-for="link in links" :key="link.to">
        <router-link :to="link.to">{{ link.content }}</router-link>
      </li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const links = ref([
  {
    to: `/form-processing/vuelidate`,
    content: "With Vuelidate",
  },
  {
    to: `/form-processing/veelidate`,
    content: "With Veelidate",
  },
  // {
  //   to: `/form-processing/vuetify`,
  //   content: "With Vuetify",
  // },
]);
</script>
