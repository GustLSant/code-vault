scr<script setup lang="ts">
    import type { SidebarComponentData } from '@/types/sidebar';

    const props = defineProps<SidebarComponentData>();
</script>


<template>
    <router-link :to="{ name: props.routeName }" class="font-light">{{ props.name }}</router-link>
</template>


<style scoped>

</style>