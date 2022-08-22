import { createStore } from 'vuex'
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
} from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { db } from '../main';

export default createStore({
  state: {
    loggedIn: false,
    email: '',
    name: '',
    tasks: []
  },
  getters: {
    loggedIn: ({ loggedIn }) => loggedIn,
    email: ({ email }) => email,
    name: ({ name }) => name,
    tasks: ({ tasks }) => tasks,
  },
  mutations: {
    LOG_IN(state, user) {
      console.log("in commit", state, arg2)
      state.loggedIn = true;
    },
    LOG_OUT(state) {
      state.loggedIn = false;
    },
    SET_NAME(state, user) {
      state.name = user.displayName;
    },
    SET_EMAIL(state, user) {
      state.name = user.email;
    },
    ADD_TASK(state, task) {
      state.tasks.push(task);
    },
    DELETE_TASK(state, taskId) {
      state.tasks = state.tasks.filter((task) => {
        return task.id !== taskId;
      })
    },

  },
  actions: {
    async login({ commit }, arg2) {

      const provider = new GoogleAuthProvider();
      const auth = getAuth();
      signInWithPopup(auth, provider)
        .then((result) => {
          // This gives you a Google Access Token. You can use it to access the Google API.
          const credential = GoogleAuthProvider.credentialFromResult(result);
          console.log("credential", credential);
          const token = credential.accessToken;
          console.log("token", token);
          // The signed-in user info.
          const user = result.user;
          console.log("user", user);
          // ...

          commit('LOG_IN');
          // add user details to firestore
          const userDoc = {

          }
          setDoc(userDoc, { capital: true }, { merge: true });
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
    async logout({ commit }) {
      const auth = getAuth();
      signOut(auth)
        .then(() => {
          // Sign-out successful.
          console.log('Sign-out successful');
          commit('LOG_OUT');

        })
        .catch((error) => {
          // An error happened.

        });
    }

  }
})