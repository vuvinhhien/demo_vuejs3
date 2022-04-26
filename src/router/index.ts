import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";
import { FormVeelidate, FormVuelidate, FormVuetify } from "@/components";
import Test from "@/components/FormProcessing/Test.vue";

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
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
