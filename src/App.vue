<script setup>
// import HelloWorld from './components/HelloWorld.vue'
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
// import Carousel from './components/Carousel.vue'
// import Academics from './components/Academics.vue'
// import TopRatedCourses from './components/TopRatedCourses.vue';
</script>

<template>
  <Navbar />
  <router-view />
  <Footer />
</template>

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
