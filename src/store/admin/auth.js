import * as authApi from '@/api/auth';

export default {
  namespaced: true,
  state: {
    token: null
  },
  mutations: {
    setToken(state, token) {
      state.token = token;
    }
  },
  actions: {
    async login(context, { userId, password }) {
      try {
        const response = await authApi.login(userId, password);
        
        // if (response.status === 200) {
        //   context.commit('setToken', response.data.token);
        // }
      } catch (e) {
        // console.log('Please check UserId and Password!');
      }
    },
    loginWithoutAsync(context, { userId, password }) {
      authApi.login(userId, password).then(response => {
        if (response.status === 200) {
          context.commit('setToken', response.data.token);
        }
      }).catch(e => {
        alert('Please check UserId and Password!');
      });
    }
  }
}