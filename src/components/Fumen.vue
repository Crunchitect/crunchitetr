<script setup>
    import { fumen_canvas } from '@/lib/fumener';
    import { ref, onMounted } from 'vue';
    const props = defineProps({
        fumen: String
    });
    const fumen = ref(null);

    onMounted(() => {
        fumen.value.append(fumen_canvas(props.fumen));
    });
</script>

<template>
    <div ref="fumen" @click="location.href = `https://fumen.zui.jp/?${props.fumen}`"></div>
</template>