<script>
import TheHeader from './components/TheHeader.vue';
import TheDisplay from './components/TheDisplay.vue';
import { store } from './store/store';
import { axiosInstance } from './http';

const fetchResults = async (whatToFetch, query) => {
	const params = { query };
	const res = await axiosInstance.get(whatToFetch, { params });
	return res.data.results;
};

const storeMovies = movies => {
	store.movies = movies.map(({ title, original_title, original_language, vote_average }) => ({
		title,
		original_title,
		original_language,
		vote_average,
	}));
};

const storeTvShows = tvShows => {
	store.tvShows = tvShows.map(({ name, original_name, original_language, vote_average }) => ({
		name,
		original_name,
		original_language,
		vote_average,
	}));
};

export default {
	components: { TheHeader, TheDisplay },
	methods: {
		async handleNewQuery(query) {
			const movies = await fetchResults('/movie', query);
			const tvShows = await fetchResults('/tv', query);
			storeMovies(movies);
			storeTvShows(tvShows);
		},
	},
	mounted() {},
};
</script>

<template>
	<TheHeader @submitted-new-query="handleNewQuery" />
	<TheDisplay />
</template>

<style></style>
