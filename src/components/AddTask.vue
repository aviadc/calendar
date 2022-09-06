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
import { db } from "../main.js";
import { collection, addDoc, updateDoc, doc } from "firebase/firestore";
import { mapGetters } from "vuex";
export default {
  name: "AddTask",
  data() {
    return {
      text: "",
      time: "",
      options: [],
    };
  },
  props: ["theDate"],
  mounted() {
    for (let i = 0; i < 24; i++) {
      this.options.push({
        value: i < 10 ? `0${i}:00` : `${i}:00`,
        id: i,
      });
    }
  },
  computed: {
    ...mapGetters(["userRefId","tasks"]),
  },
  methods: {
    async onSubmit(e) {
      e.preventDefault();
      try {
        console.log("this.date: ", this.theDate);
        console.log("this.USERREFID: ", this.userRefId);
        console.log("this.tasks: ", this.tasks[this.theDate.split('/').join('')]);
        // const userDocRef = doc(db, "users", this.userRef.id);
        // console.log("update ref?",userDocRef);
        await updateDoc(doc(db, "users", this.userRefId), {
          [`tasks.${this.theDate.split('/').slice(1).join('')}`]: {},
        });
      } catch (e) {
        console.error("Error adding document: ", e);
      }
    },
  },
};
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
