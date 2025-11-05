<template>
  <nav class="filter">
    <button @click="handleFilter('all')">View all</button>
    <button @click="handleFilter('completed')">Completed</button>
    <button @click="handleFilter('ongoing')">Ongoing</button>
  </nav>
</template>

<script>
  export default {
    methods: {
      handleFilter(by) {
        this.$emit('handleFilter', by)
      },
    },
  }
</script>

<style scoped>
  .filter {
    text-align: left;
    margin: 20px 0;
  }
  .filter button {
    color: grey;
    text-decoration: none;
    font-size: 12px;
    font-weight: bold;
    text-transform: uppercase;
    border: none;
    background: rgb(232, 230, 230);
    padding: 0 10px;
    cursor: pointer
  }
  .filter button-active {
    color: black;
  }
</style>
