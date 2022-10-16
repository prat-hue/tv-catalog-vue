<script setup lang="ts">
const API_URL = import.meta.env.VITE_API_URL;

import Search from "@/components/Search.vue";
import Tile from "@/components/Tile.vue";
import type {TvShow} from "@/interfaces/TvShow.interface";
import {ref, watch} from 'vue'

let searchQuery = ref('');
let tvShows: { value: TvShow[] } = ref([]);

async function fetchShow(): Promise<void> {
  const url = `${API_URL}/search/shows?q=${searchQuery.value}`
  tvShows.value = (await (await fetch(url)).json()).map((obj: { show: TvShow }) => obj.show);
}

function setSearchQuery(query: string): void {
  searchQuery.value = query;
}

watch(searchQuery, () => {
  fetchShow()
})

</script>

<template>
  <div class="tv-show">
    <div class="search-wrapper">
      <Search :value="searchQuery" @on-change="setSearchQuery"/>
    </div>
    <div class="tile-wrapper">
      <template v-if="tvShows.length > 0">
        <Tile v-for="tvShow in tvShows" :key="tvShow.id" :tvShow="tvShow" :imgSrc="tvShow.image?.medium"/>
      </template>
      <div v-else-if="searchQuery.length > 0" class="no-result">
        No result found
      </div>
    </div>
  </div>

</template>
<style lang="css" scoped>
.tv-show {
  margin-top: 4.6rem;
}

.search-wrapper {
  min-width: 200px;
  max-width: 80%;
  display: flex;
  align-items: center;
  height: 100%;
  margin: 0 auto;
}

.tile-wrapper {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 20px;
  padding: 20px;
}

.tile-wrapper h4 {
  text-overflow: ellipsis;
  max-width: 300px;
  overflow: hidden;
  white-space: nowrap;
}

.no-result {
  display: flex;
  justify-content: center;
  width: 100%;
  font-size: 1rem;
}

@media only screen and (min-width: 1200px) {
  .search-wrapper {
    max-width: 40%;
  }
}
</style>
