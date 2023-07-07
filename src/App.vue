<script>
import TheHeader from './components/TheHeader.vue';
import TheDisplay from './components/TheDisplay.vue';
import TheSidebar from './components/TheSidebar.vue';
import { setMovies, setTvs } from './store/store';
import { axiosInstance } from './axios';
import { store } from './store/store';

import AppLoader from './components/AppLoader.vue';
const MOVIE = 'movie';
const TV = 'tv';

/**
 *
 * @param {string} endpoint the endpoint to call
 * @param {function} callback the function to store the results
 */
const fetchResults = async (endpoint, callback) => {
	const { query } = store;
	const params = { query };

	return await axiosInstance.get(endpoint, { params }).then(res => {
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
	data: () => store,
	components: { TheHeader, TheDisplay, TheSidebar, AppLoader },
	methods: {
		async handleNewQuery() {
			if (store.query) {
				store.isLoading = true;
				// pass to fetch result the endpoint and the store function as a callback
				await fetchResults(`/search/${MOVIE}`, setMovies);
				await fetchResults(`/search/${TV}`, setTvs);

				store.isLoading = false;
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
	<div class="flex-container">
		<TheSidebar />
		<TheDisplay v-if="!isLoading" />
	</div>
	<AppLoader />
</template>

<style>
.flex-container {
	display: flex;
}
</style>
