<script setup lang="ts">
    import PageHeader from '@/components/commom/PageHeader.vue';
    import Separator from '@/components/commom/Separator.vue';
    import { Icon } from '@iconify/vue';


</script>


<template>
    <PageHeader title="Button Component" resume="Componente de Botão com variantes de cores"></PageHeader>

    <div class="flex items-center gap-1 self-start p-2 bg-(--primary-color) text-white rounded-sm shadow-md">
        <Icon icon="mdi:download" />
        <p>Download Componente</p>
    </div>

    <Separator class="my-2" />

    <PageSubtitle>Descrição</PageSubtitle>
    
    <p>aliwjdilçajwld</p>
</template>