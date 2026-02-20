import { createRouter, createWebHistory, type RouteRecordRaw  } from "vue-router";
import HomeView from "./views/HomeView.vue";
import LibViewer from "./views/LibViewer.vue";
import GodotHomeView from "./views/libs/godot/GodotHomeView.vue";
import MovementControllerPage from "./views/libs/godot/modules/player/MovementController.vue";
import ModuleViewer from "./views/ModuleViewer.vue";


//  codeatlas/lib/module/component

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'home',
        component: HomeView,
    },
    {
        path: '/godot/',
        name: 'godot',
        component: LibViewer,
        meta: { breadcrumbName: 'Godot' },
        children: [
            {
                path: '',
                name: 'godot_home',
                component: GodotHomeView,
                meta: { breadcrumbName: 'Home' },
            },
            {
                path: 'player',
                name: 'godot_player',
                component: ModuleViewer,
                meta: { breadcrumbName: 'Player' },
                children: [
                    {
                        path: 'movement-controller',
                        name: 'godot_player_movementController',
                        component: MovementControllerPage,
                        meta: { breadcrumbName: 'Movement Controller' }
                    }
                ]
            }
        ]
    },
    {
        path: '/vue/',
        name: 'Vue',
        component: LibViewer,
        children: [
            {
                path: '',
                name: '',
                component: GodotHomeView,
            }
        ]
    },
    {
        path: '/general/',
        name: 'General',
        component: LibViewer,
        children: [
            {
                path: '',
                name: '',
                component: GodotHomeView,
            }
        ]
    },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

