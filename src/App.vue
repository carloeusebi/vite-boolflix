<script>
export default {
	data() {
		return {
			movies: [],
			tvs: [],
		};
	},
	mounted() {
		const params = { params: { query: 'anelli' } };

		this.$http
			.get(`/movie`, params)
			.then(res => {
				this.movies = res.data;
				console.log(res.data);
			})
			.catch(e => console.log(e.response.data));

		this.$http
			.get('/tv', params)
			.then(res => {
				this.tvs = res.data;
				console.log(res.data);
			})
			.catch(e => console.log(e.response.data));
	},
};
</script>

<template>
	<h2>{{ movies }}</h2>
	<h2>{{ tvs }}</h2>
</template>

<style></style>
