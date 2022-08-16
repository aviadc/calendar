import { createApp, VueElement } from 'vue'
import App from './App.vue'
import './assets/main.css'
import router from "./router"
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import store from './store'




const firebaseConfig = {
  apiKey: "AIzaSyCoPVQ7y_tw11jpvxlFE3wO24wDc_Vh2d4",
  authDomain: "calendar-vuejs-829e4.firebaseapp.com",
  projectId: "calendar-vuejs-829e4",
  storageBucket: "calendar-vuejs-829e4.appspot.com",
  messagingSenderId: "754597141314",
  appId: "1:754597141314:web:ae4544d768ce8594fdc6db"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);


const vueApp = createApp(App);
vueApp.use(router);
vueApp.use(store);
vueApp.mount('#app');
