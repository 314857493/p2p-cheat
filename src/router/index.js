import { createRouter, createWebHistory } from "vue-router";
// import Home from "../views/Home.vue";
// import store from "../store";
// import MainRoute from "./routes";
// import { goLogin } from "../utils";

const routes = [
  {
    path: "/",
    name: "首页",
    component: () => import("@/pages/Home/index.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
