<script setup lang="ts">
import { RouterView } from 'vue-router';
// import { Transition } from 'vue';
</script>

<template>
  <RouterLink to="/"><i class="fa-solid fa-home home"></i></RouterLink>
  <RouterView />
</template>

<style scoped>
    .fade-enter,
    .fade-leave-to {
      transition: translateX(3em);
      opacity: 0;
      transition: all .3s ease;
    }

    .fade-enter-active,
    .fade-leave-active {
      transition: all .3s ease;
    }

    .home {
      float: left;
      opacity: 30%;
      margin-bottom: 2rem;
    }
</style>