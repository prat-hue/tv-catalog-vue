<script setup lang="ts">
import { RouterView } from "vue-router";
import Header from "@/components/Header.vue";
</script>

<template>
  <div class="wrapper">
    <div class="header">
      <Header title="Catalog" />
    </div>
    <main>
      <RouterView />
    </main>
  </div>
</template>

<style scoped>
.wrapper {
  display: flex;
}
.wrapper .header {
  max-width: 20%;
}
.wrapper main {
  width: 100%;
}
</style>
