import { createApp } from 'vue';
import App from './app.vue';
import router from './router/index.js';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faUser, faHome, faCog } from '@fortawesome/free-solid-svg-icons';

// 添加需要的图标到库中
library.add(faUser, faHome, faCog);

const app = createApp(App);
app.component('font-awesome-icon', FontAwesomeIcon);
app.use(router).mount('#app');
