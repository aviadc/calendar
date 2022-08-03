<template>
<div class="container">
  <Header/>
   <router-view></router-view>
</div>
</template>

<script>
import Header from "./components/Header.vue"
export default {
  name: 'App',
  components: {
    Header
  },
  data(){
    return{
      
    }
  },
  mounted(){

  },
  methods:{
    
  }
 
 
}

</script>

<style scoped>
  .container{
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center; 
    
  }

</style>
