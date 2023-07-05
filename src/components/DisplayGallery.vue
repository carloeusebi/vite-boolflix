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
		<div class="flex-container">
			<AppPoster
				v-for="m in media"
				:key="m.id"
				v-bind="m" />
		</div>
	</section>
</template>

<style lang="scss" scoped>
@use '../assets/sass/vars' as *;
.flex-container {
	flex-wrap: wrap;
	justify-content: start;

	* {
		flex: 0 0 50%;
		padding: 0.5rem 0.25rem;
	}
}

h2 {
	color: white;
	text-transform: uppercase;
}

@media #{$media-tablet} {
	.flex-container > * {
		flex: 0 0 25%;
	}
}

@media #{$media-laptop} {
	.flex-container > * {
		flex: 0 0 20%;
	}
}

@media #{$media-desktop} {
	.container {
		max-width: 1140px;
	}
}

@media #{$media-large} {
	.container {
		max-width: 1320px;
	}
}
</style>
