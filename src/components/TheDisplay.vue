<script>
import DisplayGallery from './DisplayGallery.vue';
import { store } from '../store/store';

export default {
	data: () => store,
	components: { DisplayGallery },
};
</script>

<template>
	<main>
		<div class="container">
			<DisplayGallery
				category="movie"
				title="Movies" />
			<DisplayGallery
				category="tv"
				title="TV Shows" />
		</div>
	</main>
</template>

<style scoped>
section {
	margin-bottom: 6rem;
}
</style>
