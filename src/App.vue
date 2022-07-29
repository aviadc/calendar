<template>
<div class="container">
  <Header :currentDate='currentDate'
   @next-month="currentDate++" @prev-month="currentDate--"
   @next-year="currentDate+=12" @prev-year="currentDate-=12" 
   :key="currentDate"/>
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
