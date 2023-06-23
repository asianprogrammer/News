<script>
import { reactive, ref } from 'vue';
const work = () => {
  console.log(window.location.pathname)
}
import { RouterView, RouterLink, useRoute, useRouter } from 'vue-router';
export default {
  components: {
    RouterView,
    RouterLink
  },
  setup() {
    const isActive = ref(false);
    const route = useRoute();
    const router = useRouter();

    router.beforeEach((to, from, next) => {
      to.fullPath === "/" ? isActive.value = true: isActive.value = false;
      next();
      console.log(isActive.value, to.fullPath)
    });

    return {
      isActive
    };
  },
}

</script>
<template>
  <section v-if="isActive">
    <RouterLink to="/admin">Admin</RouterLink>
  </section>
  <section>
    <RouterView />
    <span>Hello World</span>
  </section>
</template>