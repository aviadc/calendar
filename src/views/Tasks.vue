<template>
  <div class="tasks-container">
    <h1>{{ this.$route.params.adate }}</h1>
    <h2>Tasks</h2>
    <button @click="this.$router.go(-1)">back</button>
    <div class="tasks-inner">
      <div class="tasks-list"></div>
      <div class="add-task-container">
        <AddTask />
      </div>
    </div>
  </div>
</template>
<script>
import AddTask from "../components/AddTask.vue";
export default {
    name: "Tasks",
    components:{
      AddTask,
    },
    data() {
        return {
            task: "",
            date: String,
        };
    },
    mounted() {
        // this.date = this.$route.params.adate;
    },
    components: { AddTask }
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

.tasks-inner {
  height: 70vh;
  width: 60vw;
  border: 1px solid red;
  display: flex;
}

.tasks-list {
  width: 50%;
  border: 1px solid green;
}

.add-task-container {
  width: 50%;
  border: 1px solid green;
}
</style>
