<template>
  <div class="real-header-container">
    <button @click="googleSignIn()" class="sign-in">SIGN IN</button>
    <button @click="googleSignOut()" class="sign-out">SIGN OUT</button>
  </div>
</template>
<script>
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
} from "firebase/auth";
export default {
  name: "RealHeader",
  data() {
    return {};
  },
  methods: {
    googleSignIn() {
      console.log("rr");
      const provider = new GoogleAuthProvider();
      const auth = getAuth();
      signInWithPopup(auth, provider)
        .then((result) => {
          // This gives you a Google Access Token. You can use it to access the Google API.
          // console.log("rr");
          const credential = GoogleAuthProvider.credentialFromResult(result);
          const token = credential.accessToken;
          // The signed-in user info.
          const user = result.user;
          console.log("user", user);
          // ...
        })
        .catch((error) => {
          console.log(error);
          // Handle Errors here.
          const errorCode = error.code;
          const errorMessage = error.message;
          // The email of the user's account used.
          const email = error.customData.email;
          // The AuthCredential type that was used.
          const credential = GoogleAuthProvider.credentialFromError(error);
          // ...
        });
    },
    googleSignOut() {
      const auth = getAuth();
      signOut(auth)
        .then(() => {
          // Sign-out successful.
           console.log('Sign-out successful');
        })
        .catch((error) => {
          // An error happened.
         
        });
    },
  },
};
</script>

<style scoped>
.real-header-container {
  height: 9vh;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  border: 1px solid black;
}
</style>