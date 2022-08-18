import { createStore } from 'vuex'
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
} from "firebase/auth";
import { collection, addDoc } from "firebase/firestore";

export default createStore({
  state: {
    loggedIn: false,
    name: "",
    tasks: []
  },
  getters: {
    loggedIn: ({ loggedIn }) => loggedIn,
    name: ({ name }) => name,
    tasks: ({ tasks }) => tasks,
  },
  mutations: {
    LOG_IN(state, arg2) {
      console.log("in commit", state, arg2)
      state.loggedIn = true;
    },
    LOG_OUT(state) {
      state.loggedIn = false;
    }
  },
  actions: {
    async login({ commit }, arg2) {
      // commit('LOG_IN', 23);
      // console.log(arg1,"arg1");
      // console.log(arg2, "arg2");

      commit('LOG_IN', 23);
      // const provider = new GoogleAuthProvider();
      // const auth = getAuth();
      // signInWithPopup(auth, provider)
      //   .then((result) => {
      //     // This gives you a Google Access Token. You can use it to access the Google API.
      //     const credential = GoogleAuthProvider.credentialFromResult(result);
      //     console.log("credential", credential);
      //     const token = credential.accessToken;
      //     console.log("token", token);
      //     // The signed-in user info.
      //     const user = result.user;
      //     console.log("user", user);
      //     // ...
      //     this.name = user.displayName;
      //     // localStorage.setItem("calendar-user", user.email);
      //   })
      //   .catch((error) => {
      //     console.log(error);
      //     // Handle Errors here.
      //     const errorCode = error.code;
      //     const errorMessage = error.message;
      //     // The email of the user's account used.
      //     const email = error.customData.email;
      //     // The AuthCredential type that was used.
      //     const credential = GoogleAuthProvider.credentialFromError(error);
      //     // ...
      //   });

    },
    async logout({commit}){
      commit('LOG_OUT', 23);
      // const auth = getAuth();
      // signOut(auth)
      //   .then(() => {
      //     // Sign-out successful.
      //      console.log('Sign-out successful');
      //      this.loggedIn = false;
      //   })
      //   .catch((error) => {
      //     // An error happened.
         
      //   });
    }

  }
})