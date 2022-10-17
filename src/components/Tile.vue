<script setup lang="ts">
import type {TvShow} from "@/interfaces/TvShow.interface";

defineProps<{
  tvShow: TvShow;
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
  flex: 0 18%;
  align-items: center;
}

img {
  max-width: 300px;
  margin: 0 auto;
}

h4 {
  text-overflow: ellipsis;
  width: 200px;
  overflow: hidden;
  white-space: nowrap;
}

</style>
