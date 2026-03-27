<script setup lang="ts">
    import type { SidebarLibraryData } from '@/types/sidebar';
    import { Icon } from '@iconify/vue';

    const props = defineProps<{ data: SidebarLibraryData }>();
</script>


<template>
    <router-link :to="{ name: props.data.routeName }">
        <div class="flex items-center gap-1 p-4 hover:bg-white/10 transition-colors">
            <Icon v-if="props.data.customIcon" :icon="props.data.customIcon" width="24" height="24" />
            <p class="font-bold">{{ props.data.name }}</p>
        </div>
    </router-link>
</template>


<style scoped>

</style>