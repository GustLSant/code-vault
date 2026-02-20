<script setup lang="ts">
    const props = withDefaults(defineProps<{ variation?: 'horizontal' | 'vertical' }>(), { variation: 'horizontal' });
</script>


<template>
    <div :class="(props.variation === 'horizontal' ? 'h-0.5 w-full' : 'w-0.5 h-full')" class="bg-(--secondary-color)"></div>
</template>


<style scoped>

</style>