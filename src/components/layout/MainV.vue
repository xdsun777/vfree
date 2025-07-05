<template>
    <!-- 主体窗口 -->
    <main class="dark:bg-primary-dark-3 flex-1 overflow-y-auto pb-20">
        <ChatList v-for="item in chatList" :key="item.id"/>
    </main>
</template>
<script setup lang="ts">
import ChatList from '@components/main/ChatList.vue'

const chatList = [
  { id: 'telegram'},
  { id: 'wechat'},
];

</script>
<style scoped></style>
