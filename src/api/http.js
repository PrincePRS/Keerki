import axios from 'axios';
import store from '@/store';

const instance = axios.create({
    baseURL: process.env.VUE_APP_API
});

instance.interceptors.request.use(function(config){
    if(store.state.auth.token !== null){
        // config['headers'] = {
        //     'Authorization': `Bearer ${store.state.auth.token}`,
        //     'Content-Type': 'multipart/form-data'
        // };
        config['headers']['Authorization'] = `Bearer ${store.state.auth.token}`;
    }
    return config;
});

instance.interceptors.response.use(function (response) {
        store.commit('error/setValidationError', response.data.code);
        return response;
    }, function (error) {
        console.log('failed');
        console.log(error);
        store.commit('error/setValidationError', error.response.status);
        return Promise.reject(error);
        console.log(error);
        if (error.response.status === 422) {
            // store.commit('error/setValidationError', error.response.data.data);
        }else if(error.response.status === 423){
            console.log(error);
        }
        else {
            return Promise.reject(error);
        }
});
  
export default instance;