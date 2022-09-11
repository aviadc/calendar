<template>
  <div class="header-calendar-container">
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
     
    </div>
  </div>
</template>
<script>
export default {
  name: "HeaderCalendar",
  props: {
    currentDate: Date,
  },
  data() {
    return {
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
.header-calendar-container {
  width: 49.5vw;
  display: flex;
  justify-content: space-between;
  border: 1px solid red;
  color: #d36c6c;
}

.header-left {
  display: flex;
  gap: 1rem;
  font-size: 3vw;
  width: 30vw;
  border: 1px solid forestgreen 
}

.header-left button{
  padding: 5px;
  background-color: transparent;
  border-radius: 5px;
  transition: all 0.2s ease-in-out;
}
.header-left div{
  display: flex;
}

.header-left button:hover{
 background-color: #d36c6c;
}

.header-left-month span {
  display: block;
  width: 12vw;
  text-align: center;
}

.header-left-year span {
  margin: 0 0.5rem;
}
</style>