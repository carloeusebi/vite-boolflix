<script>
import AppSearchbar from './AppSearchbar.vue';
import AppNavbar from './AppNavbar.vue';
import { store } from '../store/store';

export default {
	components: { AppSearchbar, AppNavbar },
	methods: {
		handleSubmit() {
			this.$emit('submitted-new-query');
		},
		handleKeyPress(word) {
			store.query = word;
		},
	},
	emits: ['submitted-new-query'],
};
</script>

<template>
	<header>
		<div class="left">
			<figure>
				<img
					src="logo.png"
					alt="logo"
					class="logo" />
			</figure>
			<AppNavbar />
		</div>
		<div class="right">
			<AppSearchbar
				@submitted="handleSubmit"
				@key-pressed="handleKeyPress" />
		</div>
	</header>
</template>

<style lang="scss" scoped>
header {
	margin: 0.5rem 1rem 3rem;

	&,
	:is(.left, .right) {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
}

.logo {
	height: 50px;
	margin-right: 3rem;
}
</style>
