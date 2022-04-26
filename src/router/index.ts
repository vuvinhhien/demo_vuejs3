import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";
import UsingAxiosView from "../views/UsingAxiosView.vue";
import { FormVeelidate, FormVuelidate } from "@/components";

const routes: Array<RouteRecordRaw> = [
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
    path: "/form-processing",
    name: "form-processing",
    component: () => import("@/views/FormProcessing.vue"),
    children: [
      { path: "vuelidate", component: FormVuelidate },
      { path: "veelidate", component: FormVeelidate },
      // { path: "vuetify", component: Test },
    ],
  },
  {
    path: "/axios",
    name: "axios",
    component: UsingAxiosView,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
