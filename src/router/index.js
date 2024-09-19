import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import DetailView from "@/views/DetailView.vue";
import SearchView from "@/views/SearchView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/detail/:url/:id",
      name: "detail",
      component: DetailView,
    },
    {
      path: "/search/query=:input?",
      name: "search",
      component: SearchView,
    },
  ],
});

export default router;
