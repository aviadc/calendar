<template>
  <div class="tasks-container">
    <h1>{{this.$route.params.adate}}</h1>
    <h2>Tasks</h2>
    <button @click="this.$router.go(-1)">back</button>
    <div class="tasks">
        <label for="task">Task</label>
        <input type="text" >
        <label for="task">Time</label>
        <input type="text" >
    </div>
  </div>
</template>
<script>
export default {
  name: "Tasks",
  
  data(){
    return{
        task: '',
        date: String,

    };
  },
    mounted(){
        // this.date = this.$route.params.adate;
    }
  
};
// console.log("router",$router);
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
