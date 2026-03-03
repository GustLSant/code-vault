<script setup lang="ts">
    import Breadcrumb from '@/components/breadcrumb/Breadcrumb.vue';

    
</script>


<template>
    <div class="flex flex-col gap-8">
        <Breadcrumb />
        <div class="flex flex-col gap-6 basis-1 grow overflow-y-auto">
            <router-view />
        </div>
    </div>
</template>


<style scoped>

</style>