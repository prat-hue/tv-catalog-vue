<script setup lang="ts">
const API_URL = import.meta.env.VITE_API_URL;

import Tile from "@/components/Tile.vue";
import type { TvShow } from "@/interfaces/TvShow.interface";
import { onMounted, ref } from "vue";

let tvShows = ref<TvShow[]>([]);
let genres = ref<string[]>([]);
let displayData = ref<{ genre: string; shows: TvShow[] }[]>([]);

async function fetchShows(): Promise<void> {
  const url = `${API_URL}/shows`;
  tvShows.value = await (await fetch(url)).json();
  genres.value = [
    ...new Set(
      tvShows.value
        ?.map((show: TvShow) => show.genres)
        .reduce(function (a, b) {
          return a.concat(b);
        })
    ),
  ].sort();
  displayData.value = genres.value.map((genre: string) => {
    return {
      genre,
      shows: tvShows.value.filter((show) => show.genres.includes(genre)),
    };
  });
}

onMounted(() => {
  fetchShows();
});
</script>
<template>
  <div class="content-wrapper" v-for="data in displayData" :key="data.genre">
    <label>{{ data.genre }}</label>
    <div class="tile-wrapper">
      <Tile
        v-for="tvShow in data.shows"
        :key="tvShow.id"
        :tvShow="tvShow"
        :imgSrc="tvShow.image?.medium"
      />
    </div>
  </div>
</template>

<style lang="css" scoped>
.content-wrapper {
  margin-top: 20px;
  padding: 0 20px;
}

.tile-wrapper {
  display: flex;
  flex-direction: row;
  gap: 20px;
}
</style>
