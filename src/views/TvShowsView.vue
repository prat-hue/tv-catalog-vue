<script setup lang="ts">
import Search from "@/components/Search.vue";
import Tile from "@/components/Tile.vue";
import type {TvShow} from "@/interfaces/TvShow.interface";
import {inject, Ref, ref, watch} from "vue";

const API_URL = import.meta.env.VITE_API_URL;
let searchQuery = ref("");
let tvShows = ref<TvShow[]>([]);
let spinner: Ref<boolean> = inject('token-spinner') as Ref<boolean>;

/**
 * fetchShow
 * fetches information about show based on input search query
 */
async function fetchShow(): Promise<void> {
  spinner.value = true;
  const url = `${API_URL}/search/shows?q=${searchQuery.value}`;
  tvShows.value = (await (await fetch(url)).json()).map(
      (obj: { show: TvShow }) => obj.show
  );
  spinner.value = false;
}

/**
 * setSearchQuery
 * sets input from search componeny
 * @param query
 */
function setSearchQuery(query: string): void {
  searchQuery.value = query;
}

watch(searchQuery, () => {
  fetchShow();
});
</script>

<template>
  <div class="tv-show">
    <div class="search-wrapper">
      <Search :value="searchQuery" @on-change="setSearchQuery"/>
    </div>
    <div class="tile-wrapper">
      <template v-if="tvShows.length > 0">
        <div class="tile" v-for="tvShow in tvShows">
          <Tile :key="tvShow.id"
                :tvShow="tvShow"
                :imgSrc="tvShow.image?.medium ?? ''"
          />
        </div>

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

.tile {
  max-width: 300px;
}

.tile-wrapper {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 20px;
  padding: 20px;
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
