<script>
import DisplayGallery from './DisplayGallery.vue';
import { store } from '../store/store';

export default {
	data: () => store,
	computed: {
		thereAreItems() {
			const movies = this.movie.results.length || null;
			const tvSeries = this.tv.results.length || null;
			return movies || tvSeries;
		},
	},
	components: { DisplayGallery },
};
</script>

<template>
	<main>
		<div class="container">
			<div
				v-if="thereAreItems"
				class="the-display">
				<DisplayGallery
					v-if="activePage !== 'Serie Tv'"
					category="movie"
					title="Movies" />
				<DisplayGallery
					v-if="activePage !== 'Film'"
					category="tv"
					title="TV Shows" />
			</div>
			<div v-else><h2>Cerca</h2></div>
		</div>
	</main>
</template>

<style scoped>
section {
	margin-bottom: 6rem;
}
</style>
