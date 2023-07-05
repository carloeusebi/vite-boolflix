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
			<div class="overlay">
				<p><strong>Titolo:</strong> {{ title }}</p>
				<p><strong>Titolo originale:</strong> {{ originalTitle }}</p>
				<p><strong>Voto:</strong> {{ vote }}</p>
				<div class="overview-container">
					<p class="truncate"><strong>Trama:</strong> {{ overview }}</p>
				</div>
			</div>
		</figure>
	</div>
</template>

<style lang="scss" scoped>
.poster {
	cursor: pointer;
	position: relative;
	height: 450px;

	img {
		position: relative;
		z-index: 1;
		object-fit: cover;
		height: 100%;
	}

	figure {
		height: 100%;
		widows: 100%;
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
		position: absolute;
		inset: 0;
		color: white;
		background-color: rgba(0, 0, 0, 0.8);
		z-index: 2;

		font-size: 0.75rem;
		padding: 3rem 0.5rem;

		p {
			margin: 0.5rem 0;
		}

		strong {
			font-size: 0.9rem;
		}

		.overview-container {
			max-height: 150px;
			overflow: auto;
		}

		.truncate:not(:hover) {
			text-overflow: ellipsis;
			white-space: nowrap;
			overflow: hidden;
		}
	}
}
</style>
