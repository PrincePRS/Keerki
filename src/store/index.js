import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import admin_auth from './admin/auth';
import client_auth from './client/auth';
import error from './error';

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    admin_auth,
    client_auth,
    error
  }
})
