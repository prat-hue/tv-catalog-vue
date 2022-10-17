<script setup lang="ts">
defineProps<{
  value: string;
}>();

const label = "Search";
const emit = defineEmits(["on-change"]);

function inputChange(e: Event) {
  const target = e.target as HTMLInputElement;
  emit('on-change', target.value);
}
</script>

<template>
  <label>
    {{ label }}
  </label>
  <input
      type="text"
      name="label"
      :value="value"
      @change="inputChange"
  />
</template>

<style scoped>
input {
  margin-left: 10px;
}
</style>
