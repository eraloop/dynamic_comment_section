import Vue from 'vue'
import Vuex from 'vuex'

import state from "./state"
import actions from  "./actions"
import getters from "./getters"
import mutations from "./mutations"

Vue.use(Vuex)

export default new Vuex.Store({
  state: state,
  getters: getters,
  mutations: mutations,
  actions: actions,

  })

/*

comment planning

avatar, name, last seen  reply button

voting count and voting buttons

comment text

comment id

comment replys = [

    rely now has all the above
    // create a class that can serve as the blueprint for it 
    // create a structure for both the main comment and replies

]

*/
