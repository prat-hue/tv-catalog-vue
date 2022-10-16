import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import TvShowView from "../views/TvShowView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/tv-shows",
      name: "tv-shows",
      component: () => import("../views/TvShowsView.vue"),
    },
    {
      path: "/tv-shows/:id",
      name: "tv-show",
      component: TvShowView,
    },
    {
      path: "/streaming",
      name: "streaming",
      component: () => import("../views/StreamingView.vue"),
    },
  ],
});

export default router;
