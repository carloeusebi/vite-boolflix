<script>
import TheHeader from './components/TheHeader.vue';
import TheDisplay from './components/TheDisplay.vue';
import { setMovies, setTvShows } from './store/store';
import { axiosInstance } from './http';

/**
 * Ajax request
 * @param {string} whatToFetch the resource to request, ex. '/movie' or '/tv'
 * @param {string} query the query parameter, ex 'simpsons'
 * @returns {[Object]} an array with the list of the found elements
 */
const fetchResults = async (whatToFetch, query) => {
	const params = { query };
	const res = await axiosInstance.get(whatToFetch, { params });
	return res.data.results;
};

export default {
	components: { TheHeader, TheDisplay },
	methods: {
		async handleNewQuery(query) {
			const movies = await fetchResults('/movie', query);
			const tvShows = await fetchResults('/tv', query);
			setMovies(movies);
			setTvShows(tvShows);
		},
	},
};
</script>

<template>
	<TheHeader @submitted-new-query="handleNewQuery" />
	<TheDisplay />
</template>

<style></style>
