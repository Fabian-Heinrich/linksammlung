<template>
  <div class="row">
    <div class="col-sm-12 col-lg-6 my-2" v-for="link of links">
      <div class="card">
        <div class="card-header">
          {{ link.label }}
        </div>
        <div class="card-body">
          <div class="card-text">
            {{ link.description }}
          </div>
          <a :href="link.url" class="card-link">{{ link.url }}</a>
        </div>
        <div class="card-footer">
          <span @click="updateSelectedCategory(category)" class="badge bg-dark mx-1" v-for="category in link.categories">{{ category.label }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'link-display',
  props: {
    links: {
      type: Array,
      required: true
    },
    selectedCategories: {
      type: Array
    }
  },
  methods: {
    updateSelectedCategory(category) {
      this.$emit('update-selected-category', [category])
    }
  }
}
</script>