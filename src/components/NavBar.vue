<template>
  <nav class="navbar">
    <router-link :to="{ name: 'home' }">Projects</router-link>
    <router-link :to="{ name: 'add-project' }">Add a New Project</router-link>
  </nav>
</template>

<script>
  export default {}
</script>

<style scoped>
  .navbar {
    text-align: center;
    margin: 40px auto;
  }

  .navbar a {
    color: rgb(93, 91, 91);
    text-decoration: none;
    font-size: 18px;
    font-weight: bold;
    padding: 8px 16px;
  }

  .navbar a.router-link-active {
    border-bottom: 2px solid green;
    padding-bottom: 4px;
  }
</style>
