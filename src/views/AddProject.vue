<template>
  <form @submit.prevent="handleAddProject">
    <label class="label"> Title</label>
    <input class="title" type="text" v-model="title" />
    <label class="label">Details</label>
    <textarea class="details" v-model="details"></textarea>
    <button class="submit" type="submit">Add Project</button>
  </form>
</template>

<script>
  export default {
    data() {
      return {
        title: '',
        details: '',
      }
    },
    methods: {
      handleAddProject() {
        const newProject = {
          title: this.title,
          details: this.details,
          complete: false,
        }
        fetch('http://localhost:3000/projects', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(newProject),
        })
          .then(() => {
            this.$router.push({ name: 'home' })
          })
          .catch((err) => console.log(err))
      },
    },
  }
</script>

<style scoped>
  form {
    display: flex;
    flex-direction: column;
    width: 400px;
    margin: 0 auto;
    border-radius: 10px;
  }
  .label {
    margin-top: 10px;
    text-transform: uppercase;
    font-weight: bold;
    color: grey
  }
  .title {
    padding: 10px;
    border-radius: 5px;
    border: 1px solid #ccc;
    font-size: 16px;
  }
  .details {
    padding: 10px;
    border-radius: 5px;
    border: 1px solid #ccc;
    font-size: 16px;
    min-height: 100px;
  }
  .submit {
    margin-top: 20px;
    padding: 10px;
    border: none;
    border-radius: 5px;
    background-color: #4caf50;
    color: white;
    font-size: 16px;
    cursor: pointer;
  }
</style>
