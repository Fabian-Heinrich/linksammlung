<template>
  <div class="row">
    <div class="col-sm-12 col-lg-6 my-1">
      <form @submit="updateSearchString">
        <input v-model="searchString" @keyup="updateSearchString">
        <button type="submit">Suchen</button>
      </form>
    </div>
    <div class="col-sm-12 col-lg-6 my-1">
      <label for="selectedCategories">Kategorien:</label>
      <select id="selectedCategories" class="form-select" v-model="selectedCategories" multiple @change="updateSelectedCategories" size="1">
        <option :value="{label: category.label}" v-for="category in categories">
          {{ category.label }}
        </option>
      </select>
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
select {
  width: auto;
  max-width: 100%;
  overflow-x: scroll;
}

select option {
  display: inline-block;
  margin-left: 5px;
  margin-right: 5px;
  border-radius: 5px;
}
</style>