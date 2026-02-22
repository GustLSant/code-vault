import type { RouteRecordRaw } from 'vue-router'


const vue_home: RouteRecordRaw = {
    path: '',
    name: 'vue.home',
    component: () => import('../views/libs/vue/Home.vue'),
    meta: { breadcrumbName: 'Vue Home' },
};



const vue_input_home: RouteRecordRaw = {
    path: '',
    name: 'vue.input.home',
    component: () => import('../views/libs/vue/modules/inputs/Home.vue'),
    meta: { breadcrumbName: 'Input Home' },
}

const vue_input_button: RouteRecordRaw = {
    path: 'button',
    name: 'vue.input.button',
    component: () => import('../views/libs/vue/modules/inputs/Button.vue'),
    meta: { elementType: 'component', breadcrumbName: 'Button' }
}



const vue_input: RouteRecordRaw = {
    path: 'input',
    name: 'vue.input',
    component: () => import('../views/ModuleViewer.vue'),
    meta: { elementType: 'module', breadcrumbName: 'Input' },
    children: [
        vue_input_home,
        vue_input_button,
    ]
}



export const vueLibraryRoutes: RouteRecordRaw = {
    path: '/vue',
    name: 'vue',
    component: () => import('../views/LibraryViewer.vue'),
    meta: { elementType: 'library', breadcrumbName: 'Vue' },
    children: [
        vue_home,
        vue_input,
    ]
}