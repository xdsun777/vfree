<template>
    <RouterView />
</template>
<script>
// 调用wasm
const rs_wasm = __WASM__ ? import('@wasm/rs_wasm') : false;
console.log('rs_wasm', rs_wasm);
rs_wasm
    .then((wasm) => {
        wasm.default();
    })
    .catch((e) => {
        console.error('wasm error', e);
    });

// 调用tauri 后端api,直接获取结果
import tauriInvoke from '@utils/tauri.invoke.js';

// 调用浏览器脚本
import getSystemType from '@utils/system.js';
console.log(getSystemType());

export default {};
</script>
<style>
@import 'tailwindcss';
@import './assets/css/theme.css';
</style>
