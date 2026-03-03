<script setup lang="ts">
	import Sidebar from './components/sidebar/Sidebar.vue';
	import { useThemeStore } from './stores/theme';

	const themeStore = useThemeStore();
</script>


<template>
	<div
		class="fixed top-0 left-0 right-0 bottom-0 flex overflow-hidden bg-(--background-color)"
		:class="themeStore.theme"
	>
		<Sidebar />
		<main class="flex flex-col basis-1 grow p-4 text-(--text-color)">
			<router-view />
		</main>
	</div>
</template>


<style scoped>
	main > div {
		flex-grow: 1;
	}
</style>
