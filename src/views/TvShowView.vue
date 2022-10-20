<script setup lang="ts">
import IconNavigateBack from "@/components/icons/IconNavigateBack.vue";
import type { TvShow } from "@/interfaces/TvShow.interface";
import Tile from "@/components/Tile.vue";
import { ref, onMounted, inject } from "vue";
import { useRoute } from "vue-router";
import type { Ref } from "vue";

const API_URL = import.meta.env.VITE_API_URL;
let spinner: Ref<boolean> = inject("token-spinner") as Ref<boolean>;

let tvShow = ref<TvShow>({
  image: {
    medium: "",
    original: "",
  },
  externals: {
    thetvdb: 0,
  },
  summary: "",
  status: "",
  url: "",
  name: "",
  genres: [],
  language: "",
  averageRuntime: "",
  rating: {
    average: 0,
  },
  id: 0,
});
let error = ref(false);

onMounted(() => {
  fetchShow();
});

/**
 * fetchShow
 * function to make api call to fetch information about single tv show
 */
async function fetchShow() {
  spinner.value = true;
  const route = useRoute();
  const url = `${API_URL}/lookup/shows?thetvdb=${route.params.id}`;
  fetch(url)
    .then((response) => {
      if (!response.ok) {
        error.value = true;
        return;
      }
      return response.json();
    })
    .then((response: TvShow) => {
      tvShow.value = response;
      spinner.value = false;
    });
}
</script>

<template>
  <div class="tv-show-wrapper">
    <div class="icon">
      <IconNavigateBack @click="$router.go(-1)" />
    </div>
    <div class="tv-show-content" v-if="!error">
      <Tile
        class="tile"
        :key="tvShow.id"
        :tvShow="tvShow"
        :imgSrc="tvShow.image?.original ?? ''"
      />
      <ul class="content">
        <li>
          <label> Name: </label>
          <p>{{ tvShow.name }}</p>
        </li>
        <li>
          <label> Language: </label>
          <p>{{ tvShow.language }}</p>
        </li>
        <li>
          <label> Duration: </label>
          <p>{{ tvShow.averageRuntime }} minutes</p>
        </li>
        <li>
          <label> Summary: </label>
          <div v-html="tvShow.summary"></div>
        </li>
        <li>
          <label> Status: </label>
          <p>{{ tvShow.status }}</p>
        </li>
        <li>
          <a :href="tvShow.url" target="_blank">{{ tvShow.url }}</a>
        </li>
      </ul>
    </div>

    <!-- 404 content from BE view -->
    <p class="tv-show-content" v-else>No result found</p>
  </div>
</template>

<style scoped>
.tv-show-wrapper {
  padding: 0px 20px;
  display: flex;
  flex-direction: column;
  margin-top: 15px;
}

.tv-show-content {
  margin-top: 30px;
}

label {
  color: var(--color-heading);
}

.icon {
  width: 32px;
  height: 32px;
  cursor: pointer;
  border: none;
}

li {
  margin-top: 10px;
}

li:first-of-type {
  margin-top: 0px;
}

.content {
  padding: 0 5px;
}

@media only screen and (min-width: 1200px) {
  .tv-show-content {
    display: grid;
    grid-template-columns: 300px 1fr;
    grid-template-rows: 1fr;
  }

  .content {
    margin-left: 20px;
  }
}
</style>
