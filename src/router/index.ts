import { createRouter, createWebHistory } from "vue-router";
import NotFound from "@/pages/NotFoundPage";
import DefaultTemplate from "@/templates/DefaulTemplate";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: DefaultTemplate,
      children: [
        {
          name: "Home",
          path: "",
          component: () => import("@/pages/MainPage"),
        },
        {
          name: "WishlistPage",
          path: "wishitem",
          component: () => import("@/pages/WishlistPage"),
        },

        // will match everything and put it under `$route.params.pathMatch`
        {
          name: "NotFound",
          path: "/:pathMatch(.*)*",
          component: NotFound,
        },
      ],
    },
  ],
});

export default router;
