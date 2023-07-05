<script>
import { store } from '../store/store';

export default {
	computed: {
		movies() {
			return store.movies;
		},
		tvShows() {
			return store.tvShows;
		},
	},
};
</script>

<template>
	<div>
		<p v-for="movie in movies">
			{{ movie }}
		</p>
	</div>
	<br />
	<hr />
	<br />
	<div>
		<p v-for="show in tvShows">{{ show }}</p>
	</div>
</template>

<style scoped></style>
