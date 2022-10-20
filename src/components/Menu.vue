<script setup lang="ts">
import MenuItem from "./MenuItem.vue";
import HomeIcon from "./icons/IconHome.vue";
import IconTv from "@/components/icons/IconTv.vue";
</script>

<template>
  <nav>
    <RouterLink to="/">
      <MenuItem id="menu-item">
        <template #icon>
          <HomeIcon />
        </template>
        <template #heading>Home</template>
      </MenuItem>
    </RouterLink>
    <RouterLink to="/tv-shows">
      <MenuItem id="menu-item">
        <template #icon>
          <IconTv />
        </template>
        <template #heading>Search</template>
      </MenuItem>
    </RouterLink>
  </nav>
</template>

<style>
nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}

.router-link-exact-active .details {
  color: var(--color-heading) !important;
}

.router-link-exact-active .icon {
  color: var(--color-heading) !important;
  border: 1px solid var(--color-border-active) !important;
}

@media only screen and (min-width: 1200px) {
  nav {
    display: flex;
    flex-direction: column;
  }
}
</style>
