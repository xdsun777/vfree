// 调用tauri的方法,暴露结果给vue3
// 注意：在vue3中，需要使用async/await来调用tauri的方法

import { invoke } from '@tauri-apps/api/core';
console.log('__TAURI_INTERNALS__', '__TAURI_INTERNALS__' in window);
function tauriInvoke() {
    if ('__TAURI_INTERNALS__' in window) {
        return invoke;
    } else {
        console.error('警告：没有invoke属性，不是在tauri环境下');
        return undefined;
    }
}
if ('__TAURI_INTERNALS__' in window) {
    invoke('test').then((res) => {
        console.log(res);
    });
    invoke('greet', { name: '张三' }).then((res) => {
        console.log(res);
    });

    const name:string = '张三';
    async function rs_greet() {
        return await invoke('greet', { name });
    }
    rs_greet().then((res) => {
        console.log(res);
    });

    invoke('get_system_info')
        .then((res) => {
            console.log('系统信息:', res);
        })
        .catch((err) => {
            console.error('获取系统信息失败:', err);
        });
}

export default tauriInvoke;
