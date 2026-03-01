import type { Theme } from '@/types/app';
import { defineStore } from 'pinia'
import { ref } from 'vue';


function getThemeFromLocalStorage(): Theme {
	return (localStorage.getItem('theme') as Theme) ?? 'light'
}


export const useThemeStore = defineStore('theme', () => {
	const theme = ref<Theme>(getThemeFromLocalStorage());

	function setTheme(newTheme: Theme) {
		theme.value = newTheme;
		localStorage.setItem('theme', newTheme);
	}

	return { theme, setTheme };
})


