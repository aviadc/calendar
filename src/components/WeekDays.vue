<template>
  <div class="week-days-container">
    <div class="week-day" v-for="(day,index) in weekDays" :key="index">{{day}}</div>
  </div>
</template>
<script>
export default {
  name: 'Weekdays',
  data() {
    return{
      weekDays: ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'],
    }
  }
}
</script>

<style scoped>
  .week-days-container{
    width: 48.5vw;
    border: 1px solid black;
    display: flex;
    font-size: 1.2rem;
  }

  .week-day{ 
    width: 6.5vw;
    margin: 0.2vw;
    text-align: center;
  }
</style>