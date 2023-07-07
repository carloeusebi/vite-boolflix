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
			return this.store[page].genres;
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

	margin-top: 6rem;
	position: fixed;
	color: $text-gray;
	left: 0;
	top: 0;
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
