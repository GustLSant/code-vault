<script setup lang="ts">
    import { Icon } from '@iconify/vue';
    const props = defineProps<{ icon: string, size: number, disabled?: boolean, colorScheme?: 'light' | 'dark' }>();
</script>


<template>
    <div
        class="shrink-0 border border-transparent p-0.5 rounded-full transition-colors duration-150 hover:cursor-pointer select-none"
        :class="[
            (props.disabled) ? 'opacity-40 pointer-events-none' : '',
            (props.colorScheme === 'dark') ? 'hover:border-white/20' : 'hover:border-black/20'
        ]"
    >
        <Icon :icon="props.icon" :width="props.size" :height="props.size" />
    </div>
</template>


<style scoped>

</style>