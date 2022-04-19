<template>
  <div id="app">
    <navbar />
    <router-view />
  </div>
</template>

<script>
import navbar from '../src/components/NavbarComp.vue'
export default {
  components: {
    navbar
  }
};
</script>