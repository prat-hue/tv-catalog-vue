<script setup lang="ts">
import Menu from "@/components/Menu.vue";

defineProps<{
  title: string;
}>();
</script>

<template>
  <h1>{{ title }}</h1>
  <Menu/>
</template>

<style scoped>

</style>
