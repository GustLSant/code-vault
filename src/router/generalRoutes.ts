import type { RouteRecordRaw } from 'vue-router';


const general_home: RouteRecordRaw = {
    path: '',
    name: 'general.home',
    component: () => import('../views/libs/general/Home.vue'),
    meta: { breadcrumbName: 'General Home' },
}


export const generalLibraryRoutes: RouteRecordRaw = {
    path: '/general',
    name: 'general',
    component: () => import('../views/LibraryViewer.vue'),
    redirect: { name: 'general.home' },
    meta: { elementType: 'library', breadcrumbName: 'General', customIcon: 'lsicon:data-filled' },
    children: [
        general_home
    ]
}