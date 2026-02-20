<script setup lang="ts">
    import Breadcrumb from '@/components/breadcrumb/Breadcrumb.vue';

    
</script>


<template>
    <div class="flex flex-col gap-6 grow p-4 text-(--text-color)">
        <Breadcrumb />
        <router-view />
    </div>
</template>


<style scoped>

</style>