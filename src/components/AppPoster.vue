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
		<figure>
			<img
				:src="img"
				:alt="title"
				onerror="this.style.display='none'" />
			<p class="on-image-error">{{ title }}</p>
		</figure>
	</div>
</template>

<style lang="scss" scoped>
.poster {
	cursor: pointer;
	position: relative;

	img {
		position: relative;
		z-index: 1;
	}

	figure {
		height: 100%;
		background-color: #989898;
		background-image: url('../assets/img/blank-background.png');
		background-size: contain;
		background-repeat: no-repeat;
		background-position: center;
	}

	.on-image-error {
		position: absolute;
		bottom: 2rem;
		left: 0;
		right: 0;
		text-align: center;
		font-weight: bold;
	}

	.overlay {
	}
}
</style>
