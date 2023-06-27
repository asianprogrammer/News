<script setup>
import { RouterLink } from "vue-router";
import { ref } from "vue";
import Comment from "../components/icons/Comment.vue";
import LoveOutline from "../components/icons/LoveOutline.vue";
import Share from "../components/icons/Share.vue";
import NavBar from "../components/NaveBar.vue";

const title = ref("New news application launched recently")
const postLink = ref({
    link: "/news/post?show=New Application Released",
    img: "https://i0.wp.com/uxcrush.com/wp-content/uploads/2021/12/instagram-desktop-ui-in-figma.jpg"
})

</script>
<template>
    <NavBar />
    <section class="posts-container">
        <div v-for="i in 5" class="post center-X" :key="'string'+i">
            <RouterLink :to="postLink.link" class="post-title">
                <h3>{{ title }}</h3>
            </RouterLink>
            <div class="post-description-short">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati unde eveniet molestiae omnis saepe error, totam illum? Placeat sequi tempore perspiciatis, enim consectetur laboriosam voluptatem ea debitis laudantium neque nesciunt?</p>
            </div>
            <div class="post-image">
                <img width="100" height="100" :src="postLink.img" alt="Logo" :srcset="postLink.img">
            </div>
            <section class="user-action">
                <div class="list">
                    <div class="icon">
                        <LoveOutline />
                    </div>
                    <span class="count">0</span>
                </div>
                <div class="list">
                    <div class="icon">
                        <Comment />
                    </div>
                    <span class="count">0</span>
                </div>
                <div class="list">
                    <div class="icon">
                        <Share />
                    </div>
                    <span class="count">0</span>
                </div>
            </section>
        </div>
    </section>
</template>