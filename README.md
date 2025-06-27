# vfree

p2p加密无服务器即时通讯程序

## 开发环境要求

`node v20.15.1`
`rustc 1.86.0`

| 浏览器          | 最低支持版本 |
| :-------------- | :----------- |
| Chrome          | 90           |
| Firefox         | 78           |
| Safari          | 14.1         |
| Edge            | 91           |
| Opera           | 76           |
| iOS Safari      | 14.5         |
| Android Browser | 109          |

## 技术架构

### 前端

`rspack`

`vue3`

`tailwindcss4`

`rust WebAssembly`

`WebRtc`

### 后端

`rust tauri2`

## 部署

### 环境安装

```powershell
winget install "NVM for Windows"
nvm install 20.15.1
nvm use 20.15.1
# rust安装参照：https://www.rust-lang.org/zh-CN/tools/install
```

涉及`tauri`请[参考](https://tauri.nodejs.cn/start/prerequisites/)

### 项目部署

```powershell
git clone https://github.com/xdsun777/vfree.git

cd vfree
npm install
npm run dev:serve

cargo install
# 若安装rust可运行，不运行暂时不会有影响
npm run wasm:build
# 打包桌面程序必须安装rust
cd src-tauri
cargo install
npm run tauri

# 安卓平台
cargo tauri android init
cargo tauri android dev
cargo tauri android build
```

## 构建

### 签名

[https://v2.tauri.app/distribute/sign/android/](https://v2.tauri.app/distribute/sign/android/)


