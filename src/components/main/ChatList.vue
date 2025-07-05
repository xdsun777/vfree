<template>
<div
        class="relative"
        @touchstart="onTouchStart"
        @touchmove="onTouchMove"
        @touchend="onTouchEnd"
        @click="toChat(id)"
    >
        <!-- 右侧操作按钮 -->
        <div
            class="absolute right-0 top-0 h-full flex items-center transition-all duration-300"
            :class="{ 'w-24': showOptions, 'w-0': !showOptions, 'overflow-hidden': true }"
        >
            <button
                class="bg-red-500 text-white px-4 py-2 rounded-l absolute right-2"
                @click.stop="onDelete"
            >
                删除
            </button>
        </div>
        <!-- 聊天项 -->
        <div
            class="chat-item flex transform cursor-pointer items-center p-4 transition-transform duration-300 hover:scale-101 bg-white"
            :style="{ transform: showOptions ? 'translateX(-6rem)' : 'translateX(0)' }"
            data-chat-id="telegram"
        >
            <div
                class="mr-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-500 text-lg font-bold text-white"
            >
                <img alt="自动生成头像" class="h-full w-full rounded-full object-cover" src="" />
            </div>
            <div class="flex-1">
                <div class="flex items-center justify-between">
                    <h2 class="text-base font-semibold text-gray-800 dark:text-white">
                        名字
                    </h2>
                    <span class="dark:text-primary-dark-0 text-xs text-gray-500">
                        时间
                    </span>
                </div>
                <p class="dark:text-primary-dark-0 truncate text-sm text-gray-600">
                    最新消息
                </p>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
defineProps({
    id:String
})
const router = useRouter();

const showOptions = ref(false);
let startX = 0;
let endX = 0;

function onTouchStart(e: TouchEvent) {
    startX = e.touches[0].clientX;
}
function onTouchMove(e: TouchEvent) {
    endX = e.touches[0].clientX;
}
function onTouchEnd() {
    if (endX - startX < -50) {
        // 右滑显示选项
        showOptions.value = true;
    } else if (endX - startX > 50) {
        // 左滑关闭选项
        showOptions.value = false;
    }
}

function onDelete() {
    // 删除逻辑
    alert('删除操作');
}


function toChat(id: string) {
    router.push(`/chat/${id}`);
}

</script>