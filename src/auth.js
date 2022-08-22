import firebase from './firebase';
import store from './store';

// https://firebase.google.com/docs/auth/web/manage-users
firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    store.dispatch('login',5);
  } else {
    store.dispatch('logout',5);
  }
});