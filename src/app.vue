<template>
    <RouterView />
</template>
<script setup lang="ts">
//  不要加 @ts-nocheck
// /* eslint-disable */
// defineOptions({ name: 'App' }); // 定义组件名称,可不定义，会自动推断
declare const __WASM__: boolean;
import { onMounted } from 'vue';

// 调用wasm
onMounted(() => {
    const rs_wasm:Promise|false = __WASM__ ? import('@wasm/rs_wasm') : false;
    if (rs_wasm && typeof rs_wasm.then === 'function') {
        rs_wasm
            .then((wasm) => {
                wasm.default();
            })
            .catch((e) => {
                console.error('wasm error', e);
            });
    }else console.warn("__WASM__ is false, wasm not loaded");
    // 调用tauri 后端api,直接获取结果
    import('@utils/tauri.invoke.ts');

    // 调用浏览器脚本
    const System = import('@/utils/system.ts');
    System.then((sys) => {
        console.log('system js output:', sys.default());
    }).catch((e) => {
        console.warn('System script error', e);
    });

    // 调用axios请求json-server 示例
    // const rs = import('@apis/api.ts');
    // rs.then((api) => {
    //     api.default
    //         .get('/get')
    //         .then((response) => {
    //             console.log('API response:', response);
    //         })
    //         .catch((error) => {
    //             console.error('API error:', error);
    //         });
    // }).catch((e) => {
    //     console.warn('API script error', e);
    // });
});
</script>
<style>
@import 'tailwindcss';
@import './assets/css/theme.css';
</style>
