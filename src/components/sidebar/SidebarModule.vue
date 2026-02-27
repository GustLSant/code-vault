<script setup lang="ts">
    import type { SidebarModuleData } from '@/types/sidebar';
    import SidebarComponent from './SidebarComponent.vue';

    const props = defineProps<{ data: SidebarModuleData }>();
</script>


<template>
    <div  class="p-2 rounded-md bg-black/5 hover:bg-black/10 transition-colors">
        <div class="flex flex-col">
            <router-link :to="{ name: props.data.routeName }" class="font-bold">{{ props.data.name }}</router-link>
            <div class="flex flex-col pl-4">
                <SidebarComponent v-for="component in props.data.components" :name="component.name" :route-name="component.routeName">{{ component.name }}</SidebarComponent>
            </div>
        </div>
    </div>
</template>


<style scoped>

</style>