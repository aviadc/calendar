import { createStore } from 'vuex'
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
} from "firebase/auth";
import { collection, addDoc } from "firebase/firestore";
import { db } from '../main';
import { fetchUserDetails } from '../utils/firestoreUtils';

export default createStore({
  state: {
    loggedIn: false,
    email: '',
    name: '',
    tasks: {},
    userRefId: "",
    currentDate: new Date(),
  },
  getters: {
    loggedIn: ({ loggedIn }) => loggedIn,
    email: ({ email }) => email,
    name: ({ name }) => name,
    tasks: ({ tasks }) => tasks,
    userRefId: ({ userRefId }) => userRefId,
    currentDate: ({ currentDate }) => currentDate,
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
    SET_TASKS(state, user) {
      console.log("in set tasks - user", user)
      state.tasks = {...user.tasks};
    },
    SET_USERREFID(state, userRef) {
      console.log("in set userRef - user", userRef)
      state.userRefId = userRef.id;
    },
    SET_CURRENTDATE(state, date) {
      console.log("in current date - user", userRef)
      state.currentDate = date;
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
            tasks: {},
          }
          commit('SET_NAME', user);
          commit('SET_EMAIL', user);
          

          const userDetails = await fetchUserDetails(user.email);
          if (!userDetails) {
            addDoc(collection(db, 'users'), userData);
          }else{
            commit('SET_TASKS',userDetails.data);
          }
            commit('SET_USERREFID', userDetails.ref);

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
    },
    updateDate({commit},date){
      commit('SET_CURRENTDATE',date);
    }

  }
})