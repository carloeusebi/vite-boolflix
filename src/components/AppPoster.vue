<script>
export default {
	props: {
		id: Number,
		title: String,
		originalTitle: String,
		originalLanguage: String,
		vote: Number,
		overview: String,
		img: String,
	},
};
</script>

<template>
	<div class="poster">
		<img
			:src="img"
			:alt="title" />
	</div>
</template>

<style>
/* I choose not to use scoped here because i don't want to create 100 css selectors, one for each poster, but i wanted to include the writing of the css in this very file */

.poster {
	cursor: pointer;
}
</style>
