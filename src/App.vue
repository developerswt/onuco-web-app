<template>
  <div id="app">
    <div class="content-wrapper">
      <Navbar :show-search-box-prop="true" />
      <!-- Conditionally render Breadcrumbs based on the route -->
      <div :class="{ 'container-fluid': isCourseDetailsRoute }">
        <div class="container">
          <Breadcrumbs v-if="!isHomeRoute" />
        </div>
      </div>  
      <router-view :key="$route.fullPath" />
    </div>
    <AppFooter />
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue';
import AppFooter from './components/AppFooter.vue';
import { initializeApp } from "firebase/app";
import { getMessaging, getToken, onMessage } from "firebase/messaging";
import Breadcrumbs from './components/Breadcrumbs.vue'

const firebaseConfig = {
  apiKey: "AIzaSyD4NRQ4QQHijRJYkMyHghh1tHFg0AI4ODw",
  authDomain: "onuco-app-notification.firebaseapp.com",
  projectId: "onuco-app-notification",
  storageBucket: "onuco-app-notification.appspot.com",
  messagingSenderId: "363907249",
  appId: "1:363907249:web:5cd689497860b6d14ffa90",
  measurementId: "G-X6WG62TK7K"
};

const app = initializeApp(firebaseConfig);
console.log(app);

// Get registration token. Initially this makes a network call, once retrieved
// subsequent calls to getToken will return from cache.
const messaging = getMessaging();
onMessage(messaging, (payload) => {
  console.log('Message received. ', payload);
  // ...
});
getToken(messaging, { vapidKey: 'BHkuoSUIQ1JzvalpTFVNaQ7yNSnquONVJBARWJzw-J_UNeBwbNpz4jgVytcZwP-KpNUbYrIzPoMlujBILJN9vZM' }).then((currentToken) => {
  if (currentToken) {
    // Send the token to your server and update the UI if necessary
    console.log("Token is:", currentToken);
    // ...
  } else {
    // Show permission request UI
    console.log('No registration token available. Request permission to generate one.');
    // ...
  }
}).catch((err) => {
  console.log('An error occurred while retrieving token. ', err);
  // ...
});



export default {
  name: "AppView",
  components: {
    Navbar,
    AppFooter,
    Breadcrumbs
  },
  data() {
    return {
      showSearchBox: true,
      isHomeRoute: false,
      isCourseDetailsRoute: false
    }
  },
  // computed: {
  //   isHomeRoute() {
  //     return this.$route.name === 'Home' || this.$route.name == 'AdminPage';
  //   },
  // },

  watch: {
    $route(to, from) {
      console.log(from);
      // // Check if the current route is the home route
      this.isHomeRoute = to.name === 'Home' || to.name === 'AdminPage' || to.name === 'Login / Sign Up';

      // Check if the current route is the course details route
      this.isCourseDetailsRoute = to.name === 'CourseDetails';
    }
  }
  // computed: {
  //   showSearchBox() {
  //     // Check if the current route is the search page and conditionally show/hide the search box
  //     return this.$route.path !== '/search';
  //   },
  // },
}
</script>

<style scoped>
#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
.container-fluid {
  background: #E5EFF9 0% 0% no-repeat padding-box;
}
.content-wrapper {
  flex: 1;
  display: flex;
  flex-direction: column;
}

/* Your other styling for Navbar and AppFooter goes here */

AppFooter {
  margin-top: auto; /* Push AppFooter to the bottom */
}
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