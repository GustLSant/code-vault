<script setup lang="ts">
    import PageHeader from '@/components/commom/PageHeader.vue';
    import Separator from '@/components/commom/Separator.vue';
    import { useRoute } from 'vue-router';
    import Button from '@/components/commom/Button.vue';
    import COMPONENT_DATA from '@/data/godotComponents/Pl_MovementController.gd?raw'
    import { downloadComponentFile } from '@/utils/data';
    import CodeContainer from '@/components/commom/CodeContainer.vue';

    const route = useRoute();
</script>


<template>
    <PageHeader :title="route.meta.breadcrumbName!" resume="Componente de movimentação de um player FPS"></PageHeader>

    <div class="flex flex-col items-start gap-4">
        <Button @click="() => { downloadComponentFile(COMPONENT_DATA, 'Pl_MovementController.gd') }" icon="mdi:download" variant="filled-primary">
            Download Component
        </Button>

        <CodeContainer :code="COMPONENT_DATA" class="self-stretch" />
    </div>

    <Separator class="my-2" />
    
    <p>O componente trata da movimentação e do sprint comum</p>
</template>