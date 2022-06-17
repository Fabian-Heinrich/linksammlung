<template>
  <header>
    <h1>Linksammlung</h1>
  </header>
  <main>
    <link-control @search="search"></link-control>
    <link-display :links="filteredLinks"></link-display>
  </main>
</template>

<script>
import LinkDisplay from "./components/LinkDisplay.vue";
import LinkControl from "./components/LinkControl.vue";
import linksJSON from "./data/links.json"

export default {
  components: {LinkControl, LinkDisplay},
  data: () => {
    return {
      links: linksJSON,
      filteredLinks: []
    }
  },
  methods: {
    search(searchText){
      this.filteredLinks = this.links.filter(function(value, index, array){
        return (Object.values(value).join('').toLowerCase()).includes(searchText.toLowerCase())
      })
    }
  },
  created() {
    this.filteredLinks = this.links
  }
}
</script>