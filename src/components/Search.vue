<script setup lang="ts">
import { onMounted } from "vue";
import { ref } from "vue";

defineProps<{
  value: string;
}>();

const input = ref<HTMLInputElement>();
const label = "Search";
const emit = defineEmits(["on-change"]);

/**
 * Triggers with change in input
 * @param e
 * Can also be replaced with v-bind=inputText and a watcher watching the "inputText"
 */
function inputChange(e: Event) {
  const target = e.target as HTMLInputElement;
  emit("on-change", target.value.trim());
}

onMounted(() => {
  input.value?.focus();
});
</script>

<template>
  <label>
    {{ label }}
  </label>
  <input
    ref="input"
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
