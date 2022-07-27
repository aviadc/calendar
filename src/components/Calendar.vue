<template>
  <div class="container">
    <button v-on:click="increment">{{number}}</button>
  </div>
</template>
<script>
import Day from "./Day.vue";
export default {
  name: "Calendar",
  data() {
    return {
      weekDays: ['Sunday','Monday','Tuesday','Wednesday','Thrursday','Friday','Saturday'],
      dt: Date,
      day: Number,
      month: Number,
      year: Number,
      number: 0,
      daysInMonth: Number,
      dateString: Date,
    };
  },
  computed: {
    
  },
  mounted() {
    this.dt = new Date();
    this.day = this.dt.getDate();
    this.month = this.dt.getMonth();
    this.year = this.dt.getFullYear();
    this.daysInMonth = new Date(this.year,this.month+1,0).getDate();
    this.dateString = new Date(this.year,this.month,1).toLocaleDateString();
    console.log(this.dateString);
  },
  methods: {
    increment(){
      this.number++;
    }
  },
};
</script>
<style scoped>
</style>