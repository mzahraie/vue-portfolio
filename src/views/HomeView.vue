<script>
  import SingleProject from '@/components/SingleProject.vue'
  export default {
    data() {
      return {
        projects: [],
        uri: 'http://localhost:3000/projects',
      }
    },
    components: {
      SingleProject,
    },
    mounted() {
      fetch('http://localhost:3000/projects')
        .then((res) => res.json())
        .then((data) => (this.projects = data))
        .catch((error) => console.log(error.message))
    },
    methods: {
      changeDoneStatus(e) {
        console.log('e in compelete', e)
        fetch(uri, { method: 'PUT' })
          .then(() => {
            const compPrj = this.projects.filter((project) => project.id == e)
            compPrj.complete = !compPrj.complete
            console.log('completed project:', compPrj)
          })
          .catch((err) => console.log(err))
      },
      handleDelete(e) {
        console.log('e in delete', e)
        const uri = `${this.uri}/${e}`
        fetch(uri, { method: 'DELETE' })
          .then(() => {
            this.projects = this.projects.filter((project) => project.id !== e)
          })
          .catch((err) => console.log(err))
      },
      handleEdit(e) {
        console.log('e in edit', e)
        const uri = `${this.uri}/${e}`
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
