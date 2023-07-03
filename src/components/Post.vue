<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";
import { RouterLink } from "vue-router";
import Comment from "../components/icons/Comment.vue";
import LoveOutline from "../components/icons/LoveOutline.vue";
import Share from "../components/icons/Share.vue";
import TopPost from "../components/TopPost.vue";

let loading = ref(true);
let post_data = ref([]);
let imag_loading = ref(true)

onMounted(async () => {
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/photos/?_limit=10')
        post_data = await response.data;
        loading.value = false;
    } catch (e) {
        console.log(e)
    }
})

</script>

<template>
    <section v-if="loading === false" class="posts-container">

        <div class="post">
            <TopPost />
        </div>

        <div v-for="data in post_data" :key="data.id" class="post">
            <RouterLink to="/" class="post-title">
                <h3>{{ data.title }}</h3>
            </RouterLink>
            <div v-if="data.body" class="post-description-short">
                <p>{{ data.body }}</p>
            </div>

            <span v-if="imag_loading === true && data.url">Image Loading..</span>
            <div v-if="data.url" class="post-image">
                <img width="100" height="100" :src="data.url" alt="Logo" :srcset="data.url" @load="imag_loading = false">
            </div>

            <section class="user-action">
                <div class="list">
                    <div class="icon">
                        <LoveOutline />
                    </div>
                    <span class="count">{{Math.round(Math.random(10) * 200)}}</span>
                </div>
                <div class="list">
                    <div class="icon">
                        <Comment />
                    </div>
                    <span class="count">{{Math.round(Math.random(10) * 200)}}</span>
                </div>
                <div class="list">
                    <div class="icon">
                        <Share />
                    </div>
                    <span class="count">{{Math.round(Math.random(10) * 200)}}</span>
                </div>

            </section>
        </div>
    </section>

    <div v-else>
        <h1>Loading...</h1>
    </div>

</template>