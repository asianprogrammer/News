<script>
import { ref } from 'vue';
export default {
    emits: ["actionLogin"],
    setup() {
        const first_name_error = ref('');
        const last_name_error = ref('');
        const usernameError = ref('');
        const passwordError = ref('');
        return {
            first_name_error,
            last_name_error,
            usernameError,
            passwordError
        }
    },

    methods: {
        changeAuth() {
            this.$emit("actionLogin", "SignIn")
        }
    }
}
</script>

<template>
    <main class="center margin-bottom-4px">
        <div class="logo-auth center">
            <img width="200" height="200" src="../assets/img/logo.png" alt="News Application">
        </div>
        <h4>Sign Up</h4>
        <span style="color: var(--gray-dark);">Already have an account? <span @click="changeAuth"
                class="min-text-btn">Login</span></span>
    </main>
    <form class="center-X" action="#" @submit.prevent="false">
        <div class="input">
            <input id="first_name_error" required type="text">
            <label for="first_name_error">First Name</label>
        </div>
        <span v-if="first_name_error" class="error">{{ first_name_error }}</span>
        <div class="input">
            <input id="last_name_error" required type="text">
            <label for="last_name_error">Last Name</label>
        </div>
        <span v-if="last_name_error" class="error">{{ last_name_error }}</span>
        <div class="input">
            <input id="usernameError" required type="text">
            <label for="usernameError">username</label>
        </div>
        <span v-if="usernameError" class="error">{{ usernameError }}</span>
        <div class="input">
            <input id="passwordError" required type="passwordError">
            <label for="passwordError">password</label>
        </div>
        <div v-if="passwordError">
            <span class="error">{{ passwordError }}</span>
            <br><br>
        </div>
        <div class="center">
            <button class="btn">Create Account</button>
        </div>
    </form>
</template>
