import * as authApi from '@/api/auth';
import * as accountApi from '@/api/account';

export default {
  namespaced: true,
  state: {
    token: null,
    userinfo: {}
  },
  mutations: {
    setToken(state, token) {
      state.token = token;
    },
    setUserInfo(state, user){
      state.userinfo = user;
    }
  },
  actions: {
    async login(context, { email, password }) {
      try {
        const response = await authApi.login(email, password);
        // console.log(response.data);
        if (response.status === 200) {
          // context.commit('setToken', response.data.token);
          
          context.commit('setUserInfo', response.data.message);
          localStorage.setItem('userInfo', JSON.stringify(response.data.message));
          localStorage.setItem('avatar', process.env.VUE_APP_ASSETS + "avatars/" + JSON.parse(localStorage.getItem('userInfo')).avatar_img);
          console.log(response.data.message);
          console.log(JSON.parse(localStorage.getItem('userInfo')));
        }
      } catch (e) {
      }
    },

    async updateAccount(context, param) {
      try {
        const response = await accountApi.updateAccount(param);
        console.log(response.data);
        if (response.status === 200) {
          context.commit('setUserInfo', response.data.message);
          localStorage.setItem('userInfo', JSON.stringify(response.data.message));
          localStorage.setItem('avatar', process.env.VUE_APP_ASSETS + "avatars/" + JSON.parse(localStorage.getItem('userInfo')).avatar_img);
        }
      } catch (e) {
      }
    },

    async updateAvatar(context, param) {
      try {
        const response = await accountApi.updateAvatar(param);
        if (response.status === 200) {
          context.commit('setUserInfo', response.data.message);
          localStorage.setItem('userInfo', JSON.stringify(response.data.message));
          localStorage.setItem('avatar', process.env.VUE_APP_ASSETS + "avatars/" + JSON.parse(localStorage.getItem('userInfo')).avatar_img);
        }
      } catch (e) {
      }
    },

    loginWithoutAsync(context, { email, password }) {
      authApi.login(email, password).then(response => {
        if (response.status === 200) {
          context.commit('setToken', response.data.token);
        }
      }).catch(e => {
        alert('Please check UserId and Password!');
      });
    }
  }
}