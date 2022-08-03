import {createRouter , createWebHistory} from "vue-router"
import Home from "../views/Home.vue"
import Tasks from "../views/Tasks.vue"

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/', component: Home 
    },
    {
      path: '/tasks', component: Tasks
    },
  ]
});

export default router;