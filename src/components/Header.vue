<template>
  <div class="header-container">
    <div class="header-left">
      {{fullDate}}
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
      fullDate: String,
    }
  },
  mounted(){
    this.dt.setMonth(new Date().getMonth()+this.currentDate);
    this.fullDate = `${this.dt.toLocaleString('en-GB',{month: 'long'})} ${this.dt.getFullYear()}`
  }
};
</script>
<style scoped>

</style>