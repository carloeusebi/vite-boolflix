<script>
import { axiosInstance } from '../axios';

export default {
	props: {
		id: Number,
		title: String,
		originalTitle: String,
		originalLanguage: String,
		vote: Number,
		overview: String,
		img: String,
		category: String,
	},
	data() {
		return { cast: '' };
	},
	computed: {
		flagUrl() {
			const url = new URL(`../assets/img/${this.originalLanguage}.png`, import.meta.url);
			const lang = this.originalLanguage;

			return lang === 'it' || lang === 'en' ? url.href : null;
		},
	},
	methods: {
		starClass(n) {
			return n <= this.vote ? 'fa-solid' : 'fa-regular';
		},
	},
	mounted() {
		const endpoint = `${this.category}/${this.id}/credits`;

		console.log(endpoint);

		axiosInstance.get(endpoint).then(res => {
			const cast = res.data.cast;
			const firstFiveActors = [];

			for (let i = 0; firstFiveActors.length < 5 && i < cast.length; i++) {
				if (cast[i].known_for_department === 'Acting') {
					firstFiveActors.push(cast[i].name);
				}
			}
			this.cast = firstFiveActors.join(', ');
		});
	},
};
</script>

<template>
	<div class="poster">
		<figure>
			<!-- IMAGE -->
			<img
				:src="img"
				:alt="title"
				onerror="this.style.display='none'" />

			<!-- ON 404 -->
			<p class="on-image-error">{{ title }}</p>

			<!-- OVERLAY -->
			<div class="overlay">
				<p><strong>Titolo:</strong> {{ title }}</p>
				<p><strong>Titolo originale:</strong> {{ originalTitle }}</p>
				<div class="original-language">
					<strong>Lingua originale: </strong>
					<img
						v-if="flagUrl"
						:src="flagUrl"
						:alt="originalLanguage" />
					<span v-else>{{ originalLanguage.toUpperCase() }}</span>
				</div>

				<!-- CAST -->
				<div class="cast"><strong>Cast:</strong> {{ cast }}</div>

				<!-- VOTE -->
				<p class="rating">
					<strong>Rating:</strong>
					<font-awesome-icon
						v-for="n in 5"
						:key="n"
						:icon="`${starClass(n)} fa-star`" />
				</p>

				<!-- OVERVIEW -->
				<div class="overview-container">
					<p class="truncate"><strong>Trama:</strong> {{ overview }}</p>
				</div>
			</div>
		</figure>
	</div>
</template>

<style lang="scss" scoped>
@use '../assets/sass/vars' as *;

.poster {
	cursor: pointer;
	position: relative;

	&:hover .overlay {
		display: block;
	}
}

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

.original-language {
	display: flex;
	align-items: center;

	img {
		width: 20px;
		height: auto;
		border-radius: 2px;
	}

	strong {
		margin-right: 0.25rem;
	}
}

.overlay {
	display: none;
	position: absolute;
	inset: 0;
	color: white;
	background-color: rgba(0, 0, 0, 0.8);
	z-index: 2;

	font-size: 0.6rem;
	padding: 1rem 0.5rem;

	p {
		margin: 0.45rem 0;
	}

	strong {
		font-size: 0.6rem;
	}

	.overview-container {
		max-height: 75px;
		overflow: auto;
	}

	/* if overview is longer than fives row it truncates the overview when not in hover; when in hover, over the overview, it display the overview in full width*/
	.truncate:not(:hover) {
		display: -webkit-box;
		-webkit-line-clamp: 5;
		-webkit-box-orient: vertical;
		text-overflow: ellipsis;
		overflow: hidden;
	}
}

.rating {
	display: flex;
	align-items: center;

	strong {
		margin-right: 0.5rem;
	}
}

@media #{$media-tablet} {
	.overlay {
		font-size: 0.6rem;
		padding: 1.5rem 0.5rem;

		strong {
			font-size: 0.75rem;
		}

		.overview-container {
			max-height: 150px;
		}
	}
}
</style>
