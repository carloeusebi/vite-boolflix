<script>
import TheHeader from './components/TheHeader.vue';
import TheDisplay from './components/TheDisplay.vue';
import TheSidebar from './components/TheSidebar.vue';
import { setMovies, setTvs } from './store/store';
import { axiosInstance } from './axios';
import { store } from './store/store';

const MOVIE = 'movie';
const TV = 'tv';

/**
 *
 * @param {string} endpoint the endpoint to call
 * @param {function} callback the function to store the results
 */
const fetchResults = (endpoint, callback) => {
	const { query } = store;
	const params = { query };

	axiosInstance.get(endpoint, { params }).then(res => {
		const medias = res.data.results;
		callback(medias);
	});
};

const fetchGenres = (endpoint, destination) => {
	axiosInstance.get(endpoint).then(res => {
		store[destination].genres = res.data.genres;
	});
};

export default {
	components: { TheHeader, TheDisplay, TheSidebar },
	methods: {
		handleNewQuery() {
			if (store.query) {
				// pass to fetch result the endpoint and the store function as a callback
				fetchResults(`/search/${MOVIE}`, setMovies);
				fetchResults(`/search/${TV}`, setTvs);
			}
		},
	},
	created() {
		fetchGenres(`/genre/${MOVIE}/list`, MOVIE);
		fetchGenres(`/genre/${TV}/list`, TV);
	},
};
</script>

<template>
	<TheHeader @submitted-new-query="handleNewQuery" />
	<TheSidebar />
	<TheDisplay />
</template>

<style></style>
