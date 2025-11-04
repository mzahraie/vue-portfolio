<script setup>
  import { RouterLink, RouterView } from 'vue-router'
  import NavBar from './components/NavBar.vue'
</script>

<template>
  <div>
    <nav-bar></nav-bar>
    <router-view></router-view>
  </div>
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
