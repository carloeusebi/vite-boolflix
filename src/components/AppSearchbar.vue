<script>
export default {
  data() {
    return {
      searchedWord: '',
    };
  },
  emits: ['submitted', 'key-pressed'],
};
</script>

<template>
  <form
    @keyup="$emit('key-pressed', searchedWord)"
    @submit.prevent="$emit('submitted')">
    <input
      v-model="searchedWord"
      type="search" />
  </form>
</template>

<style lang="scss" scoped>
@use '../assets/sass/vars' as *;

form {
  flex-grow: 1;
  margin: 0 2rem;
  display: flex;
  justify-content: flex-end;
}

input {
  width: 100%;
  max-width: 500px;
  height: 35px;
  border: none;
  border-radius: 5px;
  margin-right: 2rem;
  padding: 0 1rem;
}

// @media #{$media-tablet} {
//   input {
//     width: 300px;
//   }
// }

// @media #{$media-large} {
//   input {
//     width: 600px;
//   }
// }
</style>
