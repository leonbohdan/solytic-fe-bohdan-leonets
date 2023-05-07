import { createRouter, createWebHistory } from "vue-router";
import LoginFormView from "@/views/LoginFormView.vue";
import UserDetailsView from "@/views/UserDetailsView.vue";
import HomeView from "@/views/HomeView.vue";
import { useLoginStore } from "@/stores/useLogin";

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

router.beforeEach((to, from, next) => {
  const useLogin = useLoginStore();

  if (!useLogin.userId && to.name === "details") {
    return next({ name: "login" });
  } else if (useLogin.userId && to.name === "login") {
    return next({ name: "details" });
  } else {
    return next();
  }
});

export default router;
