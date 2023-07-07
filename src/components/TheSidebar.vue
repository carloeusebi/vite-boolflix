<script>
import { store } from '../store/store';

export default {
	data: () => store,
	computed: {
		genres() {
			let genres = '';
			switch (this.activePage) {
				case 'Film':
					genres = this.movie.genres;
					break;
				case 'Serie Tv':
					genres = this.tv.genres;
					break;
				default:
					genres = null;
			}
			return genres;
		},
	},
};
</script>

<template>
	<nav>
		<ul>
			<li v-for="genre in genres">{{ genre.name }}</li>
		</ul>
	</nav>
</template>

<style scoped>
nav {
	margin-top: 6rem;
	position: fixed;
	color: rgba(211, 211, 211, 0.575);
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
}
</style>
