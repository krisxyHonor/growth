import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    redirect: "/home",
  },
  {
    name: "home",
    path: "/home",
    component: () => import("@/pages/Home.vue"),
  },
];

const router = createRouter({
  routes,
  history: createWebHashHistory(),
});

export { routes, router };
