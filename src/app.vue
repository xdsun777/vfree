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
// import tauriInvoke from "@utils/tauri.invoke.js";

// 调用浏览器脚本
import getSystemType from '@utils/system.js';
console.log(getSystemType());

export default {
    data() {
        return {
            light: 'light',
            dark: 'dark',
        };
    },
    components: {},
    methods: {
        toogle() {
            const html = document.querySelector('html');
            html.setAttribute(
                'data-bs-theme',
                html.getAttribute('data-bs-theme') === this.light
                    ? this.dark
                    : this.light,
            );
        },
    },
};
</script>
<style>
@import 'tailwindcss';
/* 重置默认样式 */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-style: normal; /* 全局设置字体样式为正常 */
}
/* 自定义滚动条样式 */
::-webkit-scrollbar {
    width: 0; /* 隐藏滚动条 */
    background: transparent; /* 使滚动条背景透明 */
}
</style>
