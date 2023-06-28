<script setup>
import NavBar from "../components/NaveBar.vue";
import Post from "../components/Post.vue";
import TopPost from "../components/TopPost.vue";
</script>
<template>
    <NavBar />
    <section class="flex align-item-center container">
        <Post />
        <TopPost class="top-post" />
    </section>
</template>
<style scoped>
.container {
    width: 90%;
    align-items: center;
    justify-content: center;
}

.top-post {
    top: 120px;
    right: 50px;
    z-index: 9;
    padding: 15px 20px;
    position: fixed;
    border-radius: 4px;
    background: #ffffff;
    box-shadow: 4px 5px 13px 0px rgba(0, 0, 0, 0.05);
}

@media only screen and (max-width: 1170px) {
    .container {
        width: 80%;
    }
}

@media only screen and (max-width: 800px) {
    .top-post {
        position: static;
        align-items: normal;
        flex-direction: column-reverse;
    }

    .container {
        width: 100%;
        flex-direction: column-reverse;
    }
}
</style>