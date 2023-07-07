<script>
import TheHeader from './components/TheHeader.vue';
import TheDisplay from './components/TheDisplay.vue';
import { setMovies, setTvShows } from './store/store';
import { axiosInstance } from './axios';
import { store } from './store/store';

/**
 *
 * @param {string} endpoint the endpoint to call
 * @param {function} callback the function to store the results
 */
const fetchResults = (endpoint, callback) => {
	const { query } = store;
	const params = { query };

	axiosInstance.get(`/search${endpoint}`, { params }).then(res => {
		const media = res.data.results;

		media.forEach(m => {
			const endpointForCast = `${endpoint}/${m.id}/credits`;
			axiosInstance.get(endpointForCast).then(res => {
				const cast = res.data.cast;
				// since casts include also other roles like Directing, Camera, Crews etc.. we need to filter only looking for Acting value
				const firstFiveActors = [];
				for (let i = 0; firstFiveActors.length < 5 && i < cast.length; i++) {
					if (cast[i].known_for_department === 'Acting') firstFiveActors.push(cast[i].name);
				}
				m.cast = firstFiveActors;
			});
		});

		callback(media);
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
