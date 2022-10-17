<script setup lang="ts">
import Tile from "@/components/Tile.vue";
import type {TvShow} from "@/interfaces/TvShow.interface";
import {onMounted, ref} from "vue";

const API_URL = import.meta.env.VITE_API_URL;
let tvShows = ref<TvShow[]>([]);
let genres = ref<string[]>([]);
let displayData = ref<{ genre: string; shows: TvShow[] }[]>([]);

/**
 * fetchShows
 * makes api call to fetch all shows
 */
async function fetchShows(): Promise<TvShow[]> {
  const url = `${API_URL}/shows`;
  return (await fetch(url)).json();
}

/**
 * Map api response to UI usable structure
 * Generates a record of genres and tv shows
 */
function setDisplayData() {
  genres.value = [
    ...new Set(
        tvShows.value
            .map((show: TvShow) => show.genres)
            .reduce((a: string[], b: string[]) => {
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

onMounted(async () => {
  tvShows.value = await fetchShows();
  setDisplayData();
});

</script>
<template>
  <div class="content-wrapper" v-for="data in displayData" :key="data.genre">
    <h3>{{ data.genre }}</h3>
    <div class="tile-wrapper">
      <ul class="tile-ul">
        <li class="tile-li" v-for="tvShow in data.shows">
          <Tile :key="tvShow.id"
                :tvShow="tvShow"
                :imgSrc="tvShow.image?.medium"
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
  transition: all .5s ease-in-out;
  margin-left: 10px;
}

.tile-li:first-of-type {
  margin-left: 0px;
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
