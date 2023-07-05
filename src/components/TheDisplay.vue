<script>
import AppPoster from './AppPoster.vue';
import { store } from '../store/store';

export default {
	data: () => store,
	components: { AppPoster },
};
</script>

<template>
	<h2>MOVIES</h2>
	<AppPoster
		v-for="movie in movies"
		:key="movie.id"
		v-bind="movie" />
	<br />
	<hr />
	<hr />
	<br />
	<h2>TV SHOWS</h2>
	<AppPoster
		v-for="show in tvShows"
		:key="show.id"
		v-bind="show" />
</template>

<style scoped></style>
