<template>
    <header
        class="bg-primary-green dark:bg-primary-dark-1 flex items-center justify-between p-4 shadow-md"
    >
        <!-- 菜单按钮 -->
        <div class="flex items-center" v-show="!searchStatus">
            <Bars3Icon
                class="mr-4 h-8 w-8 text-white"
                @click="changeMenuStatus"
            />
            <span class="text-xl font-extrabold tracking-wide text-white"
                >vfree</span
            >
        </div>
        <!-- 搜索按钮 -->
        <div
            class="relative flex flex-grow items-center justify-end"
            v-show="!searchStatus"
        >
            <MagnifyingGlassIcon class="h-6 w-6 text-white" @click="search" />
        </div>
        <!-- 搜索框 -->
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
                class="w-64 rounded-lg px-4 py-1 text-white focus:border-none focus:outline-none"
                placeholder="搜索..."
                @blur="searchStatus = false"
            />
        </div>
    </header>
    <!-- 菜单遮罩 -->
    <MenuModal v-show="MStatus" @click="changeMenuStatus" />
    <MenuV v-show="MStatus" :menuStatus="MStatus"/>
</template>
<script setup lang="ts">
import {
    MagnifyingGlassIcon,
    Bars3Icon,
    ArrowLeftIcon,
} from '@heroicons/vue/24/solid';
import MenuV from '@components/layout/MenuV.vue';
import MenuModal from '@components/modal/MenuModal.vue';
import { ref } from 'vue';

const searchStatus = ref<boolean>(false);
const MStatus = ref<boolean>(false);

function changeMenuStatus() {
    // 更新菜单状态
    console.log('Menu MStatus changed:', MStatus.value);
    MStatus.value = !MStatus.value;
}
function search() {
    // 处理搜索逻辑
    console.log('Search clicked');
    searchStatus.value = true;
}
</script>
<style scoped></style>
