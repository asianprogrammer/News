<script setup>
import NaveBar from "../components/NaveBar.vue"
</script>

<template>
    <NaveBar />
    <span>Post {{ this.$route.query.show }}</span>
</template>