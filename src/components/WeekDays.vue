<template>
  <div class="container">
    <div class="week-day" v-for="(day,index) in weekDays" :key="index">{{day}}</div>
  </div>
</template>
<script>
export default {
  name: 'Weekdays',
  data() {
    return{
      weekDays: ['Sunday','Monday','Tuesday','Wednesday','Thrursday','Friday','Saturday'],
    }
  }
}
</script>

<style scoped>
  .container{
    display: flex;
  }

  .week-day{
    /* border: 1px solid black; */
    margin-left: 10px;
  }
</style>