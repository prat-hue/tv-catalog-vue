<script setup lang="ts">
import {RouterView} from "vue-router";
import Header from "@/components/Header.vue";
</script>

<template>
  <div class="wrapper">
    <div class="header">
      <Header title="Catalog"/>
    </div>
    <main>
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <div :key="$route.path">
            <component :is="Component"></component>
          </div>
        </transition>
      </router-view>
    </main>
  </div>
</template>

<style lang="css" scoped>

.wrapper {
  display: flex;
  flex-direction: column;
}

.wrapper main {
  width: 100%;
}

.fade-move,
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

@media only screen and (min-width: 1200px) {
  .wrapper {
    flex-direction: row;
    margin-top: 30px;
  }

  .wrapper .header {
    max-width: 20%;
  }
}
</style>
