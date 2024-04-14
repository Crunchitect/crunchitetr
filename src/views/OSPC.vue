<script setup>
import Fumen from '@/components/Fumen.vue';
import { ref } from 'vue';

const solves = ref([
    ['ZIOSLJTJ', 'v115@9gj0ywhlwhj0Q4wwRpglwhBtB8R4RpglwhA8BtB8Q4?C8whJeAgH'],
    ['ZITSLOJJ', 'v115@9gRpj0Q4hlwhRpi0wwR4glwhBtB8ywQ4glwhA8BtB8?g0C8whJeAgH'],
    ['ZITSLJOO', 'v115@9gTph0Q4hlwhTpg0wwR4glwhBtB8g0xwQ4glwhA8Bt?B8wwC8whJeAgH']
]);
</script>

<template>
    <h1>OSPC</h1>
    <p>OSPC is a 2-4 line PC, with (at least) <strong>58%</strong> build chance. :D</p>

    <h2>Bag 1</h2>

    <div class="grid">
        <Fumen class="item" fumen="v115@/gBtFewwBeBtAeglh0AexwR4ilg0RpwwR4zhg0RpJe?AgH" />
        <Fumen class="item" fumen="v115@ThBtFewwBeBtAeglh0KeAgH" />
    </div>

    <h2>Solves</h2>
    <p>You will typically see these common 3 solves.</p>
    <div class="solves grid">
        <div class="solve item" v-for="board in solves">
            <Fumen :fumen="board[1]"/>
            <p>{{ board[0] }}</p>
        </div>
    </div>
    <p>These 3 solves guarantee you a <strong>74.5%</strong> PC chance.</p>

    <p>Here are the rest of the solves in a GIF, because there are too many solves.</p>
    <img src="@/assets/ospc_solves.gif" alt="">

    <h2>Credits</h2>
    <p>First bag setup by mawji, PC continuation by crunch.</p>
</template>

<style scoped>
.grid {
    grid-template-columns: repeat(auto-fill, 250px);
}

.solve p {
    text-align: center;
    font-size: smaller;
}
</style>