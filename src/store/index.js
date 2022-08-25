import { createStore } from 'vuex'
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
} from "firebase/auth";
import { collection, doc, setDoc } from "firebase/firestore";
import { db } from '../main';
import { isDocumentExist } from '../utils/firestoreUtils';

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
    LOG_IN(state) {
      state.loggedIn = true;
    },
    LOG_OUT(state) {
      state.loggedIn = false;
    },
    SET_NAME(state, user) {
      state.name = user.displayName;
    },
    SET_EMAIL(state, user) {
      state.email = user.email;
      console.log("in commit", state)
    },
    SET_TASKS(state, tasks) {
      state.tasks = [...user.tasks];
      console.log("in commit", state)
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
        .then(async (result) => {
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
          const userData = {
            name: user.displayName,
            email: user.email,
          }
          commit('SET_NAME',user);
          commit('SET_EMAIL',user);
          
         const isDocExist = await isDocumentExist(user.email);
         if(!isDocExist){
          const userDoc = doc(collection(db,'users'));
          setDoc(userDoc, userData,{ capital: true }, { merge: true });
         }
           
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