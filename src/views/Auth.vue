<script>
import "../assets/auth.css"
import { ref } from 'vue';
import SignIn from '../components/SignIn.vue';
import SignUp from '../components/SignUp.vue';

export default {
    setup() {
        function authLocal() {
            if (localStorage.getItem("auth-news")) {
                return localStorage.getItem("auth-news")
            } else {
                localStorage.setItem("auth-news", "SignUp")
                return "SignUp"
            }
        }
        const authComponent = ref(authLocal())
        return {
            authComponent
        }
    },
    mounted() {
        console.log(this.authComponent)
        console.log(this.$route)
    },
    methods: {
        changLocalAuth(component) {
            this.authComponent = component;
            localStorage.setItem('auth-news', component);
            console.log(component)
        },
    },
    components: {
        SignIn, SignUp
    },
}
</script>

<template>
    <section class="section">
        <div class="center-login-form">
            <keep-alive>
                <component @actionLogin="changLocalAuth" :is="authComponent"></component>
            </keep-alive>
        </div>
        <br><br><br>
    </section>
</template>

<style scoped>

/*
  Enter and leave animations can use different
  durations and timing functions.
*/
</style>