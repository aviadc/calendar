<template>
  <weekdays />
  <calendar />
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

<style>
</style>
