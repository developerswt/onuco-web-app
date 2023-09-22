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
app.mount('#app');