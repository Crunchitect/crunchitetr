<script setup>
import { fumen_canvas } from "@/lib/fumener"; 
import { onMounted, ref } from 'vue';

const props = defineProps({
    name: String,
    description: String,
    fumen: String,
    to: String
});

const tab = ref(null);

onMounted(() => {
    const canvas = fumen_canvas(props.fumen);
    console.log(canvas)
    tab.value.append(canvas)
});

</script>

<template>
    <div class="tab force-width" @click="$router.push(to)">
        <div class="flex" ref="tab">
            <h2>{{ name }}</h2>
            <p>{{ description }}</p>
        </div>
    </div>
</template>

<style scoped>
h2 {
    font-size: 2rem;
}

p {
    font-size: 1rem;
}

.flex {
    background-color: #f0f0f0;
    display: flex;
    flex-flow: column;
    padding: 20px;
    border-radius: 20px;
}

.tab {
    display: flex;
    flex-flow: row nowrap;
    width: 400px !important ;
}

.force-width {
    width: 400px;
    background-color: #f0f0f0;
    border-radius: 10px;
}
</style>