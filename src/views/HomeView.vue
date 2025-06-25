<template>
    <HeaderV />
    <MainV />
    <FooterV />
</template>
<script>
import HeaderV from '@components/layout/Header.vue';
import MainV from '@components/layout/MainV.vue';
import FooterV from '@components/layout/FooterV.vue';
export default {
    name: 'HomeView',
    components: {
        HeaderV,
        MainV,
        FooterV,
    },
};
</script>
<style scoped></style>
