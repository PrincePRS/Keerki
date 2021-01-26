import axios from 'axios';
import store from '@/store';

const instance = axios.create({
    baseURL: process.env.VUE_APP_API
});

instance.interceptors.request.use(function(config){
    if(store.state.admin_auth.token !== null){
        config['headers'] = {
            Authorization: `Bearer ${store.state.admin_auth.token}`
        };
    }
    return config;
});



instance.interceptors.response.use(function (response) {
        // store.commit('error/setValidationError', {});
        return response;
    }, function (error) {
        return Promise.reject(error);
        // console.log(error);
        // if (error.response.status === 422) {
        //     // store.commit('error/setValidationError', error.response.data.data);
        // }else if(error.response.status === 423){
        //     console.log(error);
        // }
        // else {
        //     return Promise.reject(error);
        // }
});
  
  export default instance;

