<template>
  <div class="day" :class="aclass">
    {{ dayNumber }}
  </div>
</template>

<script>
export default {
  name: "Day",
  props: {
    dayNumber: Number,
    aclass: String,
  },
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
}
</style>
