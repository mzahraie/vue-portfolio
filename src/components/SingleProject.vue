<template>
  <div class="project">
    <div class="actions">
      <h3 @click="showDetails = !showDetails">{{ project.title }}</h3>
      <div class="icons">
        <span class="material-symbols-outlined" @click="editPrjocet">
          edit
        </span>
        <span class="material-symbols-outlined" @click="deleteProject">
          delete
        </span>
        <span class="material-symbols-outlined" @click="doneProject">
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
       
      }
    },
    methods: {
      editPrjocet() {
        this.$emit('edit', this.project.id)
      },
      doneProject() {
        this.$emit('done', this.project.id)
      },
      deleteProject() {
       
        this.$emit('del', this.project.id)
      },
    },
  }
</script>
 
<style>
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
</style>
