<script setup lang="ts">
    import { useThemeStore } from '@/stores/theme'
    import Button from './commom/Button.vue';

    const themeStore = useThemeStore()

    function toggle() {
        themeStore.setTheme(
            themeStore.theme === 'dark' ? 'light' : 'dark'
        )
    }
</script>


<template>
    <!-- <div class="flex items-center justify-between gap-2 select-none p-2 border border-white/30 rounded-md">
        <p>Tema:</p>

        <div
            @click="toggle"
            class="relative border border-white/10 rounded-full hover:cursor-pointer w-12 p-px transition-colors"
            :class="(themeStore.theme === 'light') ? 'bg-blue-400' : 'bg-slate-900'"
        >
            <div
                class="relative flex items-center justify-center w-6 h-6 rounded-full bg-white transition-transform"
                :class="(themeStore.theme === 'light') ? 'translate-x-0' : 'translate-x-5'"
            >
                <Icon
                    icon="mdi:white-balance-sunny"
                    width="22"
                    height="22"
                    class="text-yellow-500 transition-opacity absolute"
                    :class="(themeStore.theme === 'light') ? 'opacity-100' : 'opacity-0'"
                />
                <Icon
                    icon="mdi:moon-waning-crescent"
                    width="22"
                    height="22"
                    class="text-yellow-500 transition-opacity absolute"
                    :class="(themeStore.theme === 'dark') ? 'opacity-100' : 'opacity-0'"
                />
            </div>
        </div>
    </div> -->
    <Button
        @click="toggle"
        variant="neutral"
        :icon="(themeStore.theme === 'light') ? 'mdi:moon-waning-crescent' : 'mdi:white-balance-sunny'"
        class="justify-center"
    >
        Alterar Tema
    </Button>
</template>


<style scoped>
    
</style>