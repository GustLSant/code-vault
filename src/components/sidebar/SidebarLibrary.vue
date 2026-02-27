<script setup lang="ts">
    import type { SidebarLibraryData } from '@/types/sidebar';
    import { Icon } from '@iconify/vue';

    const props = defineProps<{ data: SidebarLibraryData }>();
</script>


<template>
    <div class="flex items-center gap-1 p-2 rounded-md bg-black/5 hover:bg-black/10 transition-colors">
        <Icon v-if="props.data.customIcon" :icon="props.data.customIcon" width="24" height="24" />
        <router-link :to="{ name: props.data.routeName }" class="font-bold">{{ props.data.name }}</router-link>
    </div>
</template>


<style scoped>

</style>