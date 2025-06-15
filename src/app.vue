<template>
    <div id="app">
        <button @click="count++">{{ count }}</button>
        <img alt="rspack logo" height="200" src="@assets/navbar-logo-dark.png" width="200" />
    </div>
</template>

<script>

import rs_wasm  from '@wasm-pkg/rs_wasm';

rs_wasm().then((wasm)=>{
    console.log(wasm.add(1, 5))
  
}).catch(console.error)


export default {
    data() {
        return {
            count: 0
        }
    }
}
</script>

<style></style>