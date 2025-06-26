<template>
    <footer
        class="fixed right-0 bottom-0 left-0 z-10 bg-white shadow-md dark:bg-gray-800"
    >
        <!-- 新建聊天模态框 -->
        <NewChatModal
            v-show="newChatModalStatus"
            @close="newChatModalStatus = false"
        ></NewChatModal>
        <button
            class="bg-primary-green dark:bg-primary-dark-1 dark:hover:bg-primary-dark-0 fixed right-4 bottom-12 flex h-14 w-14 items-center justify-center rounded-full text-white shadow-lg hover:bg-green-600 focus:outline-none"
            @click="newChatModalStatus = true"
        >
            <PlusIcon class="h-6 w-6" />
        </button>
    </footer>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { PlusIcon } from '@heroicons/vue/24/solid';
import NewChatModal from '@components/modal/NewChatModal.vue';
// 控制新建聊天模态框的显示状态
const newChatModalStatus = ref(false);
// export default {
//     name: 'FooterV',
//     data() {
//         return {
//             newChatModalStatus: false, // 控制新建聊天模态框的显示状态
//         };
//     },
//     components: {
//         PlusIcon,
//         NewChatModal,
//     },
//     methods: {
//         openNewChatModal() {
//             this.newChatModalStatus = true; // 打开新建聊天模态框
//         },
//     },
// };
</script>

<style scoped></style>
