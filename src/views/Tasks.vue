<template>
  <div class="tasks-container">
    <h2>Tasks</h2>
    <button @click="this.$router.go(-1)">back</button>
    <div class="tasks">
        <label for="task">Task</label>
        <input type="text" v-model="task">
        <label for="task">Time</label>
        <input type="text" v-model="task">
    </div>
  </div>
</template>
<script>
export default {
  name: "Tasks",
  data(){
    return{
        task: "",

    }
  }
};
</script>
<style scoped>
.tasks-container {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.tasks{
    height: 70vh;
    width: 50vh;
    border: 1px solid red;
    display: flex;
    flex-direction: column;
}
</style>
