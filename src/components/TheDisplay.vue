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
					v-if="activePage !== 'tv'"
					category="movie"
					title="Movies" />
				<DisplayGallery
					v-if="activePage !== 'movie'"
					category="tv"
					title="TV Shows" />
			</div>
			<div v-else>
				<h2>Cerca film o serie tv...</h2>
				<p>La ricerca per genere si può fare solo sulle pagine Film o Serie Tv</p>
			</div>
		</div>
	</main>
</template>

<style scoped>
section {
	margin-bottom: 6rem;
}

h2,
p {
	color: rgba(211, 211, 211, 0.575);
}
</style>
