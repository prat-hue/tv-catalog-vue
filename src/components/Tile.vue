<script setup lang="ts">
import {PropType} from "vue";
import type {TvShow} from "@/interfaces/TvShow.interface";

defineProps<{
  tvShow: PropType<TvShow>;
  imgSrc: string | undefined;
}>();
</script>

<template>
  <RouterLink
      :to="{ name: 'tv-show', params: { id: tvShow.externals?.thetvdb ?? 0 } }"
      class="tile">
    <img :alt="tvShow.name" :src="imgSrc"/>
    <h4>{{ tvShow.name }}</h4>
  </RouterLink>
</template>

<style scoped>
.tile {
  display: flex;
  flex-direction: column;
  text-align: center;
}

img {
  max-width: 300px;
  margin: 0 auto;
}

</style>
