import Vue from 'vue'
import Vuex from 'vuex'
import auth from './auth'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 0,
    users: [
      {id: 1, name: 'name1', isVisible: true},
      {id: 2, name: 'name2', isVisible: false},
      {id: 3, name: 'name3', isVisible: true}
    ]
  },
  getters: {
    // visibleUsers (state){
    //   return state.users.filter(user => user.isVisible);
    // }
    visibleUsers: state => state.users.filter(user => user.isVisible),
    getUserById: state => id => {
      return state.users.find(user => user.id === id);
    }
  },
  mutations: {
    increment(state){
      state.count++;
    },
    addCount(state, payload){
      state.count += payload.value
    }
  },
  actions: {
    // incrementAction(context){
    //   context.commit('increment');
    // },
    incrementAction({commit}){
      commit('increment');
    },
    addCountAction({commit}, payload){
      commit('addCount', payload);
    }
  },
  modules: {
    auth
  }
})
