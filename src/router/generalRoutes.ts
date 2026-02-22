import type { RouteRecordRaw } from 'vue-router';


export const generalLibraryRoutes: RouteRecordRaw = {
    path: '/general',
    name: 'general',
    component: () => import('../views/LibraryViewer.vue'),
    meta: { elementType: 'library', breadcrumbName: 'Godot' },
    children: [
        
    ]
}