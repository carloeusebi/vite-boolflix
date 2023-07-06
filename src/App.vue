<script>
import TheHeader from './components/TheHeader.vue';
import TheDisplay from './components/TheDisplay.vue';
import { setMovies, setTvShows } from './store/store';
import { axiosInstance } from './axios';
import { store } from './store/store';

/**
 *
 * @param {string} endpoint the endpoint to call
 * @param {function} callback the store action to store the results
 */
const fetchResults = (endpoint, callback) => {
	const { query } = store;
	const params = { query };

	axiosInstance.get(endpoint, { params }).then(res => {
		callback(res.data.results);
	});
};

export default {
	components: { TheHeader, TheDisplay },
	methods: {
		handleNewQuery() {
			if (store.query) {
				// pass to fetch result the endpoint and the store function as a callback
				fetchResults('/movie', setMovies);
				fetchResults('/tv', setTvShows);
			}
		},
	},
};
</script>

<template>
	<TheHeader @submitted-new-query="handleNewQuery" />
	<TheDisplay />
</template>

<style></style>
