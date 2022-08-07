<template>
  <div class="add-task-container">
    <form @submit="onSubmit">
      <label>Task</label>
      <input type="text" name="text" v-model="text"/>
      <label>Time</label>
      <input type="text" name="time" v-model="time" />
      <button>add task</button>
    </form>
  </div>
</template>
<script>
export default {
  name: "AddTask",
  data(){
    return{
      text: "",
      time: "",
    }
  },
  methods:{
    onSubmit(e){  
      e.preventDefault();
    }
  }
}
</script>
<style scoped>
</style>