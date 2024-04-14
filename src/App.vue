<script setup lang="ts">
import { RouterView } from 'vue-router';
// import { Transition } from 'vue';
</script>

<template>
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
</style>