import { createRouter, createWebHistory, type RouteRecordRaw } from "vue-router";
import { godotLibraryRoutes } from "./godotRoutes";
import { vueLibraryRoutes } from "./vueRoutes";
import { generalLibraryRoutes } from "./generalRoutes";
import { cssLibraryRoutes } from "./cssRoutes";
import { javascriptLibraryRoutes } from "./javaScriptRoutes";


export const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/AppHome.vue'),
  },
  godotLibraryRoutes,
  vueLibraryRoutes,
  cssLibraryRoutes,
  javascriptLibraryRoutes,
  generalLibraryRoutes,
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;