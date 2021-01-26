import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import admin_auth from './admin/auth';
import admin_error from './admin/error';
import auth from './client/auth';
import error from './client/auth';


export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    admin_auth,
    admin_error,
    auth,
    error
  }
})
