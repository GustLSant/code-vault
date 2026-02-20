<script setup lang="ts">
    import { computed } from 'vue';
    import { useRoute } from 'vue-router';
    import BreadcrumbElement from './BreadcrumbElement.vue';
import { Icon } from '@iconify/vue';

    const route = useRoute();
    
    const routeElements = computed<{ path: string, name: string }[]>(() => {
        const routes = route.matched;
        const onlyRoutesWithMeta = routes.filter((route) => route.meta);

        const elements = onlyRoutesWithMeta.map((route) => ({
            path: route.path,
            name: route.meta.breadcrumbName!,
        }))
        
        return elements;
    })
</script>


<template>
    <div class="flex items-center gap-1">
        <template v-for="(element, idx) in routeElements" :key="idx">
            <BreadcrumbElement :idx="idx" :name="element.name" :path="element.path" />
            <Icon v-if="idx < 2" icon="mdi-light:chevron-right" width="24" height="24" />
        </template>
    </div>
</template>