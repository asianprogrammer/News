<script>
import { reactive, ref } from 'vue';
import { RouterView, RouterLink, useRoute, useRouter } from 'vue-router';
export default {
  components: {
    RouterView,
    RouterLink
  },

  setup() {
    const isActive = ref(false);
    const router = useRouter();

    router.beforeEach((to, from, next) => {
      to.fullPath === "/" ? isActive.value = true: isActive.value = false;
      next();
    });

    return {
      isActive
    };  
  },
}

</script>
<template>

  <!-- Router Link -->
  <template v-if="isActive">
    <RouterLink to="/admin">Admin</RouterLink>
    <RouterLink to="/news/post?show=This is coding ninja and you are watching my work space">Post One</RouterLink>
  </template>

    <RouterView />

</template>