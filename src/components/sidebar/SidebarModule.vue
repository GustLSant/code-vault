<script setup lang="ts">
    import type { SidebarModuleData } from '@/types/sidebar';
    import SidebarComponent from './SidebarComponent.vue';
    import { computed } from 'vue';
    import { useRoute } from 'vue-router';
    import { Icon } from '@iconify/vue';

    const props = defineProps<{ data: SidebarModuleData }>();
    const route = useRoute();

    const isCurrentModule = computed<boolean>(() => {
        return route.matched.find((_route) => _route.name === props.data.routeName) != undefined;
    })

    const isCurrentRoute = computed<boolean>(() => {
        return (route.name! as string).includes(props.data.routeName) && (route.name! as string).includes('home');
    })
</script>


<template>
    <div
        class="flex flex-col transition-colors"
        :class="(isCurrentModule) ? 'bg-white/10' : ''"
    >
        <router-link
            :to="{ name: props.data.routeName }"
            class="flex items-center gap-0.5 p-2 hover:bg-white/5 transition-colors font-bold"
            :class="(isCurrentRoute) ? 'bg-white/10!' : ''"
        >
            <Icon v-if="isCurrentRoute" icon="mdi:menu-right" width="18" height="18" />
            <p>{{ props.data.name }}</p>
        </router-link>

        <div class="flex flex-col">
            <SidebarComponent v-for="component in props.data.components" :data="component" :route-name="component">{{ component.name }}</SidebarComponent>
        </div>
    </div>
</template>


<style scoped>

</style>