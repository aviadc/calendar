<template>
  <div class="calendar-container">
    <!-- <button v-on:click="increment">{{ number }}</button> -->
    <br>
    <Day v-for="day in paddingDays" :key="day" :dayNumber="day" aclass="padding"/>
    <Day v-for="day in daysInMonth" :key="day" :dayNumber="day" aclass="current-month"/>
  </div>
</template>
<script>
import Day from './Day.vue';

export default {
  components: { Day },
  name: "Calendar",
  data() {
    return {
      weekDays: [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thrursday",
        "Friday",
        "Saturday",
      ],
      dt: Date,
      day: Number,
      month: Number,
      year: Number,
      number: 0,
      daysInMonth: Number,
      dateString: Date,
      paddingDays: Number, //the number of days in the first row in the calendar of the previous month
    };
  },
  computed: {},
  mounted() {
    this.dt = new Date();
    this.day = this.dt.getDate();
    this.month = this.dt.getMonth();
    this.year = this.dt.getFullYear();
    this.daysInMonth = new Date(this.year, this.month + 1, 0).getDate();
    this.dateString = new Date(this.year, this.month, 1).toLocaleDateString(
      'en-GB',
      {
        weekday: "long",
        year: "numeric",
        month: "numeric",
        day: "numeric",
      }
    );
    this.paddingDays = this.weekDays.indexOf(this.dateString.split(', ')[0]);
    console.log(this.dt);
    console.log(this.dateString);
    console.log(this.paddingDays);
  },
  methods: {
    increment() {
      this.number++;
    },
  },
};
</script>
<style scoped>
.calendar-container{
  width: 67vw;
  display: flex;
  flex-wrap: wrap;
  border: 1px solid green;
}
</style>