<script setup lang="ts">
	import Sidebar from './components/Sidebar.vue';
</script>


<template>
	<div class="fixed top-0 left-0 right-0 bottom-0 flex overflow-hidden bg-(--background-color)">
		<Sidebar />
		<router-view />
	</div>
</template>


<style scoped>

</style>
