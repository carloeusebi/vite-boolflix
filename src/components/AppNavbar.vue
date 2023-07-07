<script>
import { store } from '../store/store';

export default {
	data() {
		return {
			links: ['Home', 'movie', 'tv'],
			selectedLink: 'Home',
		};
	},
	methods: {
		handleClick(clickedLink) {
			store.activePage = this.selectedLink = clickedLink;
		},
	},
};
</script>

<template>
	<nav>
		<ul>
			<li
				v-for="link in links"
				@click="handleClick(link)"
				:class="{ active: link === selectedLink }">
				{{ link }}
			</li>
		</ul>
	</nav>
</template>

<style lang="scss" scoped>
@use '../assets/sass/vars' as *;

ul {
	display: flex;
}

li {
	padding: 0 1rem;
	font-weight: bold;
	color: $text-gray;
	cursor: pointer;

	&.active {
		color: white;
	}

	&:hover {
		color: white;
	}
}

nav {
	display: none;
}

@media #{$media-laptop} {
	nav {
		display: block;
	}
}
</style>
