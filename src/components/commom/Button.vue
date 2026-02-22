<script setup lang="ts">
    import { Icon } from '@iconify/vue';
    import { computed, type CSSProperties } from 'vue';

    type ButtonFilledVariant = 'filled-primary' | 'filled-secondary' | 'filled-accent' | 'filled-danger';
    type ButtonOutlinedVariant = 'outlined-primary' | 'outlined-secondary' | 'outlined-accent' | 'outlined-danger';
    type ButtonVariant = ButtonFilledVariant | ButtonOutlinedVariant;

    const props = defineProps<{ icon?: string, variant: ButtonVariant }>();

    const style = computed<CSSProperties>(getButtonStyle);
    
    function getButtonStyle(): CSSProperties {
        if (props.variant.includes('filled')) {
            let colorVariable: string = '--primary-color';
            
            switch (props.variant) {
                case 'filled-primary':
                    colorVariable = '--primary-color';
                    break;
                case 'filled-secondary':
                    colorVariable = '--secondary-color';
                    break;
                case 'filled-accent':
                    colorVariable = '--accent-color';
                    break;
                case 'filled-danger':
                    colorVariable = '--danger-color';
                    break;
                default:
                    colorVariable = '--primary-color';
                    break;
            };

            const style: CSSProperties = {
                backgroundColor: `var(${colorVariable})`,
                color: 'white'
            };

            return style;
        }
        else {
            let colorVariable: string = '--primary-color';
            
            switch (props.variant) {
                case 'outlined-primary':
                    colorVariable = '--primary-color';
                    break;
                case 'outlined-secondary':
                    colorVariable = '--secondary-color';
                    break;
                case 'outlined-accent':
                    colorVariable = '--accent-color';
                    break;
                case 'outlined-danger':
                    colorVariable = '--danger-color';
                    break;
                default:
                    colorVariable = '--primary-color';
                    break;
            };

            const style: CSSProperties = {
                border: `1px solid var(${colorVariable})`,
                color: `var(${colorVariable})`
            };

            return style;
        }
    }
</script>


<template>
    <button
        class="flex items-center gap-1 p-2 px-4 rounded-sm shadow-md hover:cursor-pointer hover:underline"
        :style="style"
    >
        <Icon v-if="props.icon" :icon="props.icon" width="20" height="20" />
        <slot />
    </button>
</template>


<style scoped>

</style>