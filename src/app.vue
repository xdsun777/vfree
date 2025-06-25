<template>
    <RouterView />
</template>
<script lang="ts">
import { defineComponent } from 'vue';
// 调用wasm
const rs_wasm = __WASM__ ? import('@wasm/rs_wasm.d.ts') : false;
console.log('rs_wasm', rs_wasm);
rs_wasm
    .then((wasm) => {
        wasm.default();
    })
    .catch((e) => {
        console.error('wasm error', e);
    });

// 调用tauri 后端api,直接获取结果
import('@utils/tauri.invoke.ts');

// 调用浏览器脚本
import getSystemType from '@/utils/system.ts';
console.log(getSystemType());

export default defineComponent({
    name: 'App',
});
</script>
<style>
@import 'tailwindcss';
@import './assets/css/theme.css';
</style>
