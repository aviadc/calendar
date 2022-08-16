import { createStore } from 'vuex'

export default createStore({
  state:{
    loggedIn: false,
    name: "",
    tasks: []
  },
  getters:{
    loggedIn: ({loggedIn}) => loggedIn,
    name: ({name}) => name,
    tasks: ({tasks}) => tasks,
  },
  mutations: {
    
  },
  actions:{}
})