import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import OtherWishListsView from "../views/OtherWishListsView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/other-wish-lists",
      name: "other-wish-lists",
      component: OtherWishListsView,
    },
  ],
});

export default router;
