<template>
  <div v-for="link of links">
    <div><h2>{{ link.label }}</h2></div>
    <div>{{ link.description }}</div>
    <div><a :href="link.url">{{ link.url }}</a></div>
  </div>
</template>

<script>
export default {
  name: 'link-display',
  props: {
    links: {
      type: Array,
      required: true
    }
  }
}
</script>