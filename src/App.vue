<template>
<div class="container">
  <Header :currentDate='currentDate'
   @next-month="nextMonth()" @prev-month="prevMonth()"
   @next-year="nextYear()" @prev-year="prevYear()" 
   :key="month+year"/>
  <Weekdays  />
  <Calendar :currentDate='currentDate' :key="month+year"/>
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
      currentDate: new Date(), 
      month: 0,
      year: 0,
    }
  },
  mounted(){
    // this.currentDate = new Date();
    console.log("app current Date",this.currentDate);
  },
  methods:{
    nextMonth(){
      this.month++;
      this.currentDate.setMonth(new Date().getMonth()+this.month);
    },
    prevMonth(){
       this.month--;
      this.currentDate.setMonth(new Date().getMonth()+this.month);
    },
    nextYear(){
      this.year++;
       this.currentDate.setFullYear(new Date().getYear()+this.year);
    },
    prevYear(){
      this.year--;
      this.currentDate.setFullYear(new Date().getYear()+this.year);
    }
  }
 
 
}

</script>

<style scoped>
  .container{
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center; 
    margin-top: 4rem;
  }

</style>
