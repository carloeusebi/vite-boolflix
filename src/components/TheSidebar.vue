<script>
import { store } from '../store/store';

export default {
	data() {
		return {
			store,
			selectedGenre: null,
		};
	},
	computed: {
		genres() {
			const page = this.store.activePage;
			if (page !== 'movie' && page !== 'tv') return null;

			const genres = this.store[page].genres;

			//adding a 'show all genres' before every other genre;
			if (genres[0].id) {
				genres.unshift({ id: null, name: 'Tutti' });
			}
			return genres;
		},
	},
	methods: {
		handleGenreClick(id) {
			this.selectedGenre = id;
			store.genreFilter = id;
		},
	},
};
</script>

<template>
	<nav>
		<ul>
			<li
				v-for="genre in genres"
				:class="{ active: genre.id === selectedGenre }"
				@click="handleGenreClick(genre.id)">
				{{ genre.name }}
			</li>
		</ul>
	</nav>
</template>

<style scoped lang="scss">
@use '../assets/sass/vars' as *;

nav {
	display: none;

	color: $text-gray;
	width: 200px;
	height: 100vh;
	padding-left: 1rem;
	user-select: none;
}

li {
	cursor: pointer;
	padding: 0.125rem 0;
	font-weight: 600;
	font-size: 1.1rem;

	&.active {
		color: white;
	}
}

@media #{$media-laptop} {
	nav {
		display: block;
	}
}
</style>
