<template>
  <div class="header-container">
    <div class="header-left">
      <div class="header-left-month">
        <button @click="$emit('prev-month')">&#60;</button>
        <span>{{ month }}</span>
        <button @click="$emit('next-month')">&#62;</button>
      </div>
      <div class="header-left-year">
        <button @click="$emit('prev-year')">&#60;</button>
        <span>{{ year }}</span>
        <button @click="$emit('next-year')">&#62;</button>
      </div>
    </div>
    <div class="header-right">
      <!-- <button @click="$emit('prev-month')">PREV</button>
      <button @click="$emit('next-month')">NEXT</button> -->
    </div>
  </div>
</template>
<script>
export default {
  name: "Header",
  props: {
    currentDate: Date,
  },
  data() {
    return {
      // dt: new Date(),
      month: String,
      year: String,
    };
  },
  mounted() {
    // this.currentDate.setMonth(new Date().getMonth()+this.currentDate);
    this.month = `${this.currentDate.toLocaleString("en-GB", {
      month: "long",
    })}`;
    this.year = this.currentDate.getFullYear();
  },
};
</script>
<style scoped>
.header-container {
  width: 67vw;
  display: flex;
  justify-content: space-between;
}

.header-left {
  display: flex;
  gap: 1rem;
}

.header-left-month {
  display: flex;
}
.header-left-month span {
  display: block;
  width: 5rem;
  border: 1px solid green;
  text-align: center;
}

.header-left-year span {
  margin: 0 0.5rem;
}
</style>