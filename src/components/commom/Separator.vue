<script setup lang="ts">
    const props = withDefaults(defineProps<{
        variation?: 'horizontal' | 'vertical',
    }>(), {
        variation: 'horizontal',
    });
</script>


<template>
    <div 
        :class="(props.variation === 'horizontal' ? 'h-px w-full' : 'w-px h-full')"
        class="bg-(--secondary-color) shrink-0"
    >
    </div>
</template>


<style scoped>

</style>