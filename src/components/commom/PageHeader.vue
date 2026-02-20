<script setup lang="ts">
    const props = defineProps<{ title: string, resume: string }>();
</script>


<template>
    <div class="flex flex-col gap-1">
        <p class="text-3xl font-medium">{{ props.title }}</p>
        <p class="font-light text-lg">{{ props.resume }}</p>
    </div>
</template>


<style scoped>

</style>