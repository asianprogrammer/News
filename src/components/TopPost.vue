<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
    <section>
        <h4>Top POST</h4>
        <div class="list flex">
            <RouterLink to="/">New news application launched recently</RouterLink>
            <RouterLink to="/">Warning! Are You Sabotaging Your Wealth?</RouterLink>
            <RouterLink to="/">Let's Stop Feeling Broke</RouterLink>
        </div>
    </section>
</template>
<style scoped>
.list {
    padding: 15px 0;
    margin: 10px 0;
    flex-direction: column;
}

.list a {
    margin: 5px 0;
    max-width: 300px;
    padding: 10px 20px;
    overflow: hidden;
    white-space: nowrap;
    border-radius: 4px;
    text-overflow: ellipsis;
}

.list a:hover {
    background: var(--gray);
}
</style>