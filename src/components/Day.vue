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
  width: 9vw;
  height: 9vw;
  margin: 0.2vw;
  border: 1px solid black;
}

.padding {
  background-color: grey;
}

.current-month:hover {
  background-color: gold;
}
</style>
