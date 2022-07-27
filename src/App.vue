<template>
<div class="container">
  <h2>{{currentDate}}</h2>
  <Header :currentDate='currentDate' @next-month="incrementMonth" @prev-month="decrementMonth" :key="currentDate"/>
  <Weekdays  />
  <Calendar :currentDate='currentDate' :key="currentDate"/>
</div>
</template>

<script>
import Weekdays from "./components/WeekDays.vue"
import Calendar from "./components/Calendar.vue"
import Header from "./components/Header.vue"
export default {
  name: 'App',
  components: {
    Header,
    Weekdays,
    Calendar,
  },
  data(){
    return{
      currentDate: 0, 
    }
  },
  mounted(){
    console.log("current nav",this.currentDate);
  },
  methods: {
    incrementMonth(){
      this.currentDate++;
    },
    decrementMonth(){
       this.currentDate--;
    },
  }
 
}

</script>

<style scoped>
  .container{
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    align-items: center; 
  }

</style>
