<script setup lang="ts">
    import { Icon } from '@iconify/vue';

    type TextInputProps = {
        placeholder?: string,
        startIcon?: string,
        type?: string,
        name?: string,
        id?: string,
        variant?: 'light' | 'dark',
        inputmode?: "text" | "email" | "search" | "tel" | "url" | "none" | "numeric" | "decimal",
        errorMessage?: string,
        mask?: (_val: string) => string,
        maxLength?: number,
        inputClassOverride?: string,
    }

    const modelValue = defineModel<string>({ default: '' });
    const props = defineProps<TextInputProps>();
    const emit = defineEmits<{
        (e: 'submit'): void
        (e: 'blur', event: FocusEvent): void
        (e: 'focus', event: FocusEvent): void
        (e: 'update:modelValue', value: string): void
        (e: 'change'): void
    }>();

    const onInput = (_event: Event) => {
        const target = _event.target as HTMLInputElement;
        let newValue = target.value;

        if (props.mask) { newValue = props.mask(target.value); }
        if (props.inputmode === 'numeric') { newValue = newValue.replace(/\D+/g, ''); }

        target.value = newValue;
        emit('update:modelValue', newValue);
        emit('change');
    };
</script>


<template>
    <div class="flex flex-col gap-0.5">
        <div
            class="relative flex items-center"
        >
            <input
                :value="modelValue"
                @input.prevent="onInput"
                @keydown.enter="() => emit('submit')"
                @blur="(e: FocusEvent) => emit('blur', e)"
                @focus="(e: FocusEvent) => emit('focus', e)"
                :type="props.type || 'text'"
                :id="props.id"
                :name="props.name"
                :autocomplete="props.name"
                :inputmode="props.inputmode || 'text'"
                :maxlength="props.maxLength || undefined"
                :placeholder="props.placeholder"
                class="w-full p-2 rounded-md border text-base shadow-md outline-0"
                :class="[
                    props.startIcon ? 'pl-10' : '',
                    props.variant === 'dark' ? 'text-black bg-(--input-bg-color-dark) border-(--input-border-color-dark)' : 'text-white bg-(--input-bg-color) border-(--input-border-color)',
                    props.errorMessage ? 'border-red-500/50!' : '',
                    props.inputClassOverride,
                ]"
            />
            <Icon v-if="props.startIcon" :icon="props.startIcon" width="24" height="24" class="absolute left-2 top-1/2 -translate-y-1/2 opacity-50" />
        </div>

        <p v-if="props.errorMessage" class="text-start text-sm text-red-500/75">
            {{ props.errorMessage }}
        </p>
    </div>
</template>


<style scoped>
    /* Chrome, Edge, Safari */
    :deep(input::-webkit-outer-spin-button),
    :deep(input::-webkit-inner-spin-button) {
        -webkit-appearance: none;
        margin: 0;
    }

    /* Firefox */
    :deep(input[type="number"]) {
        appearance: textfield;
        -moz-appearance: textfield;
    }
</style>