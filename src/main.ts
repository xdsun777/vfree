import { createApp } from 'vue';
import App from '@/app.vue';
import router from '@router/index.ts';
import('webrtc-adapter');


const app = createApp(App);
app.use(router).mount('#app');

