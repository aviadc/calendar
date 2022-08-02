<template>
  <div class="calendar-container">
    <!-- <button v-on:click="increment">{{ number }}</button> -->
    <br>
    <Day v-for="day in startPaddingDays" :key='Math.random()*day*1000' :dayNumber="daysPrevMonth - startPaddingDays + day" aclass="padding"/>
    <Day v-for="day in daysCurrentMonth" :key='Math.random()*day*1000' :dayNumber="day" aclass="current-month"/>
    <Day v-for="day in endPaddingDays" :key='Math.random()*day*1000' :dayNumber="day" aclass="padding"/>
  </div>
</template>
<script>
import Day from './Day.vue';

export default {
  components: { Day },
  name: "Calendar",
  props:{
    currentDate: Date,
  },
  data() {
    return {
      weekDays: [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      day: Number,
      month: Number,
      year: Number,
      number: 0,
      daysCurrentMonth: Number,
      daysPrevMonth: Number,
      dateString: Date,
      startPaddingDays: Number, //the number of days in the first row in the calendar of the previous month
      endPaddingDays: Number, //the number of days in the last row in the calendar of the next month
    };
  },
  computed: {},
  mounted() {
    // this.dt.setMonth(new Date().getMonth()+this.currentDate);
    this.day = this.currentDate.getDate();
    this.month = this.currentDate.getMonth();
    this.year = this.currentDate.getFullYear();
    this.daysCurrentMonth = new Date(this.year, this.month + 1, 0).getDate();
    this.daysPrevMonth = new Date(this.year, this.month , 0).getDate();
    this.startDateString = new Date(this.year, this.month , 1).toLocaleDateString(
      'en-GB',
      {
        weekday: "long",
        year: "numeric",
        month: "numeric",
        day: "numeric",
      }
    );
    this.endDateString = new Date(this.year, this.month + 1, 0).toLocaleDateString(
      'en-GB',
      {
        weekday: "long",
        year: "numeric",
        month: "numeric",
        day: "numeric",
      }
    );
    this.startPaddingDays = this.weekDays.indexOf(this.startDateString.split(', ')[0]);
    this.endPaddingDays = 6 - this.weekDays.indexOf(this.endDateString.split(', ')[0]);
    console.log("end",this.endDateString);
    console.log("start",this.startDateString);
    // console.log(this.startPaddingDays);
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
  width: 52vw;
  display: flex;
  flex-wrap: wrap;
  border: 1px solid green;
}
</style>