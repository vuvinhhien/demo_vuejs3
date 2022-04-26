<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/form-processing">FormProcessing</router-link>
      <router-link to="/axios">Using Axios and Global Spinner</router-link>
      <pulse-loader :loading="isLoading"></pulse-loader>
    </nav>
    <router-view />
  </div>
</template>

<script lang="ts">
import PulseLoader from "vue-spinner/src/PulseLoader.vue";
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState("spinner", ["isLoading"]),
  },
  components: {
    "pulse-loader": PulseLoader,
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: flex;
  width: 100%;
}

nav {
  padding: 30px;
  width: 20%;
  a {
    display: block;
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

div {
  width: 80%;
}
</style>
