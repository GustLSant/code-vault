import type { RouteRecordRaw } from 'vue-router';


const godot_home: RouteRecordRaw = {
    path: '',
    name: 'godot.home',
    component: () => import('../views/libs/godot/Home.vue'),
    meta: { breadcrumbName: 'Godot Home' },
};



const godot_player_home: RouteRecordRaw = {
    path: '',
    name: 'godot.player.home',
    component: () => import('../views/libs/godot/modules/player/Home.vue'),
    meta: { breadcrumbName: 'Player Home' },
};

const godot_player_movementController: RouteRecordRaw = {
    path: 'movement-controller',
    name: 'godot.player.movementController',
    component: () => import('../views/libs/godot/modules/player/MovementController.vue'),
    meta: { elementType: 'component', breadcrumbName: 'Movement Controller' }
};

const godot_player_fpsCameraController: RouteRecordRaw = {
    path: 'fps-camera-controller',
    name: 'godot.player.fpsCameraController',
    component: () => import('../views/libs/godot/modules/player/FpsCameraController.vue'),
    meta: { elementType: 'component', breadcrumbName: 'Fps Camera Controller' }
};



const godot_enemy_home: RouteRecordRaw = {
    path: '',
    name: 'godot.enemy.home',
    component: () => import('../views/libs/godot/modules/enemy/Home.vue'),
    meta: { breadcrumbName: 'Enemy Home' },
};

const godot_enemy_stateMachine: RouteRecordRaw = {
    path: 'state-machine',
    name: 'godot.enemy.stateMachine',
    component: () => import('../views/libs/godot/modules/enemy/StateMachine.vue'),
    meta: { elementType: 'component', breadcrumbName: 'State Machine' }
};



const godot_player: RouteRecordRaw = {
    path: 'player',
    name: 'godot.player',
    component: () => import('../views/ModuleViewer.vue'),
    redirect: { name: 'godot.player.home' },
    meta: { elementType: 'module', breadcrumbName: 'Player' },
    children: [
        godot_player_home,
        godot_player_movementController,
        godot_player_fpsCameraController,
    ]
};

const godot_enemy: RouteRecordRaw = {
    path: 'enemy',
    name: 'godot.enemy',
    component: () => import('../views/ModuleViewer.vue'),
    redirect: { name: 'godot.enemy.home' },
    meta: { elementType: 'module', breadcrumbName: 'Enemy' },
    children: [
        godot_enemy_home,
        godot_enemy_stateMachine,
    ]
}



export const godotLibraryRoutes: RouteRecordRaw = {
    path: '/godot',
    name: 'godot',
    component: () => import('../views/LibraryViewer.vue'),
    redirect: { name: 'godot.home' },
    meta: { elementType: 'library', breadcrumbName: 'Godot', customIcon: 'devicon-plain:godot' },
    children: [
        godot_home,
        godot_player,
        godot_enemy,
    ]
}

// AGORA FALTA PADRONIZAR O NOME DOS ARQUIVOS E CRIAR OS OUTROS ARQUIVOS DE ROTA EXPORTADA ASSIM!!