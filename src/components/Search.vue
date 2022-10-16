<script setup lang="ts">
defineProps<{
  value: string;
}>();

const label = "Search";
const emit = defineEmits(["on-change"]);
</script>

<template>
  <label>
    {{ label }}
  </label>
  <input
    type="text"
    name="label"
    :value="value"
    @change="emit('on-change', $event.target.value)"
  />
</template>

<style scoped>
input {
  margin-left: 10px;
}
</style>
