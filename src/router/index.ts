import { createMemoryHistory, createRouter } from 'vue-router';
import HomeView from '@views/HomeView.vue';
import TestV  from '@views/TestV.vue';

const routes = [
    { path: '/', component: HomeView },
    {
        path: '/chat/:id',
        component: () => import('@views/ChatTalk.vue')
    },
    {
        path: '/test',
        component: TestV
    }
];

const router = createRouter({
    history: createMemoryHistory(),
    routes,
});

export default router;
