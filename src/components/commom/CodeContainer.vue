<script setup lang="ts">
    import PageSubtitle from './PageSubtitle.vue';

    const props = defineProps<{ code: string }>();
</script>


<template>
    <div class="flex flex-col gap-1">
        <PageSubtitle>Código Fonte:</PageSubtitle>
        <div class="p-2 border border-(--input-border-color-dark) rounded-md bg-(--input-bg-color-dark) shadow-md max-h-80 overflow-x-auto">
            <p class="whitespace-pre-wrap">{{ props.code }}</p>
        </div>
    </div>
</template>


<style scoped>

</style>