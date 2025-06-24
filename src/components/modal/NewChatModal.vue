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
<script lang="js">
export default {
    name: 'NewChatModal',
    data() {
        return {
            tipMessage: {
                text: '请输入聊天ID',
                type: 'info', // 可以是 'info', 'success', 'error' 'null'等
                style: 'text-gray-600 dark:text-gray-400',
            },
            idX: '',
        };
    },
    emits: ['close'],
    methods: {
        closeModal() {
            this.idX = ''; // 清空输入框
            this.$emit('close');
        },
        connect() {
            if (this.idX.trim() === '') {
                this.tipMessage.type = 'info';
            } else if (this.idX.length < 5) {
                this.tipMessage.type = 'error';
            } else {
                this.tipMessage.type = 'success';
                // 这里可以添加连接逻辑
            }
        },
    },
    computed: {
        // 可以添加计算属性来处理数据
        choseTipMessage() {
            if (this.tipMessage.type === 'info') {
                return {
                    text: '请输入聊天ID',
                    style: 'text-gray-600 dark:text-gray-400',
                };
            } else if (this.tipMessage.type === 'success') {
                return {
                    text: '连接成功',
                    style: 'text-primary-green dark:text-primary-green',
                };
            } else if (this.tipMessage.type === 'error') {
                return {
                    text: '聊天ID长度不能小于5',
                    style: 'text-red-500 dark:text-red-400',
                };
            } else {
                return '请输入聊天ID';
            }
        },
    },
};
</script>
<style scoped></style>
