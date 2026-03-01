import type { RouteRecordRaw } from 'vue-router';


const react_home: RouteRecordRaw = {
    path: '',
    name: 'react.home',
    component: () => import('../views/libs/react/Home.vue'),
    meta: { breadcrumbName: 'React Home' },
}


export const reactLibraryRoutes: RouteRecordRaw = {
    path: '/react',
    name: 'react',
    component: () => import('../views/LibraryViewer.vue'),
    redirect: { name: 'react.home' },
    meta: { elementType: 'library', breadcrumbName: 'React', customIcon: 'teenyicons:react-solid' },
    children: [
        react_home
    ]
}