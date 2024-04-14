<script setup>
    import Fumen from '@/components/Fumen.vue';
    import { ref } from 'vue';
    const solves = ref([
        ['JZOTISJ(L) 3%'  , 'v115@pgwhilg0wwR4RpwhA8Btxwh0RpC8Btwwg0I8g0C8wh?D8R4C8whglB8i0C8JeAgH'],
        ['JOTSIZT(L) 1.4%', 'v115@pgwhilywAtRpwhA8zwBtRpC8wwi0I8g0C8whD8R4C8?whglB8R4AtC8JeAgH'],
        ['JSZITOL(L) 1.3%', 'v115@pgwhilwwilRpwhA8Btxwh0RpC8BtQ4g0I8g0C8whD8?R4C8whglB8wwglQ4C8JeAgH'],
        ['JZOSITT(L) 1.1%', 'v115@pgwhilQ4ywRpwhA8BtR4h0RpC8BtQ4g0I8g0C8whD8?xwC8whglB8ywC8JeAgH'],
        ['JOLTISJ(L) 1%'  , 'v115@pgwhili0glRpwhA8ywilRpC8wwi0I8g0C8whD8R4C8?whglB8R4g0C8JeAgH'],
        ['LZITOJJ(L) 0.6%', 'v115@pgwhilj0RpwhA8Btywg0RpC8BthlI8glC8whD8wwgl?C8whglB8i0C8JeAgH'],
        ['JZLIOTJ(L) 0.3%', 'v115@pgwhilg0ywRpwhA8Bthlh0RpC8Btglg0I8glC8whD8?glwwC8whglB8i0C8JeAgH']
    ]);
</script>

<template>
    <h1>Heart Opener PC</h1>
    <p>
        The <strong>Heart Perfect Clear Opener (HPC)</strong> is a 6-line PC (most effective with a 7+2 or 6+2 bag) based on the <a href="https://harddrop.com/wiki/Heart_Opener">heart opener</a>.
        with a <strong>65.08%</strong> build rate (3280/5040), which increases to 100% with Z/S -> I/T bag.
    </p>

    <h2>Bag 1</h2>

    <Fumen fumen="v115@0gwwHeywDeilzhR4AeglRpAeBtR4Beg0RpBeBtCei0?JeAgH" />
    
    <p>Notice that there is no 2nd T peice, because it would make it impossible to solve.</p>
    
    <h2>Bag 2 (+L)</h2>
    <p>Most solves, have this pattern for a solve: </p>
    <Fumen fumen="v115@pgwhGeRpwhA8Deh0RpC8Ceg0I8g0C8whD8BeC8whAe?B8CeC8JeAgH"/>
    <p>The I and O are guarenteed to be at that position for a solve. (See solves below)</p>
    <p>Here are the solves, Adds up to a <strong>7.69%</strong> PC rate (16272/211680).</p>
    
    <div class="solves">
        <div class="solve" v-for="board in solves">
            <Fumen :fumen="board[1]"/>
            <p>{{ board[0] }}</p>
        </div>
    </div>
</template>

<style scoped>
    .solves {
        display: grid;
        gap: 2vw;
        grid-template-columns: repeat(auto-fill, 250px);
    }

    .solve {
        background-color: #f0f0f0;
        display: flex;
        flex-flow: column nowrap;
        border-radius: 10px;
        justify-content: center;
        align-items: center;
    }

    .solve p {
        text-align: center;
        font-size: smaller;
    }
</style>