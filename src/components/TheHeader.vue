<script>
import AppSearchbar from './AppSearchbar.vue';
import AppNavbar from './AppNavbar.vue';
import { store } from '../store/store';

export default {
  components: { AppSearchbar, AppNavbar },
  data() {
    return {
      showSearchBar: false,
    };
  },
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
        v-if="showSearchBar"
        @submitted="handleSubmit"
        @key-pressed="handleKeyPress" />
      <font-awesome-icon
        @click="showSearchBar = !showSearchBar"
        icon="fa-solid fa-magnifying-glass" />
      <font-awesome-icon icon="fa-solid fa-bell" />
    </div>
  </header>
</template>

<style lang="scss" scoped>
header {
  margin: 0.5rem 2rem 3rem;
  color: white;

  &,
  :is(.left, .right) {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}

.svg-inline--fa {
  font-size: 1.15rem;
  cursor: pointer;
}

.fa-magnifying-glass {
  margin-right: 0.75rem;
}

.logo {
  height: 50px;
  margin-right: 3rem;
}
</style>
