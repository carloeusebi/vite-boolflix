<script>
import TheDisplay from './components/TheDisplay.vue';
import { store } from './store/store';

export default {
	components: { TheDisplay },
	mounted() {
		const params = { params: { query: 'anelli' } };

		this.$http
			.get(`/movie`, params)
			.then(res => {
				store.movies = res.data;
			})
			.catch(e => console.log(e.response.data));

		this.$http
			.get('/tv', params)
			.then(res => {
				store.tvShows = res.data;
			})
			.catch(e => console.log(e.response.data));
	},
};
</script>

<template>
	<TheDisplay />
</template>

<style></style>
