<script>
export default {
    mounted(){
        console.log(this.$route)
    }
}
</script>

<template>
    <section>
        <h1>Authorization {{ this.$route.params.user }}</h1>
    </section>
</template>