<script>
import { store } from '../store/store';

export default {
	data() {
		return {
			links: ['Home', 'Film', 'Serie Tv'],
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
	color: rgba(211, 211, 211, 0.575);
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
