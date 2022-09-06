<template>
  <div class="task-container">
    <div class="task-left"></div>
    <div class="task-inner">
      <h3 class="task-title">{{title}}</h3>
      <h4 class="task-time">{{time}}</h4>
    </div>
    <div class="delete-task">
      <button>X</button>
    </div>
  </div>
</template>
<script>
export default {
  name: "Task",
  data(){
   return{
    text: "text"
   }
  },
  props:{
    title: String,
    time: String,
  }
}

</script>
<style scoped>
.task-container{
  display: flex;
  width: 80%;
  height: 50px;
  border: 1px solid yellow;
}

.task-inner{
  width: 85%;
  border: 1px solid green;
  text-align: center;
}

.task-left{
  width: 2%;
  height: 100%;
  background-color: blue;
}

.delete-task{
  width: 13%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
