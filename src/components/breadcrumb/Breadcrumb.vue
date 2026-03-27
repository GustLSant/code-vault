<script setup lang="ts">
    import { computed } from 'vue';
    import { useRoute } from 'vue-router';
    import BreadcrumbElement from './BreadcrumbElement.vue';
    import { Icon } from '@iconify/vue';
    import HoverableIcon from '../commom/HoverableIcon.vue';
    import { useRouter } from 'vue-router';

    const route = useRoute();
    const router = useRouter();
    
    const routeElements = computed<{ routeName: string, name: string }[]>(() => {
        const routes = route.matched;
        const onlyRoutesWithMeta = routes.filter((route) => route.meta);

        const elements = onlyRoutesWithMeta.map((route) => ({
            routeName: route.name as string,
            name: route.meta.breadcrumbName!,
        }))
        
        return elements;
    })

    function handleClickReturn() { router.back(); }
</script>


<template>
    <div class="flex items-center gap-4">
        <HoverableIcon v-if="route.path !== ''" @click="handleClickReturn" icon="mdi:arrow-left" :size="22" />

        <div class="flex items-center gap-1">
            <template v-for="(element, idx) in routeElements" :key="idx">
                <BreadcrumbElement :idx="idx" :name="element.name" :routeName="element.routeName" />
                <Icon v-if="idx < 2" icon="mdi-light:chevron-right" width="24" height="24" />
            </template>
        </div>
    </div>
</template>