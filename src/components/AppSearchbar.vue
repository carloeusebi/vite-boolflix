<script>
export default {
	data() {
		return {
			searchedWord: 'Signore degli anelli',
		};
	},
	emits: ['submitted'],
};
</script>

<template>
	<form @submit.prevent="$emit('submitted', searchedWord)">
		<input
			v-model="searchedWord"
			type="search" />
		<button type="submit">search</button>
	</form>
</template>

<style scoped></style>
