<script>
import AppSearchbar from './AppSearchbar.vue';
import { store } from '../store/store';

export default {
	components: { AppSearchbar },
	methods: {
		handleSubmit(searchedWord) {
			console.log(searchedWord);
			store.query = searchedWord;
			console.log(store);
		},
	},
};
</script>

<template>
	<AppSearchbar @submitted="handleSubmit" />
</template>

<style scoped></style>
