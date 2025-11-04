<script>
  import SingleProject from '@/components/SingleProject.vue'
  export default {
    data() {
      return {
        projects: [],
        uri: 'http://localhost:3000/projects/',
      }
    },
    components: {
      SingleProject,
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
      handleEdit(id) {
         let p = this.projects.find((p) => {
          return p.id == id
        })
       p.title = p.title
       p.details = p.details
      },
    },
  }
</script>

<template>
  <div v-if="projects.length">
    <div v-for="prj in projects" :key="prj.id">
      <SingleProject
        :project="prj"
        @done="changeDoneStatus"
        @del="handleDelete"
        @edit="handleEdit"
      />
    </div>
  </div>
  <div v-else>There is no more project to do :)</div>
</template>
