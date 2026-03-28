<script setup lang="ts">
    import { computed, ref, watch } from 'vue';
    import { useRoute, useRouter, type RouteLocationMatched } from 'vue-router';
    import Separator from '../commom/Separator.vue';
    import SidebarModule from './SidebarModule.vue';
    import type { SidebarLibraryData, SidebarModuleData } from '@/types/sidebar';
    import SidebarLibrary from './SidebarLibrary.vue';
    import ThemeSwitcher from '../ThemeSwitcher.vue';
    import Button from '../commom/Button.vue';
    import TextInput from '../commom/TextInput.vue';

    const librariesSidebarData = ref<SidebarLibraryData[]>([]);
    const modulesSidebarData = ref<SidebarModuleData[]>([]);

    const filter = ref<string>('');
    const route = useRoute();
    const router = useRouter();

    const isAppHomeRoute = computed(() => route.path === '/');

    watch(() => route.matched, (matched) => {
        if (isAppHomeRoute.value) { buildLibrariesSidebarData(); }
        else { buildModulesSidebarData(matched); }
    }, { immediate: true });


    const filteredLibrariesSidebarData = computed(
        () => librariesSidebarData.value.filter(lib => lib.name.toLowerCase().includes(filter.value.toLowerCase()))
    );

    const filteredModulesSidebarData = computed(() =>
        modulesSidebarData.value.map(module => ({
            ...module,
            components: module.components.filter(component =>
                component.name.toLowerCase().includes(filter.value.toLowerCase())
            )
        }))
    );


    function buildModulesSidebarData(matchedRoutes: RouteLocationMatched[]) {
        const libRoute = matchedRoutes.find(r => r.meta.elementType === 'library');
        if (!libRoute) {
            modulesSidebarData.value = [];
            return;
        }

        const moduleRoutes = libRoute.children?.filter(r => r.meta?.elementType === 'module');

        modulesSidebarData.value = moduleRoutes.map(moduleRoute => {
            const componentRoutes = moduleRoute.children?.filter(r => r.meta?.elementType === 'component') ?? [];

            return {
                name: moduleRoute.meta!.breadcrumbName!,
                routeName: moduleRoute.name! as string,
                components: componentRoutes.map(componentRoute => ({
                    name: componentRoute.meta!.breadcrumbName!,
                    routeName: componentRoute.name! as string,
                }))
            };
        });
    }


    function buildLibrariesSidebarData() {
        librariesSidebarData.value = router.getRoutes()
            .filter(route => route.meta.elementType === 'library')
            .map(libRoute => ({
                name: libRoute.meta.breadcrumbName!,
                routeName: libRoute.name as string,
                customIcon: libRoute.meta.customIcon!,
            }));
    }


    function returnHomePage() {
        router.push('/');
    }
</script>


<template>
    <div class="sidebar w-2xs shrink-0 flex flex-col py-4 bg-(--sidebar-color) text-(--sidebar-text-color)">
        <div class="mb-4 p-4">
            <p class="text-3xl zen-dots italic font-bold">CodeVault</p>
        </div>
        
        <div class="flex flex-col gap-4">
            <div class="px-3">
                <TextInput v-model="filter" placeholder="Pesquisar Item" start-icon="mdi:search" />
            </div>

            <div class="flex flex-col">

                <template v-if="isAppHomeRoute">
                    <template v-if="filteredLibrariesSidebarData.length > 0">
                        <SidebarLibrary
                            v-for="(library) in filteredLibrariesSidebarData"
                            :key="library.routeName"
                            :data="library"
                        />
                    </template>
                    <p v-else class="p-4 opacity-60">Nenhuma library encontrada</p>
                </template>

                <template v-else>
                    <template v-if="filteredModulesSidebarData.length > 0">
                        <SidebarModule
                            v-for="(module) in filteredModulesSidebarData"
                            :key="module.routeName"
                            :data="module"
                        />
                    </template>
                    <p v-else class="p-4 opacity-60">Nenhum module encontrado</p>
                </template>

            </div>
        </div>

        <div class="grow"></div>
        
        <footer class="flex flex-col gap-4 px-3">
            <div class="flex flex-col gap-2">
                <Button v-if="!isAppHomeRoute" @click="returnHomePage" variant="neutral" icon="mdi:home-outline" class="justify-center">
                    Página Inicial
                </Button>
                <ThemeSwitcher />
            </div>

            <div class="flex flex-col items-center gap-0.5">
                <p>CodeVault</p>
                <p class="text-sm opacity-60">v0.0.1</p>
            </div>
        </footer>
    </div>
</template>


<style scoped>
    .sidebar {
        box-shadow: 2px 0px 8px rgba(0,0,0, 0.35);
    }
</style>