<script setup lang="ts">
    import { Icon } from '@iconify/vue';

    type TextInputProps = {
        placeholder?: string,
        startIcon?: string,
        endIcon?: string,
        endIconFuncion?: () => void,
        type?: string,
        name?: string,
        inputmode?: "text" | "email" | "search" | "tel" | "url" | "none" | "numeric" | "decimal",
        errorMessage?: string,
        mask?: (_val: string) => string,
        maxLength?: number,
        inputClass?: string,
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
            class="relative flex shadow-md min-w-[150px] p-2 rounded-md bg-(--input-bg-color) border border-(--input-border-color) hover:border-primary focus:outline-(--input-focus-color)"
            :class="[
                props.startIcon ? 'pl-10' : '',
                props.endIcon ? 'rounded-r-none! border-r-0!' : '',
                props.errorMessage ? 'border-red-500/50!' : '',
            ]"
        >
            <input
                :value="modelValue"
                @input.prevent="onInput"
                @keydown.enter="() => emit('submit')"
                @blur="(e: FocusEvent) => emit('blur', e)"
                @focus="(e: FocusEvent) => emit('focus', e)"
                :type="props.type || 'text'"
                :name="props.name"
                :autocomplete="props.name"
                :inputmode="props.inputmode || 'text'"
                :maxlength="props.maxLength || undefined"
                :placeholder="props.placeholder"
                class="w-full text-base outline-0"
                :class="props.inputClass"
            />
            <Icon v-if="props.startIcon" :icon="props.startIcon" width="24" height="24" class="absolute left-2 top-1/2 -translate-y-1/2 opacity-50" />

            <div
                v-if="props.endIcon"
                class="flex items-center justify-center rounded-r-md primary-bg-gradient text-white px-2 transition duration-150 hover:cursor-pointer hover:brightness-110"
                @click="(props.endIconFuncion ? props.endIconFuncion() : () => {})"
            >
                <Icon :icon="props.endIcon" width="24" height="24" />
            </div>
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