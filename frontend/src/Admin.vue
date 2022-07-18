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
        <div v-for="(category, key) in categories">
          <label class="form-label" :for="'form-category-' + key">{{ category.label }}</label>
          <input type="checkbox" name="category_ids" :value="category._id" :id="'form-category-' + key">
        </div>
      </div>
      <button class="btn btn-primary my-1">Submit</button>
    </form>

    <h1>Sign in</h1>
    <form action="http://localhost:3001/login" method="post">
      <section>
        <label for="username">Username</label>
        <input id="username" name="username" type="text" autocomplete="username" required autofocus>
      </section>
      <section>
        <label for="current-password">Password</label>
        <input id="current-password" name="password" type="password" autocomplete="current-password" required>
      </section>
      <button type="submit">Sign in</button>
    </form>

    <h1>Sign up</h1>
    <form action="http://localhost:3001/signup" method="post">
      <section>
        <label for="username">Username</label>
        <input id="username" name="username" type="text" autocomplete="username" required autofocus>
      </section>
      <section>
        <label for="current-password">Password</label>
        <input id="current-password" name="password" type="password" autocomplete="current-password" required>
      </section>
      <button type="submit">Sign up</button>
    </form>
  </main>
</template>

<script>

export default {
  data: () => {
    return {
      categories: []
    }
  },
  methods: {
    async getData() {
      try {
        let resCategories = await fetch('http://localhost:3001/categories')
        this.categories = await resCategories.json()
      } catch (e){
        console.error(e.message)
      }
    }
  },
  created() {
    this.getData()
  }
}
</script>