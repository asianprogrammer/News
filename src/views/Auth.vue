<script>
import { ref } from 'vue';
import SignIn from '../components/SignIn.vue';
import SignUp from '../components/SignUp.vue';

export default {
    setup() {
        const authComponent = ref("signIn")
        return {
            authComponent
        }
    },
    mounted() {
        console.log(this.$route)
    },
    components: {
        SignIn, SignUp
    }
}
</script>

<template>
    <section>
        <button @click="authComponent = 'signIn'" class="btn"
            :class="{ 'active': authComponent === 'signIn' }">Login</button>
        <button @click="authComponent = 'signUp'" class="btn"
            :class="{ 'active': authComponent == 'signUp' }">Signup</button>
        <keep-alive>
            <component :is="authComponent"></component>
        </keep-alive>
    </section>
</template>