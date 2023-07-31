import { createApp } from 'vue'
import './style.css'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
import router from './router'
import config from './config/index'
import 'video.js/dist/video-js.css'



// createApp(App).use(ElementPlus).mount('#app')
const app = createApp(App);
app.use(router);
app.use(config);
app.use(ElementPlus);
app.mount('#app');