<template>
  <div class="home-container">
    <HeaderCalendar
      :currentDate="currentDate"
      @next-month="nextMonth()"
      @prev-month="prevMonth()"
      @next-year="nextYear()"
      @prev-year="prevYear()"
      :key="month + year"
    />
    <Weekdays />
    <Calendar :currentDate="currentDate" :key="month + year" />
  </div>
</template>

<script>
import HeaderCalendar from "../components/HeaderCalendar.vue";
import Weekdays from "../components/WeekDays.vue";
import Calendar from "../components/Calendar.vue";
export default {
  name: "Home",
  components: {
    HeaderCalendar,
    Weekdays,
    Calendar,
  },
  data() {
    return {
      currentDate: new Date(),
      month: 0,
      year: 0,
    };
  },
  mounted() {
    // this.currentDate = new Date();
    // console.log("app current Date", this.currentDate);
  },
  methods: {
    nextMonth() {
      this.month++;
      this.currentDate.setMonth(this.currentDate.getMonth()+1);
    },
    prevMonth() {
      this.month--;
      this.currentDate.setMonth(this.currentDate.getMonth()-1);
    },
    nextYear() {
      this.year++;
      this.currentDate.setFullYear(this.currentDate.getFullYear() + 1);
    },
    prevYear() {
      this.year--;
      this.currentDate.setFullYear(this.currentDate.getFullYear() - 1);
    },
  },
};
</script>

<style scoped>
.home-container {
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 1rem;
}
</style>
