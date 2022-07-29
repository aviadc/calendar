<template>
  <div class="header-container">
    <div class="header-left">
      <div class="header-left-month">
       <button @click="$emit('prev-month')">&#60;</button>
        <span>{{month}}</span>
        <button @click="$emit('next-month')">&#62;</button>
      </div>
      <div class="header-left-year">
        <button @click="$emit('prev-year')">&#60;</button>
        <span>{{year}}</span>
        <button @click="$emit('next-year')">&#62;</button>
      </div>
    </div>
    <div class="header-right">
      <button @click="$emit('prev-month')">PREV</button>
      <button @click="$emit('next-month')">NEXT</button>
  </div>
  </div>
</template>
<script>
export default {
  name: 'Header',
  props:{
    currentDate: Number,
  },
  data(){
    return{
      dt: new Date(),
      month: String,
      year: String,
    }
  },
  mounted(){
    this.dt.setMonth(new Date().getMonth()+this.currentDate);
    this.month = `${this.dt.toLocaleString('en-GB',{month: 'long'})}`;
    this.year = this.dt.getFullYear();
  }
};
</script>
<style scoped>
  .header-container{
    width: 67vw;
    display: flex;
    justify-content: space-between;
  }
</style>