<template>
<div class="container">
  <Weekdays />
  <Calendar />
</div>
</template>

<script>
import Weekdays from "./components/WeekDays.vue"
import Calendar from "./components/Calendar.vue"
export default {
  name: 'App',
  components: {
    Weekdays,
    Calendar,
  }
}

</script>

<style scoped>
  .container{
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center; 
  }

</style>
