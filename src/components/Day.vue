<template>
 <div class="day">
  {{dayNumber}}
 </div>
</template>

<script>
  export default {
    name: 'Day',
    props: {
      dayNumber: String,
    }
  }
</script>
<style scoped>

</style>
