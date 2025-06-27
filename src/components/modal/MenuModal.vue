<template>
    <div
        @click="emit('click')"
        class="bg-opacity-50 bg-gray fixed inset-0 z-20 transition-opacity"
    ></div>
</template>
<script setup lang="ts">
const emit = defineEmits<{
    (e: 'click'): void;
}>();
</script>
