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
import VueGtm from '@gtm-support/vue-gtm';
import VueApexCharts from "vue3-apexcharts";
import VueSocialSharing from 'vue-social-sharing'
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
app.use(VueSocialSharing); 
app.use(store);
app.use(AmplifyVue);
app.use(ElementPlus);
app.component('ApexChart', VueApexCharts);
// app.use(breadcrumbs, {
//   includeComponent: false // {boolean} [includeComponent=false] - Include global breadcrumbs component or not
// })
// app.use(VueBreadcrumbs);
app.use(VueGtm, {
  id: 'GTM-TCTHQXZH', // Replace with your GTM Container ID
  defer: false, // Script can be set to `defer` to speed up page load at the cost of less accurate results (in case visitor leaves before script is loaded, which is unlikely but possible). Defaults to false, so the script is loaded `async` by default
  compatibility: false, // Will add `async` and `defer` to the script tag to not block requests for old browsers that do not support `async`
  enabled: true, // defaults to true. Plugin can be disabled by setting this to false for Ex: enabled: !!GDPR_Cookie (optional)
  debug: true, // Whether or not display console logs debugs (optional)
  loadScript: true, // Whether or not to load the GTM Script (Helpful if you are including GTM manually, but need the dataLayer functionality in your components) (optional)
  vueRouter: router, // Pass the router instance to automatically sync with router (optional)
  trackOnNextTick: false, // Whether or not call trackView in Vue.nextTick
});

// Vue.use(VueGtm, {
//   id: 'GTM-XXXXXX', // Replace with your GTM container ID
//   enabled: true, // Set to true to enable GTM tracking
//   debug: true, // Set to true for debugging in development
//   loadScript: true, // Set to true to load GTM script asynchronously
// });

app.mount('#app');