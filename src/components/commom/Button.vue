<script setup lang="ts">
    import { Icon } from '@iconify/vue';
    import { computed, type CSSProperties } from 'vue';

    type ButtonFilledVariant =   'filled-primary'   | 'filled-secondary'   | 'filled-accent'   | 'filled-danger';
    type ButtonOutlinedVariant = 'outlined-primary' | 'outlined-secondary' | 'outlined-accent' | 'outlined-danger';
    type ButtonNeutralVariant =  'neutral';
    
    type ButtonVariant = ButtonFilledVariant | ButtonOutlinedVariant | ButtonNeutralVariant;

    const props = defineProps<{ icon?: string, variant: ButtonVariant }>();
    const style = computed<CSSProperties>(getButtonStyle);
    
    
    function getButtonStyle(): CSSProperties {
        const style: CSSProperties = {};

        if (props.variant === 'neutral') {
            style['border'] = '1px solid var(--input-border-color)';
            style['backgroundColor'] = 'var(--input-bg-color)';
            style['color'] = 'white';

            style['--hover-color'] = 'var(--hover-input-bg-color)';
            style['--hover-brightness'] = '100%';
        }
        else {
            const variantSulfix: string = props.variant.split('-')[1]!;
            const colorVariable = '--' + variantSulfix + '-color';

            if (props.variant.includes('filled')) {
                style['backgroundColor'] = `var(${colorVariable})`;
                style['color'] = 'white';

                style['--hover-color'] = `var(${colorVariable})`;
                style['--hover-brightness'] = '120%';
            }
            else {
                style['border'] = `1px solid var(${colorVariable})`;
                style['color'] = `var(${colorVariable})`;

                style['--hover-color'] = `color-mix(in srgb, var(${colorVariable}) 10%, transparent)`;
                style['--hover-brightness'] = '100%';
            }
        }

        return style;
    }
</script>


<template>
    <button
        class="flex items-center gap-1.5 p-2 px-4 rounded-sm shadow-md hover:cursor-pointer hover:underline"
        :style="style"
    >
        <Icon v-if="props.icon" :icon="props.icon" width="20" height="20" />
        <slot />
    </button>
</template>


<style scoped>
    button {
        transition: background-color 0.15s, filter 0.15s;
        
        &:hover {
            background-color: var(--hover-color) !important;
            filter: brightness(var(--hover-brightness)) !important;
        }
    }
</style>