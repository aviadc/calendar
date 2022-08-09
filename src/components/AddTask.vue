<template>
  <div class="add-container">
    <form @submit="onSubmit">
      <label>Task</label>
      <input type="text" name="text" v-model="text" placeholder="add text"/>
      <label>Time</label>
      <select>
        <option v-for="option in options" :key="option.id">
          {{option.value}}
        </option>
      </select>
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
      options: [],
    }
  },
  mounted(){
   for(let i=0;i<24;i++){
    this.options.push(
      {
        value: i<10? `0${i}:00`: `${i}:00`,
        id: i,
      }
    )
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
.add-task-container form{
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 2rem;
}

.add-task-container form input{
  border: none;
  border-bottom: 1px solid black;
}

.add-task-container form input:focus{
   outline: none;
}
</style>