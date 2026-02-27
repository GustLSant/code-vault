import type { RouteRecordRaw } from 'vue-router';


const js_home: RouteRecordRaw = {
    path: '',
    name: 'js.home',
    component: () => import('../views/libs/javaScript/Home.vue'),
    meta: { breadcrumbName: 'JavaScript Home' },
}


export const javascriptLibraryRoutes: RouteRecordRaw = {
    path: '/js',
    name: 'js',
    component: () => import('../views/LibraryViewer.vue'),
    redirect: { name: 'js.home' },
    meta: { elementType: 'library', breadcrumbName: 'JavaScript', customIcon: 'devicon-plain:javascript' },
    children: [
        js_home
    ]
}