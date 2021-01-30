import * as clientApi from '@/api/client';

export default {
  namespaced: true,
  state: {
    clients: [],
    selected: {}
  },
  mutations: {
    setClients(state, clients) {
      state.clients = clients;
    },
    setSelected(state, sel){
      state.selected = sel;
    }
  },
  actions: {
    async getAllClients(context) {
      try {
        const response = await clientApi.getAllClients();
        if (response.status === 200) {
          context.commit('setClients', response.data.message);
          // localStorage.setItem('userInfo', JSON.stringify(response.data.message));
        }
      } catch (e) {
      }
    },
    async getClientFromEmail(context, id) {
      try {
        const response = await clientApi.getClientFromEmail(id);
        if (response.status === 200) {
          console.log(response.data.message);
          context.commit('setSelected', response.data.message);
          // localStorage.setItem('userInfo', JSON.stringify(response.data.message));
        }
      } catch (e) {
      }
    },
    async updateCompanyInfo(context, param) {
      try {
        const response = await clientApi.updateCompanyInfo(param);
        console.log(response.data);
        if (response.status === 200) {
          context.commit('setSelected', response.data.message);
          // context.commit('setUserInfo', response.data.message);
          // localStorage.setItem('userInfo', JSON.stringify(response.data.message));
          // localStorage.setItem('avatar', process.env.VUE_APP_ASSETS + "avatars/" + JSON.parse(localStorage.getItem('userInfo')).avatar_img);
        }
      } catch (e) {
      }
    },
    
  },
  getters:{
    clients: state => state.clients,
    selected: state => state.selected
  }
}