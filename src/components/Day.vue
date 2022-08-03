<template>
  <div class="day" :class="aclass" @click="aclass==='current-month' ? handleDayClick() : null">
    {{ day }}
  </div>
</template>

<script>
export default {
  name: "Day",
  props: {
    day: Number,
    month: Number,
    year: Number,
    aclass: String,
  },
  methods:{
    handleDayClick(){
      console.log(`${this.day}/${this.month}/${this.year}`);
      this.$router.push({name: 'tasks',params: {adate: `${this.day}/${this.month}/${this.year}`}});
    }
  }
};
</script>
<style scoped>
.day {
  width: 6.5vw;
  height: 6.5vw;
  margin: 0.2vw;
  border: 1px solid black;
  box-shadow: 0px 0px 3px #CBD4C2;
}


.padding {
  background-color: grey;
}

.current-month:hover {
  background-color: gold;
  cursor: pointer;
}
</style>
