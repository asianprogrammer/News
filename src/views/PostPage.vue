<script>
export default {
    mounted(){
        console.log(this.$route.query.show)
    }
}
</script>

<template>
    <span>Post {{ this.$route.query.show }}</span>
</template>