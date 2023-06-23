<script>
import router from '../router/router';

export default {
    mounted(){
        router.push("/auth/admin")
    }
}
</script>
<template>
    <RouterLink to="/">Back</RouterLink>
    <div>Admin Panel</div>
</template>