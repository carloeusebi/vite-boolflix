<script>
import AppSearchbar from './AppSearchbar.vue';
import { store } from '../store/store';

export default {
	components: { AppSearchbar },
	methods: {
		handleSubmit() {
			this.$emit('submitted-new-query');
		},
		handleKeyPress(word) {
			store.query = word;
		},
	},
	emits: ['submitted-new-query'],
};
</script>

<template>
	<AppSearchbar
		@submitted="handleSubmit"
		@key-pressed="handleKeyPress" />
</template>

<style scoped></style>
