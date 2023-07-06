<script>
export default {
	data() {
		return {
			searchedWord: '',
		};
	},
	emits: ['submitted', 'key-pressed'],
};
</script>

<template>
	<form
		@keyup="$emit('key-pressed', searchedWord)"
		@submit.prevent="$emit('submitted')">
		<input
			v-model="searchedWord"
			type="search" />
		<button type="submit">search</button>
	</form>
</template>

<style scoped></style>
