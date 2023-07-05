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
	<div>
		<p>Titolo: {{ title }}</p>
		<p>Titolo Originale: {{ originalTitle }}</p>
		<p>Lingua Originale: {{ originalLanguage }}</p>
		<p>Voto: {{ vote }}</p>
		<p>Trama: {{ overview }}</p>
		<img
			:src="img"
			:alt="title" />
	</div>
	<hr />
</template>

<style></style>
