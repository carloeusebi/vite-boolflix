<script>
import AppPoster from './AppPoster.vue';

export default {
	props: {
		sectionId: String,
		title: String,
		media: Array,
	},
	components: { AppPoster },
};
</script>

<template>
	<section :id="sectionId">
		<h2>{{ title }}</h2>
		<div class="grid-container">
			<AppPoster
				v-for="m in media"
				:key="m.id"
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
</style>
