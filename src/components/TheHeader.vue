<script>
import AppSearchbar from './AppSearchbar.vue';
import { store } from '../store/store';

export default {
	components: { AppSearchbar },
	methods: {
		handleSubmit(searchedWord) {
			store.query = searchedWord;
			this.$emit('submitted-new-query', searchedWord);
		},
	},
	emits: ['submitted-new-query'],
};
</script>

<template>
	<AppSearchbar @submitted="handleSubmit" />
</template>

<style scoped></style>
