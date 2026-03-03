scr<script setup lang="ts">
    import type { SidebarComponentData } from '@/types/sidebar';
    import { Icon } from '@iconify/vue';
    import { computed } from 'vue';
    import { useRoute } from 'vue-router';

    const props = defineProps<{ data: SidebarComponentData }>();
    const route = useRoute();

    const isCurrentRoute = computed<boolean>(() => {
        return route.name === props.data.routeName;
    })
</script>


<template>
    <router-link
        :to="{ name: props.data.routeName }"
        class="flex items-center gap-0.5 p-1 pl-8 font-light hover:bg-white/5"
        :class="(isCurrentRoute) ? 'bg-white/10! -ml-5!' : ''"
    >
        <Icon v-if="isCurrentRoute" icon="mdi:menu-right" width="18" height="18" />
        <p>{{ props.data.name }}</p>
    </router-link>
</template>


<style scoped>

</style>