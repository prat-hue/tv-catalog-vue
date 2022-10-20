<script setup lang="ts">
import Tile from "@/components/Tile.vue";
import type { TvShow } from "@/interfaces/TvShow.interface";
import type { Ref, ComputedRef } from "vue";
import { computed, onMounted, ref } from "vue";
import { uniqueBy } from "../utils/uniqueBy";
import { inject } from "vue";

const API_URL = import.meta.env.VITE_API_URL;
let tvShows = ref<TvShow[]>([]);
let genres = ref<string[]>([]);

let spinner: Ref<boolean> = inject("token-spinner") as Ref<boolean>;
const displayData: ComputedRef<{ genre: string; shows: TvShow[] }[]> = computed(
  () => getDisplayData(genres.value)
);

/**
 * fetchShows
 * makes api call to fetch all shows
 */
async function fetchShows(): Promise<TvShow[]> {
  const url = `${API_URL}/shows`;
  return (await fetch(url)).json();
}

/**
 * Get all unique genres
 */
function setUniqueGenres() {
  genres.value = uniqueBy(tvShows.value, "genres").sort();
}

/**
 * Map genres to UI usable Record<genres,tvShows>
 * @param genres
 */
function getDisplayData(genres: string[]) {
  return genres.map((genre: string) => {
    return {
      genre,
      shows: tvShows.value
        .filter((show) => show.genres.includes(genre))
        .sort((a, b) => b.rating.average - a.rating.average),
    };
  });
}

onMounted(async () => {
  spinner.value = true;
  tvShows.value = await fetchShows();
  spinner.value = false;
  setUniqueGenres();
});
</script>
<template>
  <div class="content-wrapper" v-for="data in displayData" :key="data.genre">
    <h3>{{ data.genre }}</h3>
    <div class="tile-wrapper">
      <ul class="tile-ul">
        <li class="tile-li" v-for="tvShow in data.shows" :key="tvShow.id">
          <Tile
            :tvShow="tvShow"
            :imgSrc="tvShow.image?.medium ?? ''"
          />
        </li>
      </ul>
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

.tile-ul {
  margin-bottom: -18px;
  overflow: hidden;
  overflow-x: scroll;
  padding: 0;
  white-space: nowrap;
  width: 100%;
}

.tile-li {
  text-align: center;
  display: inline-block;
  list-style: none;
  margin-bottom: 18px;
  transition: all 0.5s ease-in-out;
  margin-left: 10px;
  max-width: 300px;
  transition: transform 500ms;
}

.tile-li:first-of-type {
  margin-left: 0px;
}

.tile-ul:hover .tile-li {
  transform: translateX(-25%);
}

.tile-li:hover ~ .tile-li {
  transform: translateX(25%);
}

.tile-ul .tile-li:focus,
.tile-ul .tile-li:hover {
  transform: scale(1.1);
  z-index: 1;
}

/* Hide scrollbar for Chrome, Safari and Opera */
.tile-ul::-webkit-scrollbar {
  display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
.tile-ul {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}
</style>
