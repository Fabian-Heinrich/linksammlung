<template>
  <div class="row">
    <div class="col-sm-12 col-lg-6 my-1">
      <form @submit="updateSearchString">
        <input v-model="searchString" @keyup="updateSearchString">
        <button type="submit">Suchen</button>
      </form>
    </div>
    <div class="col-sm-12 col-lg-6 my-1">
      <label>Kategorien:</label>
      <div v-for="(category, key) in categories" :key="key" class="category-checkbox">
        <input
            type="checkbox"
            v-model="selectedCategories"
            :value="category"
            :id="'category-checkbox-' + key"
            class="btn-check"
            @change="updateSelectedCategories"
        >
        <label :for="'category-checkbox-' + key" class="btn btn-outline-dark">{{ category.label }}</label>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'link-control',
  props: {
    categories: {
      type: Array
    },
    selectedCategories: {
      type: Array
    }
  },
  data: () => {
    return {
      searchString: ''
    }
  },
  methods: {
    updateSearchString(event) {
      this.$emit('update-search-string', this.searchString)
      event.preventDefault();
    },
    updateSelectedCategories() {
      this.$emit('update-selected-categories', this.selectedCategories)
    }
  },
  mounted() {
    this.id = this._uid
  }
}
</script>

<style scoped>
.category-checkbox {
  display: inline-block;
  margin-right: 5px;
  margin-bottom: 5px;
}
</style>