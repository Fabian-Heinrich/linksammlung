<template>
  <header>
    <h1>Linksammlung - Admin</h1>
  </header>
  <main>
    <form method="post" action="http://localhost:3001/link">
      <div class="form-group">
        <label class="form-label" for="form-link-label">Label</label>
        <input class="form-control" type="text" name="label" id="form-link-label">
      </div>
      <div class="form-group">
        <label class="form-label" for="form-link-url">URL</label>
        <input class="form-control" type="text" name="url" id="form-link-url">
      </div>
      <div class="form-group">
        <label class="form-label" for="form-link-description">Description</label>
        <textarea class="form-control" type="text" name="description" id="form-link-description"></textarea>
      </div>
      <div class="form-group">
        <label class="form-label" for="form-link-description">Description</label>
        <input type="checkbox" name="categories" value="{label: 'Test'}">
      </div>
      <button class="btn btn-primary my-1">Submit</button>
    </form>
  </main>
</template>

<script>

export default {
  data: () => {
    return {
    }
  },
  methods: {
  }
}
</script>