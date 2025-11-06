<script>
  import SingleProject from '@/components/SingleProject.vue'
  import FilterNav from '@/components/FilterNav.vue'
  export default {
    data() {
      return {
        projects: [],
        uri: 'http://localhost:3000/projects/',
        current: 'all',
      }
    },
    components: {
      SingleProject,
      FilterNav,
    },
    mounted() {
      fetch(this.uri)
        .then((res) => res.json())
        .then((data) => (this.projects = data))
        .catch((error) => console.log(error.message))
    },
    methods: {
      handleDelete(id) {
        this.projects = this.projects.filter((p) => {
          return p.id !== id
        })
      },
      changeDoneStatus(id) {
        let p = this.projects.find((p) => {
          return p.id == id
        })
        p.complete = !p.complete
      },
    },
    computed: {
      filteredProjects() {
        if (this.current === 'completed')
          return this.projects.filter((p) => p.complete)
        if (this.current === 'ongoing')
          return this.projects.filter((p) => !p.complete)
        return this.projects
      },
    },
  }
</script>

<template>
  <FilterNav @handleFilter="current = $event" :current="current" />
  <div v-if="projects.length">
    <div v-for="prj in filteredProjects" :key="prj.id">
      <SingleProject
        :project="prj"
        @done="changeDoneStatus"
        @del="handleDelete"
      />
    </div>
  </div>
  <div v-else>There is no more project to do :)</div>
</template>
