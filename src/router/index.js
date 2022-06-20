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
    {
      path: "/mentors",
      name: "mentors",
      component: () => import("../views/MentorView.vue"),
      children: [
        {
          path: "",
          redirect: "/mentors/judges",
        },
        {
          path: "judges",
          name: "judges",
          component: () => import("../components/mentor/JudgesComponent.vue"),
        },
        {
          path: "team",
          name: "team",
          component: () => import("../components/mentor/JudgesComponent.vue"),
        },
        {
          path: "judges/:name",
          name: "mentor",
        },
      ],
    },
    {
      path: "/contestants",
      name: "contestants",
      component: () => import("../views/ContestantView.vue"),
    },
    {
      path: "/news",
      name: "news",
      component: () => import("../views/NewsView.vue"),
    },
    {
      path: "/faqs",
      name: "faqs",
      component: () => import("../views/FaqView.vue"),
    },
  ],
});

export default router;
