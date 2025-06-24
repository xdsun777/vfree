<template>
    <RouterView />
</template>
<script>
import rs_wasm from '@wasm-pkg/rs_wasm';
// 调用wasm
rs_wasm()
    .then((wasm) => {
        // console.log(wasm)
    })
    .catch(console.error);

// 调用tauri 后端api,直接获取结果
import tauriInvoke from '@utils/tauri.invoke.js';

// 调用浏览器脚本
import getSystemType from '@utils/system.js';
import { RouterView } from 'vue-router';
console.log(getSystemType());

export default {};
</script>
<style>
@import 'tailwindcss';
@import './assets/css/theme.css';
</style>
