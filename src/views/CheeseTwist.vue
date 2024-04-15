<script setup>
import Fumen from '@/components/Fumen.vue';
import { ref, watch } from 'vue';

const countdown = ref(false);

</script>

<template>
    <div class="content">
        <h1>Cheese Twist Opener</h1>
        <p>The cheese twist opener, is a opener to counter <strong>4-wide</strong>. Espeacially a <strong>4-combo
                4-wide</strong>.</p>
        <p>Here's the cheese to recieve to use this opener.</p>
        <Fumen fumen="v115@HhD8AeF8AeI8AeH8JeAgH"/>
        <h2>Bag 1</h2>
        <div class="solves">
            <div class="solve">
                <Fumen fumen="v115@ogwhRpCeQ4Beg0whRpglBeR4Aeg0whilCeQ4h0whD8?AeF8AeI8AeH8JeAgH"/>
                <p>L&gt;O</p>
            </div>
            <div class="solve">
                <Fumen fumen="v115@ggg0GewhAeg0CeQ4Cewhh0glBeR4RpwhilCeQ4Rpwh?D8AeF8AeI8AeH8JeAgH"/>
                <p>O&gt;L</p>
            </div>
        </div>
        <p>Complete the TSD.</p>
        <div class="solves">
            <div class="solve">
                <Fumen fumen="v115@ogwhRpCeQ4Beg0whRpglBeR4Aeg0whilywQ4h0whD8?wwF8AeI8AeH8JeAgH"/>
            </div>
            <div class="solve">
                <Fumen fumen="v115@8gwhRpCeQ4Beg0whRpglBeR4Aeg0whA8AeI8AeH8Je?AgH" />
            </div>
        </div>
        <h2>Bag 2 (+Z)</h2>
        <p>Bag 2 may have an extra Z from bag 1 (preferably on hold). This will make a copy-cut style <strong>TSS overhang</strong>.</p>
        <div class="solves">
            <Fumen class="solve" fumen="v115@igAtBewhBeglBeBtBewhilBeAtCewhh0whRpBtAeQ4?whh0whRpglBtR4h0whA8AeI8AeH8JeAgH" />
            <Fumen class="solve" fumen="v115@sgAtBewhBeglBeBtBewhilBeAtCewhh0whRpBtAeQ4?whh0whA8AeI8AeH8JeAgH"/>
            <Fumen class="solve" fumen="v115@2gAtBewhBeglBeBtBewhilBeAtywwhh0whA8AeI8Ae?H8JeAgH"/>
        </div>
        <p>That is the inteded piece order and bag, but mostly the portion in purple can be done freestyle.</p>
        <Fumen fumen="v115@bgzwCeAtBezwBeBtBezwBeAtCeywwhRpBtAeQ4xwg0?whRpglBtR4wwg0whA8AeI8AeH8JeAgH" />
        <h2>TSD Quad Continuation</h2>
        <p>Here is a rough setup for a TSD Quad setup, the stack is mostly freestyle, but here is an example from the video.</p>
        <Fumen fumen="v115@Egg0Ieg0Heh0wwCeQ4DeAtxwT4whAeBtwwR4RpQ4wh?AeBtRpwhRpglwhAeBtRpwhilwhAeAtywwhh0whA8AeI8AeH?8JeAgH"></Fumen>
        <p>This can be extended into a 2-wide stack with an L and J.</p>
        
        <h2><a href="https://harddrop.com/wiki/Bongcloud">Bongcloud</a> Continuation</h2>
        <Fumen fumen="v115@BgA8FeQ4AewhA8FeR4whA8FewwQ4whA8BeAtAewwAe?xwxhAeBtzwR4whAeBtRpwhR4glwhAeBtRpwhilwhAeAtyww?hh0whA8AeI8AeH8JeAgH"></Fumen>
        <h2>Bag 3 & 4 (Bongcloud)</h2>
        <div class="solves">
            <div class="solve">
                <Fumen fumen="v115@BgwhFeQ4AexhFeR4xhFewwQ4xhBeAtAewwAexwxhAe?BtzwR4whAeAtA8RpA8R4glwhAeB8RpA8ilwhAeI8AeI8AeH?8JeAgH"/>
                <p>Early TSI on 4th bag</p>
            </div>
            <div class="solve">
                <Fumen fumen="v115@BgA8FeQ4AewhA8FeR4whA8FewwQ4whA8BeAtAewwAe?xwxhAeBtzwR4whAeBtRpwhR4glwhAeBtRpwhilwhAeAtyww?hh0whA8AeI8AeH8JeAgH"/>
                <p>Bag 2-4 overview</p>
            </div>
        </div>
        <p>Most continuations of bongcloud can be JO or ZLJ. (LO or SJL mostly). For bags #5-7</p>
        <p>These can extend to a TSD, TST or Imperial Cross</p>
        <h2>Sources</h2>
        <p><a href="https://ch.tetr.io/u/the_tetr_man">the_tetr_man's</a> replay on cheese-twist opener <a href="https://drive.google.com/drive/folders/1mtjhT32Y1_jzq2QXEqkdhUQYwKFcLklK?usp=sharing">here.</a></p>
        <p>TuneWiFi's <a href="https://harddrop.com/wiki/Bongcloud">Bongcloud</a> opener</p>
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