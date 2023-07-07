<script>
import { store } from '../store/store';
import DisplayPoster from './DisplayPoster.vue';

export default {
	props: {
		category: String,
		title: String,
	},
	data() {
		return { store };
	},
	computed: {},
	components: { DisplayPoster },
};
</script>

<template>
	<section :id="category">
		<h2>{{ title }}</h2>
		<div class="grid-container">
			<DisplayPoster
				v-for="m in store[category].results"
				:key="m.id"
				:category="category"
				v-bind="m" />
		</div>
	</section>
</template>

<style lang="scss">
@use '../assets/sass/vars' as *;

.grid-container {
	grid-template-columns: 50% 50%;
	column-gap: 0.25rem;
	row-gap: 1rem;
}

h2 {
	color: white;
	text-transform: uppercase;
	margin-bottom: 2rem;
}

@media #{$media-tablet} {
	.grid-container {
		grid-template-columns: repeat(3, 1fr);
	}
}

@media #{$media-laptop} {
	.grid-container {
		grid-template-columns: repeat(5, 1fr);
	}
}

// ANIMATIONS

.poster {
	transition: transform 500ms;
}

.grid-container:hover .poster {
	transform: translateX(-25%);
}

.poster:hover ~ .poster {
	transform: translateX(25%);
}

.grid-container .poster:focus,
.grid-container .poster:hover {
	transform: scale(1.5);
	z-index: 1;
}
</style>
