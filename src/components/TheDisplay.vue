<script>
import { store } from '../store/store';

export default {
	data() {
		return store;
	},
};
</script>

<template>
	<p>{{ movies }}</p>
	<p>{{ tvShows }}</p>
</template>

<style scoped></style>
