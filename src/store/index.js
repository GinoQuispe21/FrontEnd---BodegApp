import Vue from 'vue'
import vuex from 'vuex'

Vue.use(vuex)
export default new vuex.Store({
    state:{
        productid: null,
        clientid: null,

    },
    mutations:{
      setProductid(state, product){
          this.state.productid = product;
      },
        setClientid(state, client){
            this.state.clientid = client;
        }
    },
    getters:{
      getProductid:state=>{
          return state.productid;
      },
        getClientid:state=>{
            return state.clientid;
        }
    }
});
