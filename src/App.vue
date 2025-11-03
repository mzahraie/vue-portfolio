<script setup>
  import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <RouterView />
</template>

<style>
  /* Center the #app container horizontally and vertically */
  #app {
    display: block;
    justify-content: center;
    align-items: center;
    background: rgb(232, 230, 230);
    padding: 50px;
    border-radius: 10px;
    width: 700px;
  }
</style>
