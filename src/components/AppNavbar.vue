<script>
export default {};
</script>

<template>
	<nav>
		<ul>
			<li class="active">Home</li>
			<li>Serie TV</li>
			<li>Film</li>
			<li>Originali</li>
			<li>Aggiunti di recente</li>
			<li>La mia lista</li>
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
