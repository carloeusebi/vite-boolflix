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
				:media="movies"
				section-id="movies"
				title="Movies" />
			<DisplayGallery
				:media="tvShows"
				section-id="tv-series"
				title="TV Shows" />
		</div>
	</main>
</template>

<style scoped>
section {
	margin-bottom: 6rem;
}
</style>
