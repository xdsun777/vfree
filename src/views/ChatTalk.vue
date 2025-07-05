<template>
    <div id="chatDetailPage" class="fixed inset-0 z-30 flex flex-col bg-white dark:bg-gray-900">
        <!-- 聊天详情顶部栏 -->
        <div
            class="flex items-center border-b border-gray-200 bg-white p-4 shadow-md dark:border-gray-700 dark:bg-gray-800">
            <button id="backToChatList" class="mr-4 text-2xl text-gray-600 focus:outline-none dark:text-gray-300">
                <i class="fas fa-arrow-left"></i>
            </button>
            <div class="flex flex-1 items-center space-x-3">
                <img id="chatDetailAvatar" alt="聊天对象头像"
                    class="h-10 w-10 rounded-full border-2 border-gray-300 object-cover dark:border-gray-600"
                    src="https://design.gemcoder.com/staticResource/echoAiSystemImages/42a4bfc64227265acd97da236caa27e1.png">
                <div>
                    <h2 id="chatDetailName" class="text-lg font-semibold text-gray-800 dark:text-white">张三</h2>
                    <p id="chatDetailStatus" class="text-sm text-gray-500 dark:text-gray-400">离线</p>
                </div>
            </div>
            <div class="flex space-x-4">
                <button class="text-xl text-gray-600 focus:outline-none dark:text-gray-300">
                    <i class="fas fa-phone"></i>
                </button>
                <button class="text-xl text-gray-600 focus:outline-none dark:text-gray-300">
                    <i class="fas fa-video"></i>
                </button>
                <button class="text-xl text-gray-600 focus:outline-none dark:text-gray-300">
                    <i class="fas fa-ellipsis-v"></i>
                </button>
            </div>
        </div>
        <!-- 聊天消息区域 -->
        <div id="chatMessages" class="custom-scrollbar flex-1 space-y-4 overflow-y-auto p-4">
            <div class="flex justify-start">
                <div class="max-w-[70%] p-3 rounded-lg bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white">
                    <p>你好，最近怎么样？</p>
                    <span class="block text-right text-xs mt-1 text-gray-500 dark:text-gray-400">10:28</span>
                </div>
            </div>
            <div class="flex justify-end">
                <div class="max-w-[70%] p-3 rounded-lg bg-blue-500 text-white">
                    <p>挺好的，你呢？</p>
                    <span class="block text-right text-xs mt-1 text-blue-100">10:29</span>
                </div>
            </div>
            <div class="flex justify-start">
                <div class="max-w-[70%] p-3 rounded-lg bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white">
                    <p>我也很好，有空一起吃饭？</p>
                    <span class="block text-right text-xs mt-1 text-gray-500 dark:text-gray-400">10:30</span>
                </div>
            </div>
        </div>
        <!-- 消息输入区域 -->
        <div class="flex items-center border-t border-gray-200 bg-white p-4 dark:border-gray-700 dark:bg-gray-800">
            <button class="mr-3 text-xl text-gray-600 focus:outline-none dark:text-gray-300">
                <i class="fas fa-plus-circle"></i>
            </button>
            <input type="text" id="messageInput" placeholder="输入消息..."
                class="flex-1 rounded-full bg-gray-100 p-3 text-gray-800 focus:ring-2 focus:ring-blue-500 focus:outline-none dark:bg-gray-700 dark:text-white">
            <button id="sendMessageBtn" class="ml-3 rounded-full bg-blue-600 p-3 text-white focus:outline-none">
                <i class="fas fa-paper-plane"></i>
            </button>
        </div>
    </div>
</template>
<script setup lang="ts">
import { useRoute } from 'vue-router';
const route = useRoute();
const chatId = route.params.id;
console.log("this is ChatTalk:",chatId);

</script>