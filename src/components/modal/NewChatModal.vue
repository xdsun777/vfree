<template>
    <div
        class="bg-gray bg-opacity-50 fixed inset-0 z-50 flex items-center justify-center"
    >
        <div
            class="w-11/12 max-w-md rounded-lg bg-white p-6 shadow-xl dark:bg-gray-800"
        >
            <h2
                class="mb-4 text-xl font-semibold text-gray-800 dark:text-white"
            >
                新建聊天
            </h2>
            <input
                type="text"
                placeholder="请输入聊天ID"
                v-model="idX"
                @keyup.enter="connect"
                @blur="connect"
                class="mb-4 w-full rounded-lg border border-gray-300 bg-gray-50 p-3 text-gray-800 focus:ring-2 focus:ring-blue-500 focus:outline-none dark:border-gray-600 dark:bg-gray-700 dark:text-white"
            />
            <p
                :class="choseTipMessage.style"
                class="mb-4 text-center text-sm text-gray-600 dark:text-gray-400"
            >
                {{ choseTipMessage.text }}
            </p>
            <div class="flex justify-end space-x-4">
                <button
                    @click="closeModal"
                    class="rounded-lg bg-gray-200 px-4 py-2 text-gray-800 hover:bg-gray-300 focus:outline-none dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600"
                >
                    取消
                </button>
                <button
                    @click="connect"
                    class="bg-primary-green hover:bg-primary-green-700 rounded-lg px-4 py-2 text-white focus:outline-none"
                >
                    连接
                </button>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
type TipType = 'info' | 'success' | 'error';
interface TipMessage {
    text: string;
    type: TipType;
    style: string;
}

// 聊天ID输入
const idX = ref<string>('');

// 提示信息
const tipMessage = ref<TipMessage>({
    text: '请输入聊天ID',
    type: 'info',
    style: 'text-gray-600 dark:text-gray-400',
});

// 关闭模态框事件
const emit = defineEmits<{
    (e: 'close'): void;
}>();

function closeModal() {
    idX.value = '';
    emit('close');
}

function connect() {
    if (idX.value.trim() === '') {
        tipMessage.value.type = 'info';
    } else if (idX.value.length < 5) {
        tipMessage.value.type = 'error';
    } else {
        tipMessage.value.type = 'success';
        // 这里可以添加连接逻辑
    }
}

// 计算属性：根据类型返回不同的提示内容和样式
const choseTipMessage = computed(() => {
    switch (tipMessage.value.type) {
        case 'success':
            return {
                text: '连接成功',
                style: 'text-primary-green dark:text-primary-green',
            };
        case 'error':
            return {
                text: '聊天ID长度不能小于5',
                style: 'text-red-500 dark:text-red-400',
            };
        default:
            return {
                text: '请输入聊天ID',
                style: 'text-gray-600 dark:text-gray-400',
            };
    }
});
</script>
<style scoped></style>
