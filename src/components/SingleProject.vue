<template>
  <div class="project" :class="{ done: project.complete }">
    <div class="actions">
      <h3 @click="showDetails = !showDetails">{{ project.title }}</h3>
      <div class="icons">
        <span class="material-symbols-outlined" @click="editPrjocet">
          edit
        </span>
        <span class="material-symbols-outlined" @click="deleteProject">
          delete
        </span>
        <span class="material-symbols-outlined tick" @click="doneProject">
          check
        </span>
      </div>
    </div>
    <div v-show="showDetails" class="details">
      <p>
        {{ project.details }}
      </p>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['project'],
    data() {
      return {
        showDetails: false,
        uri: 'http://localhost:3000/projects/' + this.project.id,
      }
    },
    methods: {
      deleteProject() {
        fetch(this.uri, { method: 'DELETE' })
          .then(() => {
            this.$emit('del', this.project.id)
          })
          .catch((err) => console.log(err))
      },
      doneProject() {
        fetch(this.uri, {
          method: 'PATCH',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ complete: !this.project.complete }),
        })
          .then(() => {
            this.$emit('done', this.project.id)
          })
          .catch((err) => console.log(err))
      },
      editPrjocet() {},
    },
  }
</script>

<style scoped>
  .project {
    margin: 20px auto;
    background: white;
    padding: 10px 20px;
    border-radius: 4px;
    box-shadow: 1px 2px 3 px rgba((0), 0, 0, 0.05);
    border-left: 4px solid red;
  }
  h3 {
    cursor: pointer;
  }

  .actions {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .material-symbols-outlined {
    font-size: 24px;
    margin-left: 10px;
    color: rgb(172, 172, 172);
    cursor: pointer;
  }
  .material-symbols-outlined:hover {
    color: rgb(99, 99, 99);
  }
  .project.done {
    border-left: 4px solid green;
  }
  .project.done .tick {
    color: green;
  }
</style>
