<script setup lang="ts">
    import PageHeader from '@/components/commom/PageHeader.vue';
    import Separator from '@/components/commom/Separator.vue';
    import { useRoute } from 'vue-router';
    import Button from '@/components/commom/Button.vue';
    import COMPONENT_DATA from '@/components/commom/TextInput.vue?raw'
    import UnorderedList from '@/components/commom/UnorderedList.vue';
    import { ICONFY_REQUIREMENT, TAILWIND_REQUIREMENT, VUE_REQUIREMENT } from '@/data/requirements';
    import { downloadComponentFile } from '@/utils/data';
    import TextInput from '@/components/commom/TextInput.vue';
import CodeContainer from '@/components/commom/CodeContainer.vue';
import PageSubtitle from '@/components/commom/PageSubtitle.vue';

    const route = useRoute();
</script>


<template>
    <PageHeader :title="route.meta.breadcrumbName!" resume="Componente de input de texto comum"></PageHeader>

    <div class="flex flex-col items-start gap-4">
        <Button @click="() => { downloadComponentFile(COMPONENT_DATA, 'TextInput.vue') }" icon="mdi:download" variant="filled-primary">
            Download Component
        </Button>

        <div class="flex flex-col gap-1">
            <PageSubtitle>Demonstração:</PageSubtitle>
            <TextInput variant="dark" start-icon="mdi:text" placeholder="Digite algo aqui" />
        </div>

        <CodeContainer :code="COMPONENT_DATA" class="self-stretch" />

        <div class="flex flex-col gap-1">
            <PageSubtitle>Pré-requisitos:</PageSubtitle>
            <UnorderedList 
                :data="[
                    { text: VUE_REQUIREMENT.name,      sulfix: `(${VUE_REQUIREMENT.version})` },
                    { text: TAILWIND_REQUIREMENT.name, sulfix: `(${TAILWIND_REQUIREMENT.version})` },
                    { text: ICONFY_REQUIREMENT.name,   sulfix: `(${ICONFY_REQUIREMENT.version})` },
                ]"
            />
        </div>
        
    </div>

    <Separator class="my-2" />
    

    <p>aliwjdilçajwld</p>
    <p>aliwjdilçajwld</p>
    <p>aliwjdilçajwld</p>
    <p>aliwjdilçajwld</p>
    <p>aliwjdilçajwld</p>
    <p>aliwjdilçajwld</p>
    <p>aliwjdilçajwld</p>
</template>