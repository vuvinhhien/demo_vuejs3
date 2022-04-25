<template>
  <div class="error-message" v-if="errorMessage">
    {{ errorMessage }}
  </div>
</template>

<script setup lang="ts">
interface Props {
  errorMessage: string | undefined;
}

const { errorMessage } = defineProps<Props>();
</script>

<style lang="scss" scoped>
.error-message {
  color: red;
}
</style>
