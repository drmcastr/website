<template>
  <app-header />
  <router-view />
</template>

<script lang="ts">
import AppHeader from '@/components/AppHeader.vue';

export default {
  components: { AppHeader },
};
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Red+Hat+Mono:wght@300;500&display=swap');

body {
  background: black;
}

html, body, #app {
  margin: 0;
  height: 100%;
}

#app {
  position: relative;

  background: linear-gradient(rgba(0, 0, 0, .5), rgba(0, 0, 0, .5)), url('./assets/bg.gif');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  font-family: 'Red Hat Mono', 'Courier New', Courier, monospace;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: larger;
  font-weight: 300;
  color: white;
}
</style>
