import { createRouter, createWebHistory, type RouteRecordRaw } from "vue-router";
import { godotLibraryRoutes } from "./godotRoutes";
import { vueLibraryRoutes } from "./vueRoutes";
import { generalLibraryRoutes } from "./generalRoutes";


export const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/AppHome.vue'),
  },
  godotLibraryRoutes,
  vueLibraryRoutes,
  generalLibraryRoutes,
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;