<script setup lang="ts">
import type { TvShow } from "@/interfaces/TvShow.interface";
import IconFavourite from "@/components/icons/IconFavourite.vue";

defineProps<{
  tvShow: TvShow;
  imgSrc: string | undefined;
}>();
</script>

<template>
  <RouterLink
    :to="{ name: 'tv-show', params: { id: tvShow.externals?.thetvdb ?? 0 } }"
    class="tile"
  >
    <img :alt="tvShow.name" :src="imgSrc" />
    <div class="tile-title">
      <h5>{{ tvShow.name }}</h5>
      <div class="rating-wrapper">
        <IconFavourite />
        <h6 class="rating">{{ tvShow.rating?.average }}</h6>
      </div>
    </div>
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

.tile-title {
  margin-top: 10px;
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  padding: 0 5px;
}

.rating-wrapper {
  display: flex;
  align-items: center;
}

.rating {
  margin-left: 5px;
}

img {
  max-width: 100%;
}

h4 {
  text-overflow: ellipsis;
  width: 200px;
  overflow: hidden;
  white-space: nowrap;
}
</style>
