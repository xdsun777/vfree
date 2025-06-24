<template>
    <HeaderV />
    <MainerV />
    <FooterV />
</template>
<script>
import HeaderV from '@components/layout/Header.vue';
import MainerV from '@components/layout/Mainer.vue';
import FooterV from '@components/layout/Footer.vue';
export default {
    name: 'HomeView',
    components: {
        HeaderV,
        MainerV,
        FooterV,
    },
};
</script>
<style scoped></style>
