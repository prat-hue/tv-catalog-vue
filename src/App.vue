<script setup lang="ts">
import { RouterView } from "vue-router";
import Header from "@/components/Header.vue";
import Spinner from "@/components/Spinner.vue";
import {provide, Ref, ref} from 'vue'

const spin: Ref<boolean> = ref(false);

/** Created a token for spinner following
 * provider-injector to share global spinner amongst multi level child components
 *
 * */

provide('token-spinner', spin);
</script>

<template>
  <div class="wrapper">
    <div class="header">
      <Header title="Catalog" />
    </div>
    <main>

      <!-- Smooth fade in transition when routing -->
      <Spinner v-show="spin"/>
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

.header {
  padding-left: 10px;
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

  .wrapper main {
    width: calc(100% - 100px);
  }

  .wrapper .header {
    max-width: 20%;
    position: sticky;
  }
}
</style>
