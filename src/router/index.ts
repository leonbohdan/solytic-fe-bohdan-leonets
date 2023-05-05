import { createRouter, createWebHistory } from "vue-router";
import LoginFormView from "@/views/LoginFormView.vue";
import UserDetailsView from "@/views/UserDetailsView.vue";
import HomeView from "@/views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView
    },
    {
      path: "/login",
      name: "login",
      component: LoginFormView
    },
    {
      path: "/details",
      name: "details",
      component: UserDetailsView
    }
  ]
});

export default router;
