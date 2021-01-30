import http from '@/api/http';

export function updateAccount(param){
    return http.post('/admin/updateAccount', param);
}

export function updateAvatar(param){
    return http.post('/admin/updateAvatar', param,
        {
            headers:{
                'Content-Type': 'multipart/form-data'
            }
        }
    );
}