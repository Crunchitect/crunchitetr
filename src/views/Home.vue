<script setup>
import BoardButton from '@/components/BoardButton.vue';
</script>

<template>
    <h1>Crunchitetr</h1>
    <p>A meme copy of four.lol</p>
    <div class="grid">
        <BoardButton name="Heart PC" description="A 8-line PC based on the heart opener"
            fumen="v115@0gwwHeywDeilzhR4AeglRpAeBtR4Beg0RpBeBtCei0?JeAgH" to="/heart" />
        <BoardButton name="OSPC" description="An ASC o-spin s-spin pc opener"
            fumen="v115@/gBtFewwBeBtAeglh0AexwR4ilg0RpwwR4zhg0RpJe?AgH" to="/ospc" />
        <BoardButton name="Cheese Twist" description="A TSD -> TSS -> TSD -> Quad -> TSD opener"
            fumen="v115@ogwhRpCeQ4Beg0whRpglBeR4Aeg0whilCeQ4h0whD8?AeF8AeI8AeH8JeAgH" to="/cheese-twist" />
    </div>
</template>

<style scoped>
.grid {
    display: grid;
    gap: 2vw;
    grid-template-columns: repeat(auto-fill, 400px);
}

.solve p {
    text-align: center;
    font-size: smaller;
}
</style>