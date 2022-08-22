<template>
  <div class="header-container">
    <button @click="googleSignIn()" class="sign-in" v-show="!loggedIn">SIGN IN</button>
    <div class="welcom" v-show="loggedIn">welcome {{name}}</div>
    <button @click="googleSignOut()" class="sign-out" v-show="loggedIn">SIGN OUT</button>
  </div>
</template>
<script>
import {mapGetters} from 'vuex'
export default {
  name: "Header",
  data() {
    return {
      // loggedIn: false,
      name: "",
    };
  },
   computed:{
    ...mapGetters(['loggedIn'])
  },
  methods: {
    async googleSignIn() {
      // console.log("loggedin-header-before",this.loggedIn);
      await this.$store.dispatch('login',5);
      // console.log("loggedin-header-after",this.loggedIn);
    },
    googleSignOut() {
      this.$store.dispatch('logout',5);
    },
  },
};
</script>

<style scoped>
.header-container {
  height: 6vh;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  border: 1px solid black;
  
}
</style>