<template>
    <header
        class="bg-primary-green flex items-center justify-between p-4 shadow-md"
    >
        <div class="flex items-center" v-show="!searchStatus">
            <Bars3Icon
                class="mr-4 h-8 w-8 text-white"
                id="menu"
                @clink="toggleMenu"
            />
            <span class="text-xl font-extrabold tracking-wide text-white"
                >vfree</span
            >
        </div>
        <div
            class="relative flex flex-grow items-center justify-end"
            v-show="!searchStatus"
        >
            <MagnifyingGlassIcon
                class="h-6 w-6 text-white"
                id="search"
                @click="search"
            />
        </div>
        <div
            class="relative flex flex-grow items-center justify-center"
            v-show="searchStatus"
        >
            <button
                class="absolute top-1/2 left-2 -translate-y-1/2 transform text-gray-500"
                @click="searchStatus = false"
            >
                <ArrowLeftIcon class="h-5 w-5 text-white" />
            </button>
            <input
                type="text"
                class="focus:ring-primary-green w-64 rounded-lg px-4 py-2 text-white focus:ring-2 focus:outline-none"
                placeholder="搜索..."
                @blur="searchStatus = false"
            />
        </div>
    </header>
    <div
        class="bg-opacity-50 fixed inset-0 z-20 bg-black transition-opacity"
        v-show="menuStatus"
        @click="menuStatus = false"
    ></div>
    <div
        class="fixed top-0 left-0 z-30 h-full w-64 transform bg-white shadow-lg transition-transform"
        :class="{
            'translate-x-0': menuStatus,
            '-translate-x-full': !menuStatus,
        }"
    >
        <nav class="p-4">
            <ul>
                <li class="py-2">
                    <a href="#" class="hover:text-primary-green text-gray-700"
                        >首页</a
                    >
                </li>
                <li class="py-2">
                    <a href="#" class="hover:text-primary-green text-gray-700"
                        >分类</a
                    >
                </li>
                <li class="py-2">
                    <a href="#" class="hover:text-primary-green text-gray-700"
                        >关于</a
                    >
                </li>
            </ul>
        </nav>
        <button
            class="hover:text-primary-green absolute top-4 right-4 text-gray-500"
            @click="menuStatus = false"
        >
            <ArrowLeftIcon class="h-6 w-6" />
        </button>
    </div>
</template>
<script>
import {
    MagnifyingGlassIcon,
    Bars3Icon,
    ArrowLeftIcon,
} from '@heroicons/vue/24/solid';
import rs_wasm from '@wasm-pkg/rs_wasm';
// 调用wasm
rs_wasm()
    .then((wasm) => {
        // console.log(wasm)
    })
    .catch(console.error);

// 调用tauri 后端api,直接获取结果
// import tauriInvoke from "@utils/tauri.invoke.js";

// 调用浏览器脚本
import getSystemType from '@utils/system.js';
console.log(getSystemType());

export default {
    data() {
        return {
            searchStatus: false,
            menuStatus: false,
        };
    },
    components: {
        MagnifyingGlassIcon,
        Bars3Icon,
        ArrowLeftIcon,
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
        },
    },
};
</script>
<style>
@import 'tailwindcss';
@import './assets/css/theme.css';
</style>
