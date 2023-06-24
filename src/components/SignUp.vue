<script>
export default {
    methods: {
        changeAuth(){
            this.$emit("actionLogin", "SignIn")
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
            <h4>Sign Up</h4>
            <span>Already have an account? <span @click="changeAuth" class="min-text-btn">Login</span></span>
        </main>
        <form action="#" @submit.prevent="false">
            <div class="input">
                <label for="firstname">First Name</label>
                <input id="firstname" required type="text">
            </div>
            <div class="input">
                <label for="lastname">Last Name</label>
                <input id="lastname" required type="text">
            </div>
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