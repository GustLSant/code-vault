<script setup lang="ts">
    import { ref } from 'vue';
    import type { Section } from '../types/app';
    import { APP_DATA } from '../data/app';

    const sections = ref<Section[]>(APP_DATA.sections);
</script>


<template>
    <div class="w-2xs flex flex-col p-4 bg-(--sidebar-color) text-(--sidebar-text-color) shadow-md">
        <div>
            <p class="text-xl">Game Atlas</p>
        </div>
        
        <div class="grow"></div>
        
        <div class="flex flex-col">
            <div v-for="section in sections" class="p-2 rounded-md bg-black/5 hover:bg-black/10 transition-colors">
                <p>{{ section.label }}</p>
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

</style>