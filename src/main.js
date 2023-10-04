import { createApp } from 'vue'
import './style.css'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
import router from './router'
import store from './store/store'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import 'video.js/dist/video-js.css'
import AmplifyVue from '@aws-amplify/ui-vue';
import {Amplify, Auth } from 'aws-amplify';
import '@aws-amplify/ui-vue/styles.css';
import awsconfig from './aws-exports';
// import VueGtm from '@gtm-support/vue-gtm';
//import VueBreadcrumbs from 'vue2-breadcrumbs';

// import customAmplifyTheme from './config/amplify-theme';
// Amplify.applyTheme(customAmplifyTheme);
Amplify.configure(awsconfig);
Auth.configure(awsconfig);
// import VuejQuery from 'vue-jquery';



// createApp(App).use(ElementPlus).mount('#app')
const app = createApp(App);
// app.use(VuejQuery);
app.use(router);
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
  }
app.use(store);
app.use(AmplifyVue);
app.use(ElementPlus);
// app.use(breadcrumbs, {
//   includeComponent: false // {boolean} [includeComponent=false] - Include global breadcrumbs component or not
// })
// app.use(VueBreadcrumbs);
// app.use(VueGtm, {
//   id: 'GTM-XXXXXX', // Replace with your GTM Container ID
//   defer: false, // Whether or not to defer script loading
//   compatibility: false, // Set this to true if you're using Vue 2.x
//   debug: true, // Set this to true to enable debug mode
//   loadScript: true, // Set this to true to load the GTM script automatically
// });

// Vue.use(VueGtm, {
//   id: 'GTM-XXXXXX', // Replace with your GTM container ID
//   enabled: true, // Set to true to enable GTM tracking
//   debug: true, // Set to true for debugging in development
//   loadScript: true, // Set to true to load GTM script asynchronously
// });

app.mount('#app');