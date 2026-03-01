import type { RouteRecordRaw } from 'vue-router';


const css_home: RouteRecordRaw = {
    path: '',
    name: 'css.home',
    component: () => import('../views/libs/css/Home.vue'),
    meta: { breadcrumbName: 'CSS Home' },
}


export const cssLibraryRoutes: RouteRecordRaw = {
    path: '/css',
    name: 'css',
    component: () => import('../views/LibraryViewer.vue'),
    redirect: { name: 'css.home' },
    meta: { elementType: 'library', breadcrumbName: 'CSS', customIcon: 'devicon-plain:css3' },
    children: [
        css_home
    ]
}