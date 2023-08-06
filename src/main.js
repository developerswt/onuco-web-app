import { createApp } from 'vue'
import './style.css'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
import router from './router'
import config from './config/index'
import 'video.js/dist/video-js.css'
import AmplifyVue from '@aws-amplify/ui-vue';
import {Amplify, Auth } from 'aws-amplify';
import '@aws-amplify/ui-vue/styles.css';
import awsconfig from './aws-exports';
Amplify.configure(awsconfig);
Auth.configure(awsconfig);



// createApp(App).use(ElementPlus).mount('#app')
const app = createApp(App);
app.use(router);
app.use(config);
app.use(AmplifyVue);
app.use(ElementPlus);
app.mount('#app');