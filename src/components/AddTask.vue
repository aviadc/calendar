<template>
  <div class="add-container">
    <form @submit="onSubmit">
      <label>Task</label>
      <input type="text" name="text" v-model="text" placeholder="add text" />
      <label>Time</label>
      <select>
        <option v-for="option in options" :key="option.id">
          {{ option.value }}
        </option>
      </select>
      <button @click="onSubmit">add task</button>
    </form>
  </div>
</template>
<script>
import {db} from "../main.js"
import { collection, addDoc } from "firebase/firestore";
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
    async onSubmit(e){
      e.preventDefault();
      try {
       const docRef = await addDoc(collection(db, "users"), {
        first: "Ada",
        last: "Lovelace",
        born: 1815
      });
        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
    }
  }
}
</script>
<style scoped>
.add-task-container form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 2rem;
}

.add-task-container form input {
  border: none;
  border-bottom: 1px solid black;
}

.add-task-container form input:focus {
  outline: none;
}
</style>
