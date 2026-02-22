<script setup lang="ts">
    import { Icon } from '@iconify/vue';
    import { computed } from 'vue';
    import { useRouter } from 'vue-router';

    const props = defineProps<{
        idx: number,
        routeName: string,
        name: string,
    }>();

    const router = useRouter();
    const icon = computed(() => {
        switch (props.idx) {
            case 0:  return 'mdi:scroll-text-outline';
            case 1:  return 'mdi:archive-outline';
            case 2:  return 'mdi:file-code-outline';
            default: return 'mdi:file-outline'
        }
    })

    function handleClickLink() {
        router.push({ name: props.routeName });
    }
</script>


<template>
    <div
        @click="handleClickLink"
        class="breadcrumb-element flex items-center gap-1 hover:cursor-pointer"
    >
        <Icon :icon="icon" class="icon" width="18" height="18" />
        <p class="name text-lg">{{ props.name }}</p>
    </div>
</template>


<style scoped>
    .breadcrumb-element:hover {
        .icon {
            color: var(--primary-color);
        }
        .name {
            color: var(--primary-color);
            text-decoration: underline;
        }
    }
</style>