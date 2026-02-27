<script setup lang="ts">
    import { ref, watch } from 'vue';
    import { useRoute, useRouter, type RouteLocationMatched, type RouteRecordRaw } from 'vue-router';
    import Separator from '../commom/Separator.vue';
    import SidebarModule from './SidebarModule.vue';
    import type { SidebarLibraryData, SidebarModuleData } from '@/types/sidebar';
import SidebarLibrary from './SidebarLibrary.vue';

    type SidebarData = SidebarLibraryData[] | SidebarModuleData[];

    const route = useRoute();
    const router = useRouter();
    const sidebarData = ref<SidebarData>([]);
    
    watch(() => route.matched, (_matched) => { buildSidebarData(_matched) }, { immediate: true });


    function buildSidebarData(_matchedRoutes: RouteLocationMatched[]) {
        const isInsideLibRoute = _matchedRoutes.filter((_route) => _route.meta.elementType === 'library').length === 1;

        console.log(isInsideLibRoute)

        if (isInsideLibRoute) {
            buildModulesSidebarData(_matchedRoutes)
        }
        else {
            buildLibrariesSidebarData(_matchedRoutes)
        };
    }


    function buildModulesSidebarData(_matchedRoutes: RouteLocationMatched[]) {
        const libRoute: RouteLocationMatched = _matchedRoutes.find((_route) => _route.meta.elementType === 'library')!;
        const moduleRoutes: RouteRecordRaw[] = libRoute?.children.filter((_route) => _route.meta?.elementType === 'module');

        const modules: SidebarModuleData[] = [];

        moduleRoutes.forEach((_moduleRoute) => {
            const componentRoutes: RouteRecordRaw[] | undefined = _moduleRoute.children?.filter((_route) => _route.meta?.elementType === 'component');

            modules.push({
                name: _moduleRoute.meta!.breadcrumbName!,
                routeName: _moduleRoute.name! as string,
                components: (componentRoutes === undefined) ? [] : componentRoutes.map((_componentRoute) => ({
                    name: _componentRoute.meta!.breadcrumbName!,
                    routeName: _componentRoute.name! as string,
                })),
            });
        });

        sidebarData.value = modules;
    }


    function buildLibrariesSidebarData(_matchedRoutes: RouteLocationMatched[]) {
        const libraries: SidebarLibraryData[] = [];

        router.getRoutes().filter((_route) => _route.meta.elementType === 'library').forEach((libRoute) => {
            libraries.push({
                name: libRoute?.meta.breadcrumbName!,
                routeName: libRoute?.name as string,
                customIcon: libRoute?.meta.customIcon!,
            });
        });

        sidebarData.value = libraries;
    }
</script>


<template>
    <div class="sidebar w-2xs flex flex-col p-4 bg-(--sidebar-color) text-(--sidebar-text-color)">
        <div>
            <p class="text-xl">Game Atlas</p>
        </div>
        
        <div class="grow"></div>
        
        <div class="flex flex-col">
            <div class="h-6 bg-(--secondary-color) self-stretch rounded-sm shadow-sm"></div>

            <template v-if="sidebarData[0] && ('components' in sidebarData[0])" v-for="(module, idx) in sidebarData">
                <SidebarModule :data="(module as SidebarModuleData)" />
                <Separator v-if="idx < sidebarData.length - 1" class="bg-white/20" />
            </template>

            <template v-else-if="sidebarData[0]" v-for="(library, idx) in sidebarData">
                <SidebarLibrary :data="(library as SidebarLibraryData)" />
                <Separator v-if="idx < sidebarData.length - 1" class="bg-white/20" />
            </template>

            <template v-else>
                <p>Error: sidebarData sem elemento nenhum</p>
            </template>
        </div>

        <div class="grow"></div>
        
        <div class="flex flex-col items-center gap-0.5">
            <p>Game Atlas</p>
            <p class="text-sm opacity-60">v0.0.1</p>
        </div>
    </div>
</template>


<style scoped>
    .sidebar {
        box-shadow: 2px 0px 8px rgba(0,0,0, 0.35);
    }
</style>