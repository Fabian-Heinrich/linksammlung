<template>
  <header>
    <h1>Linksammlung</h1>
  </header>
  <main>
    <link-control
        :categories="categories"
        :selected-categories="selectedCategories"
        @update-search-string="updateSearchString"
        @update-selected-categories="updateSelectedCategories"
    ></link-control>
    <link-display :links="filteredLinks" :count-all-links="links.length"
                  @update-selected-category="updateSelectedCategories"></link-display>
  </main>
</template>

<script>
import LinkDisplay from "./components/LinkDisplay.vue";
import LinkControl from "./components/LinkControl.vue";

export default {
  components: {LinkControl, LinkDisplay},
  data: () => {
    return {
      links: [],
      categories: [],
      selectedCategories: [],
      searchString: ''
    }
  },
  methods: {
    updateSearchString(searchString) {
      this.searchString = searchString
    },
    updateSelectedCategories(categories) {
      this.selectedCategories = categories
    },
    async getData() {
      try {
        let resLinks = await fetch('http://localhost:3001/links')
        this.links = await resLinks.json()
        let resCategories = await fetch('http://localhost:3001/categories')
        this.selectedCategories = this.categories = await resCategories.json()
      } catch (error) {
        console.error(error)
      }
    }
  },
  computed: {
    filteredLinks() {
      const searchStringLowerCase = this.searchString.toLowerCase()
      const categoriesArray = this.selectedCategories.map(
          ((category) => category.label)
      )

      return this.links.filter(function (value) {
        const linksCategories = value.categories.map(
            ((linkCategory) => linkCategory.label)
        )
        const hasCategory = linksCategories.some(element => {
          return categoriesArray.includes(element)
        })

        const includesSearchString = ((''.concat(value.description, value.label, value.url)).toLowerCase()).includes(searchStringLowerCase)

        return includesSearchString && hasCategory
      })
    }
  },
  created() {
    this.getData()
  }
}
</script>