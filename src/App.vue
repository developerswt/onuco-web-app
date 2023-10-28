<template>
  <div>
    <Navbar :showSearchBox="showSearchBox" />
    <router-view :key="$route.fullPath" />
    <Footer />
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';

export default {
  name: "AppView",
  components: {
    Navbar,
    Footer,
  },
  computed: {
    showSearchBox() {
      // Check if the current route is the search page and conditionally show/hide the search box
      return this.$route.path !== '/search';
    },
  },
}
</script>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
  
}
</style>
