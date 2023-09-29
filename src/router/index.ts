import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      alias: "/home",
      component: HomeView,
    },
    {
      path: "/favourites",
      name: "favourite",
      component: () => import("../views/Favourite.vue"),
    },
    {
      path: "/explore",
      name: "explore",
      component: () => import("../views/Explore.vue"),
    },
    {
      path: "/category/:id",
      name: "category",
      component: () => import("../views/Category.vue"),
    },
    {
      path: "/search/:id",
      name: "search",
      component: () => import("../views/Search.vue"),
    },
    {
      path: "/search/:id/details",
      component: () => import("../views/Details.vue"),
    },
    {
      path: "/signup",
      name: "signup",
      component: () => import("../views/SignUp.vue"),
    },
    {
      path: "/signin",
      name: "signin",
      component: () => import("../views/SignIn.vue"),
    },
  ],
});

export default router;
