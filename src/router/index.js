import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/auth",
      name: "auth",
      component: () => import("../views/AuthenticationView.vue"),
      children: [
        {
          path: "",
          redirect: "/auth/login",
        },
        {
          path: "login",
          name: "login",
          component: () => import("../components/auth/LoginComponent.vue"),
        },
        {
          path: "register",
          name: "register",
          component: () => import("../components/auth/RegisterComponent.vue"),
        },
      ],
    },
    {
      path: "/dashboard",
      name: "dashboard",
      component: () => import("../views/DashboardView.vue"),
    },
  ],
});

export default router;
