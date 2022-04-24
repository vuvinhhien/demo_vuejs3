<template>
  <template v-if="{ isError }">
    <div class="error-message" v-for="error of errors" :key="error.$uid">
      {{ error.$message }}
    </div>
  </template>
</template>

<script setup lang="ts">
import { ErrorObject } from "@vuelidate/core";
import { computed } from "vue";

interface Props {
  errors: ErrorObject[];
}

const { errors } = defineProps<Props>();

const isError = computed<boolean>(() => {
  return !!errors.length;
});
</script>

<style lang="scss" scoped>
.error-message {
  color: red;
}
</style>
