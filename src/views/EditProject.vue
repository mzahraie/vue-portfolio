<template>
  <form @submit.prevent="handleUpdateProject">
    <label class="label"> Title</label>
    <input class="title" type="text" v-model="project.title" />
    <label class="label">Details</label>
    <textarea class="details" v-model="project.details"></textarea>
    <button class="submit" type="submit">Update Project</button>
  </form>
</template>

<script>
  export default {
    props: ['id'],
    data() {
      return {
        uri: 'http://localhost:3000/projects/' + this.id,
        project: {
          title: '',
          details: '',
        },
      }
    },
    mounted() {
      console.log(this.id)
      fetch(this.uri)
        .then((res) => res.json())
        .then((data) => (this.project = data))
        .catch((error) => console.log(error.message))
    },
    methods: {
      handleUpdateProject() {
        fetch(this.uri, {
          method: 'PATCH',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            details: this.project.details,
            title: this.project.title,
          }),
        })
          .then(() => {
            this.$emit('edit', this.project.id)
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
    color: grey;
  }
  .title {
    padding: 10px;
    border-radius: 5px;
    border: 1px solid #ccc;
    font-size: 16px;
    color: grey;
  }
  .details {
    padding: 10px;
    border-radius: 5px;
    border: 1px solid #ccc;
    font-size: 16px;
    min-height: 100px;
    color: grey;
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
