<template>
  <nav class="filter">
    <button @click="handleFilter('all')" :class="{ active: current === 'all' }">
      View all
    </button>
    <button
      @click="handleFilter('completed')"
      :class="{ active: current === 'completed' }"
    >
      Completed
    </button>
    <button
      @click="handleFilter('ongoing')"
      :class="{ active: current === 'ongoing' }"
    >
      Ongoing
    </button>
  </nav>
</template>

<script>
  export default {
    props: ['current'],
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
    cursor: pointer;
  }
  .filter button.active {
    color: black;
  }
</style>
