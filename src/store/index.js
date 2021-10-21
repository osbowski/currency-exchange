import { createStore } from 'vuex'

export default createStore({
  state: {
    currencies:{
      USD:null,
      EUR:null,
      GBP:null
    }
  },
  mutations: {
    addCurrencyValue(state,payload){
      const { currencies } = state;
      const { currency, value } = payload;
      currencies[ currency ] = value;
    }
  },
  actions: {
    addCurrencyValue(context,payload){
      context.commit('addCurrencyValue',payload)
    }
  },
  getters:{
    getCurrencies(state){
      return state.currencies
    }
  }
})
