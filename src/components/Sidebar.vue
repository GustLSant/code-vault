<script setup lang="ts">
    import { ref, watch } from 'vue';
    import { useRoute, type RouteLocationMatched, type RouteRecordRaw } from 'vue-router';
    
    type SidebarItem = {
        name: string,
        routeName: string,
        components: {
            name: string,
            routeName: string,
        }[]
    };

    const route = useRoute();
    const sidebarData = ref<SidebarItem[]>([]);
    
    watch(() => route.matched, (_matched) => { buildSidebarData(_matched) }, { immediate: true });


    function buildSidebarData(_matchedRoutes: RouteLocationMatched[]) {
        const libRoute: RouteLocationMatched | undefined = _matchedRoutes.find((_route) => _route.meta.elementType === 'library');
        const moduleRoutes: RouteRecordRaw[] | undefined = libRoute?.children.filter((_route) => _route.meta?.elementType === 'module');

        if (moduleRoutes !== undefined) {
            sidebarData.value = [];

            moduleRoutes.forEach((_moduleRoute) => {
                const componentRoutes: RouteRecordRaw[] | undefined = _moduleRoute.children?.filter((_route) => _route.meta?.elementType === 'component');

                console.log(_moduleRoute.name)

                sidebarData.value.push({
                    name: _moduleRoute.meta!.breadcrumbName!,
                    routeName: _moduleRoute.name! as string,
                    components: (componentRoutes === undefined) ? [] : componentRoutes.map((_componentRoute) => ({
                        name: _componentRoute.meta!.breadcrumbName!,
                        routeName: _componentRoute.name! as string,
                    })),
                });
            });
        }
        else {
            sidebarData.value = [];
        };
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

            <div v-for="module in sidebarData" class="p-2 rounded-md bg-black/5 hover:bg-black/10 transition-colors">
                <div class="flex flex-col">
                    <router-link :to="{ name: module.routeName }" class="font-bold">{{ module.name }}</router-link>
                    <router-link :to="{ name: component.routeName }" class="font-light" v-for="component in module.components">{{ component.name }}</router-link>
                </div>
            </div>
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