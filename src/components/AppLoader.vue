<script>
import { store } from '../store/store';

export default {
	data: () => store,
};
</script>

<template>
	<div
		v-if="isLoading"
		class="layover">
		<h3>Loading...</h3>
	</div>
</template>

<style scoped>
.layover {
	display: flex;
	align-items: center;
	justify-content: center;

	background-color: rgba(0, 0, 0, 0.8);

	position: fixed;
	inset: 0;
	z-index: 10;

	color: white;
	font-size: 3rem;
	user-select: none;
}
</style>
