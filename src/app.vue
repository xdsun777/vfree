<template>
    <header class="bg-primary-green flex items-center justify-between p-4 shadow-md">
        <!-- 菜单按钮 -->
        <div class="flex items-center" v-show="!searchStatus">
            <Bars3Icon class="mr-4 h-8 w-8 text-white" @click="toggleMenu" />
            <span class="text-xl font-extrabold tracking-wide text-white">vfree</span>
        </div>
        <!-- 搜索按钮 -->
        <div class="relative flex flex-grow items-center justify-end" v-show="!searchStatus">
            <MagnifyingGlassIcon class="h-6 w-6 text-white" @click="search" />
        </div>
        <!-- 搜索框 -->
        <div class="relative flex flex-grow items-center justify-center" v-show="searchStatus">
            <button class="absolute top-1/2 left-2 -translate-y-1/2 transform text-gray-500"
                @click="searchStatus = false">
                <ArrowLeftIcon class="h-5 w-5 text-white" />
            </button>
            <input type="text"
                class="focus:ring-primary-green w-64 rounded-lg px-4 py-1 text-white focus:ring-2 focus:outline-none"
                placeholder="搜索..." @blur="searchStatus = false" />
        </div>
    </header>
    <!-- 菜单遮罩 -->
    <div class="bg-opacity-50 fixed inset-0 z-20 bg-gray transition-opacity" v-show="menuStatus"
        @click="menuStatus = false"></div>
    <!-- 左侧菜单 -->
    <div class="fixed top-0 left-0 z-30 h-full w-64 transform bg-white shadow-lg transition-transform" :class="{
        'translate-x-0': menuStatus,
        '-translate-x-full': !menuStatus,
    }">
        <nav class="p-4">
            <ul>
                <li class="py-2">
                    <a href="#" class="hover:text-primary-green text-gray-700">首页</a>
                </li>
                <li class="py-2">
                    <a href="#" class="hover:text-primary-green text-gray-700">分类</a>
                </li>
                <li class="py-2">
                    <a href="#" class="hover:text-primary-green text-gray-700">关于</a>
                </li>
            </ul>
        </nav>
        <button class="hover:text-primary-green absolute top-4 right-4 text-gray-500" @click="toggleTheme">
            <SunIcon v-if="themeStatusIsLight" class="h-6 w-6" />
            <MoonIcon v-else class="h-6 w-6" />
        </button>
    </div>
    <!-- 主体窗口 -->
    <main class="flex-1 overflow-y-auto pb-20">
        <div class="flex items-center p-4 border-b border-gray-200 cursor-pointer chat-item" data-chat-id="telegram">
     <div class="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center text-white text-lg font-bold mr-4">
      <img alt="Telegram Official" class="w-full h-full object-cover rounded-full" src="https://design.gemcoder.com/staticResource/echoAiSystemImages/96b90b42bd9eba6a95e1210a2483f2af.png">
     </div>
     <div class="flex-1">
      <div class="flex justify-between items-center">
       <h2 class="text-gray-800 text-base font-semibold">
        Telegram
       </h2>
       <span class="text-gray-500 text-xs">
        12:34 PM
       </span>
      </div>
      <p class="text-gray-600 text-sm truncate">
       Welcome to Telegram! This is your first message.
      </p>
     </div>
    </div>
    </main>
    <!-- 底部按钮 -->
    <div class="fixed bottom-4 right-4 flex flex-col space-y-4">
        <a class="w-14 h-14 rounded-full shadow-lg flex items-center justify-center text-2xl">
            <PlusIcon class="text-gray-600" />
        </a>
    </div>
</template>
<script>
import {
    MagnifyingGlassIcon,
    Bars3Icon,
    ArrowLeftIcon,
    SunIcon,
    MoonIcon,
    PlusIcon
} from '@heroicons/vue/24/solid';
import rs_wasm from '@wasm-pkg/rs_wasm';
// 调用wasm
rs_wasm()
    .then((wasm) => {
        // console.log(wasm)
    })
    .catch(console.error);

// 调用tauri 后端api,直接获取结果
import tauriInvoke from "@utils/tauri.invoke.js";

// 调用浏览器脚本
import getSystemType from '@utils/system.js';
console.log(getSystemType());

export default {
    data() {
        return {
            searchStatus: false,
            menuStatus: false,
            themeStatusIsLight: true, // 主题状态
        };
    },
    components: {
        MagnifyingGlassIcon,
        Bars3Icon,
        ArrowLeftIcon,
        SunIcon,
        MoonIcon,
        PlusIcon
    },
    methods: {
        search() {
            // 处理搜索逻辑
            console.log('Search clicked');
            this.searchStatus = true;
        },
        toggleMenu() {
            // 处理菜单切换逻辑
            console.log('Menu toggled');
            this.menuStatus = true;
        },
        toggleTheme() {
            // 切换主题状态
            this.themeStatusIsLight = !this.themeStatusIsLight;
            this.updateDarkClass();
            localStorage.setItem('themeIsLight', this.themeStatusIsLight);

        },
        updateDarkClass() {
            if (this.themeStatusIsLight) {
                document.querySelector('html').setAttribute('data-theme', 'light');
            } else {
                document.querySelector('html').setAttribute('data-theme', 'dark');
            }
        }
    },
    mounted() {
        // 初始化主题状态
        this.themeStatusIsLight = localStorage.getItem('themeIsLight') === 'true' || (window.matchMedia('(prefers-color-scheme: dark)').matches && !localStorage.getItem('themeIsLight'));
        console.log("初始化themeStatusIsLight:", this.themeStatusIsLight);
        this.updateDarkClass();
    },
};
</script>
<style>
@import 'tailwindcss';
@import './assets/css/theme.css';
</style>
