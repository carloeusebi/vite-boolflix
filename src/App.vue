<script>
import TheHeader from './components/TheHeader.vue';
import TheDisplay from './components/TheDisplay.vue';
import { store } from './store/store';

export default {
	components: { TheHeader, TheDisplay },
	mounted() {
		const params = { params: { query: 'anelli' } };

		this.$http
			.get(`/movie`, params)
			.then(res => {
				console.log(res.data.results);
				store.movies = res.data.results.map(({ title, original_title, original_language, vote_average }) => ({
					title,
					original_title,
					original_language,
					vote_average,
				}));
				console.log(store.movies);
			})
			.catch(e => console.log(e));

		this.$http
			.get('/tv', params)
			.then(res => {
				store.tvShows = res.data.results.map(({ name, original_name, original_language, vote_average }) => ({
					name,
					original_name,
					original_language,
					vote_average,
				}));
			})
			.catch(e => console.log(e));
	},
};
</script>

<template>
	<TheHeader />
	<TheDisplay />
</template>

<style></style>
