<script setup>
import NavBar from "../components/NaveBar.vue";
import Post from "../components/Post.vue";
</script>
<template>
    <NavBar />
    <section class="flex align-item-center container">
        <Post />
    </section>
</template>
<style scoped>
.container {
    margin: 0;
    padding: 0;
    width: 100%;
    align-items: flex-start;
    justify-content: center;
}

.top-post {
    top: 120px;
    right: 50px;
    z-index: 9;
    padding: 15px 20px;
    border-radius: 4px;
    background: #ffffff;
    box-shadow: 4px 5px 13px 0px rgba(0, 0, 0, 0.05);
}



</style>