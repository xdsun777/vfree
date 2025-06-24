<template>
    <!-- 左侧菜单 -->
    <div
        class="dark:bg-primary-dark-2 fixed top-0 left-0 z-30 h-full w-64 transform bg-white shadow-lg transition-transform"
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
<script>
import { SunIcon, MoonIcon } from '@heroicons/vue/24/solid';
import NavV from '@components/layout/NavV.vue';

export default {
    name: 'MenuV',
    props: ['menuStatus'],
    data() {
        return {
            searchStatus: false,
            themeStatusIsLight: true, // 主题状态
        };
    },
    methods: {
        toggleTheme() {
            // 切换主题状态
            this.themeStatusIsLight = !this.themeStatusIsLight;
            this.updateDarkClass();
            localStorage.setItem('themeIsLight', this.themeStatusIsLight);
        },
        updateDarkClass() {
            if (this.themeStatusIsLight) {
                document
                    .querySelector('html')
                    .setAttribute('data-theme', 'light');
            } else {
                document
                    .querySelector('html')
                    .setAttribute('data-theme', 'dark');
            }
        },
    },
    mounted() {
        // 初始化主题状态
        this.themeStatusIsLight =
            localStorage.getItem('themeIsLight') === 'true' ||
            (window.matchMedia('(prefers-color-scheme: dark)').matches &&
                !localStorage.getItem('themeIsLight'));
        console.log('初始化themeStatusIsLight:', this.themeStatusIsLight);
        this.updateDarkClass();
    },
    components: {
        SunIcon,
        MoonIcon,
        NavV
    },
};
</script>

<style scoped></style>
