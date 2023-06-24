<script>
import { ref } from 'vue'
export default {
    emits: ["actionLogin"],
    setup(){
        const usernameError = ref('');
        const passwordError = ref('');
    },
    methods: {
        changeAuth() {
            this.$emit("actionLogin", 'SignUp')
        }
    }
}
</script>

<template>
    <main class="center">
        <div class="logo-auth center">
            <img width="200" height="200" src="../assets/img/logo.png" alt="News Application">
        </div>
        <h4>Sign In</h4>
        <span style="color: var(--gray-dark);">You don't have an account? <span @click="changeAuth" class="min-text-btn">Register</span></span>
    </main>
    <form class="center-X" action="#" @submit.prevent="false">
        <div class="input">
            <input id="usernameError" required type="text">
            <label for="usernameError">username</label>
        </div>
        <span v-if="usernameError" class="error">{{usernameError}}</span>
        <div class="input">
            <input id="passwordError" required type="passwordError">
            <label for="passwordError">password</label>
        </div>
        <div v-if="passwordError" >
            <span class="error">{{passwordError}}</span>
            <br><br>
        </div>
        <div class="center">
            <button class="btn">Login</button>
        </div>
    </form>
</template>
<style>
body::v-deep {
    background: red;
} 

</style>