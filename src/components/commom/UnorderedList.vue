<script setup lang="ts">
    type ListData = {
        text: string,
        sulfix?: string,
        footer?: string
    }[];

    const props = defineProps<{ data: ListData }>();
</script>


<template>
    <div class="flex flex-col">
        <ul>
            <li v-for="item in props.data" class="ml-8 my-1">
                <div class="flex flex-col">
                    <p>{{ item.text }} <small class="opacity-60">{{ item.sulfix }}</small></p>
                    <small v-if="item.footer" class="-mt-0.5 opacity-60">{{ item.footer }}</small>
                </div>
            </li>
        </ul>
    </div>
</template>


<style scoped>
    ul {
        list-style-type: disc;
        margin: 0;
        padding: 0;
    }
</style>