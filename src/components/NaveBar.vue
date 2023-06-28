<script setup>
import { ref } from "vue";
import Search from "./icons/Search.vue";
import Logout from "./icons/Logout.vue";
const showProfile = ref(false)

</script>

<template>
    <nav class="flex">

        <div class="flex align-item-center">
            <div class="icon user-select-none">
                <img width="100" height="100" src="../assets/img/logo.png" alt="News Logo" srcset="../assets/img/logo.png">
            </div>
            <div class="nav-title">
                <h4>News</h4>
            </div>
        </div>

        <!-- Profile and search button -->
        <div class="right-side flex align-item-center">
            <form class="flex align-item-center" @submit.prevent="">
                <div class="search">
                    <input type="text" placeholder="Search News" required>
                </div>
                <div class="search-btn flex">
                    <Search />
                </div>
            </form>
            <div @click="showProfile = !showProfile" class="profile-small">
                <img width="100" height="100" src="../assets/img/don.jpg" alt="Don" srcset="../assets/img/don.jpg">
            </div>

        </div>
    </nav>

    <!-- User logout popup -->
    <div v-show="showProfile == true" class="user-profile-popup">

        <RouterLink to="/" class="flex align-item-center user-select-none">
            <div class="profile-small">
                <img width="100" height="100" src="../assets/img/don.jpg" alt="Don" srcset="../assets/img/don.jpg">
            </div>
            <h6>&nbsp; &nbsp;David Amah</h6>
        </RouterLink>

        <div @click="showProfile = false" class="flex item align-item-center">
            <div class="icon-s">
                <Logout />
            </div>
            <span class="red">Logout</span>
        </div>

    </div>

    <!-- Break line for nave bar -->
    <div class="break">
        <br><br><br><br>
    </div>
</template>
<style scoped>
nav {
    top: 0;
    left: 0;
    width: 100%;
    position: fixed;
    overflow: hidden;
    max-height: 80px;
    align-items: center;
    background: #ffffff;
    justify-content: space-between;
    box-shadow: 3px 0 5px rgb(199, 199, 199);
}

.right-side {
    margin-right: 40px;
}

.search input {
    padding: 10px;
}

.search-btn {
    width: 40px;
    height: 40px;
    padding: 5px;
    cursor: pointer;
    margin-right: 15px;
    margin-left: 2px;
    align-items: center;
    justify-content: center;
    border-radius: 4px;
    background: var(--white-gray);
}

.search-btn:hover {
    background: var(--gray);
}

.user-profile-popup {
    top: 90px;
    right: 20px;
    width: 100%;
    padding: 10px;
    max-width: 250px;
    border-radius: 5px;
    position: absolute;
    background: #ffffff;
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.178);
}

.user-profile-popup::after {
    top: -30px;
    content: '';
    right: 25px;
    position: absolute;
    border: solid 15px transparent;
    border-bottom-color: #ffffff;
}

.user-profile-popup::before {
    top: -32px;
    content: '';
    right: 25px;
    opacity: .1;
    position: absolute;
    filter: blur(2px);
    border: solid 15px transparent;
    border-bottom-color: #000000;
}

.item {
    padding: 5px;
    margin-top: 13px;
    cursor: pointer;
}

.item:hover {
    background: #ffeeee;
}

.red {
    color: red;
}

.icon-s {
    width: 30px;
    height: 30px;
    margin: 0 5p;
}

.icon-s svg {
    fill: red;
}

.icon {
    width: 70px;
    height: 70px;
    margin-left: 10px;
}
</style>