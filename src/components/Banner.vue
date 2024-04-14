<script setup>
    const props = defineProps({
        color: String,
        icon: String
    });
</script>

<template>
    <div class="banner">
        <i :class="['fa-solid', icon]"></i>
        <h1><slot></slot></h1>
    </div>
</template>

<style scoped>
    h1 {
        background-image: linear-gradient(
            to right,    
            v-bind(color),
            transparent
        );
        padding-left: 5rem;
        transform: translateX(-25%);
    }

    .banner {
        display: flex;
    }

    i {
        font-size: 5rem;
        transform: rotate(-8deg) scale(1.1) translateY(5%);
        z-index: 2;
        color: color-mix(in hsl, v-bind(color) 95%, #00000080 10%)
    }
</style>