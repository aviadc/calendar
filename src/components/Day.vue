<template>
  <div
    class="day"
    :class="aclass"
    @click="aclass === 'current-month' ? handleDayClick() : null"
  >
    {{ day }}
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "Day",
  data() {
    return {
      
    };
  },
  props: {
    day: Number,
    month: Number,
    year: Number,
    aclass: String,
  },
  computed: {
    ...mapGetters(["loggedIn"]),
  },
  methods: {
    handleDayClick() {
      if (this.loggedIn) {
        console.log(`${this.day}/${this.month}/${this.year}`);
        this.$router.push({
          name: "tasks",
          params: { theDate: `${this.day}/${this.month}/${this.year}`},
        });
      }
    },
  },
};
</script>
<style scoped>
.day {
  width: 6.5vw;
  height: 6.5vw;
  margin: 0.2vw;
  border: 1px solid black;
  background-color: white;
  box-shadow: 0px 0px 3px #cbd4c2;
}

.padding {
  background-color: #e2e2e2;
}

.current-month:hover {
  background-color: #e8faed;
  cursor: pointer;
}
</style>
