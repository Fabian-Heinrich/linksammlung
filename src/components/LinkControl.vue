<template>
  <form @submit="searchLink">
    <input v-model="searchText">
    <button @click="searchLink">Suchen</button>
  </form>
</template>

<script>
export default {
  name: 'link-control',
  data: () => {
    return {
      searchText: ''
    }
  },
  methods: {
    searchLink(event){
      this.$emit('search', this.searchText)
      event.preventDefault();
    }
  }
}
</script>