import Vue from 'vue'
import Vuex from 'vuex'
import Json from '/data.json'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
      data: Json.data || [],
      total: 0
  },
  getters:{
    moneys: (state) => state.data,
    total: (state) => state.total
  },
  mutations: {
    fetch(state, {res}){
        state.data = res.data
    },
    add(state, {payload}){
        state.data.push(payload)
    },
    sumTotal(state){
      state.total = 0
        state.data.forEach((m) => {
          if(m.type == "income"){
            state.total+=m.amount
          }else if(m.type == "expenses"){
            state.total-=m.amount
          }
        })
    }

  },
  actions: {
      // fetchMoney({commit}){
      //     let res = {
      //       data:[
      //       ]
      //     }
      //     commit("fetch",{res})
      // },
      addMoney({commit}, payload){
        commit('add', {payload})
      },
      sumTotal({commit}){
        commit("sumTotal")
      }
  },
  modules: {
  }
})
