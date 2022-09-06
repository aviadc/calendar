<template>
  <div class="tasks-container">
    <h1>{{ this.$route.params.theDate }}</h1>
    <h2>Tasks</h2>
    <button @click="this.$router.go(-1)">back</button>
    <div class="tasks-inner">
      <div class="tasks-list">
      
    
      </div>
      <div class="add-task-container">
        <AddTask :theDate="date"/>
      </div>
    </div>
  </div>
</template>
<script>
import AddTask from "../components/AddTask.vue";
import Task from "../components/Task.vue";
export default {
    name: "Tasks",
    components:{
      AddTask,
      Task,
    },
    data() {
        return {
          
            date: '',
        };
    },
    mounted() {
        this.date = this.$route.params.theDate;
        
    }
}
  
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

.tasks-inner {
  height: 70vh;
  width: 60vw;
  border: 1px solid red;
  display: flex;
}

.tasks-list {
  width: 50%;
  border: 1px solid green;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  padding-top: 1rem;
}

.add-task-container {
  width: 50%;
  border: 1px solid green;
  display: flex;
  justify-content: center;
  
}
</style>
