<template>
    <!-- 左侧菜单 -->
    <div
        class="dark:bg-primary-dark-2 fixed top-0 left-0 z-30 h-full w-64 transform bg-white shadow-lg transition-transform duration-300 ease-in-out"
        :class="{
            'translate-x-0': menuStatus,
            '-translate-x-full': !menuStatus,
        }"
    >
        <NavV />
        <button
            class="hover:text-primary-green absolute top-4 right-4 text-gray-500"
            @click="toggleTheme"
        >
            <SunIcon v-if="themeStatusIsLight" class="h-6 w-6" />
            <MoonIcon v-else class="h-6 w-6" />
        </button>
    </div>
</template>
<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { SunIcon, MoonIcon } from '@heroicons/vue/24/solid';
import NavV from '@components/layout/NavV.vue';
defineProps<{
    menuStatus: boolean;
}>();

const themeStatusIsLight = ref<boolean>(true); // 主题状态

onMounted(() => {
    // 初始化主题状态
    themeStatusIsLight.value =
        localStorage.getItem('themeIsLight') === 'true' ||
        (window.matchMedia('(prefers-color-scheme: dark)').matches &&
            !localStorage.getItem('themeIsLight'));
    console.log('初始化themeStatusIsLight:', themeStatusIsLight.value);
    updateDarkClass();
});

function updateDarkClass() {
    // 切换主题
    const htmlEl = document.querySelector('html');
    if (!htmlEl) return;
    if (themeStatusIsLight.value) {
        htmlEl.setAttribute('data-theme', 'light');
    } else {
        htmlEl.setAttribute('data-theme', 'dark');
    }
}

function toggleTheme() {
    // 切换主题状态
    themeStatusIsLight.value = !themeStatusIsLight.value;
    updateDarkClass();
    localStorage.setItem('themeIsLight', themeStatusIsLight.value.toString());
}


</script>

<style scoped></style>
