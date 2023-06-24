<script>
export default {
    methods: {
        changeAuth(){
            this.$emit("actionLogin", 'SignUp')
        }
    }
}
</script>

<template>
    <section>
        <main>
            <div class="logo">
                <img width="200" height="200" src="../assets/img/logo.png" alt="News Application" >
            </div>
            <h4>Sign In</h4>
            <span>You don't have an account? <span @click="changeAuth" class="min-text-btn">Register</span></span>
        </main>
        <form action="#" @submit.prevent="false">
            <div class="input">
                <label for="username">username</label>
                <input id="username" required type="text">
            </div>
            <div class="input">
                <label for="password">password</label>
                <input id="password" required type="password">
            </div>
        </form>
    </section>
</template>