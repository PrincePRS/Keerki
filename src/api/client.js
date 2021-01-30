import http from '@/api/http';

export function getAllClients(){
    return http.get('/admin/clients');
}

export function getClientFromEmail(id){
    return http.get('/admin/clients/' + id);
}

export function updateCompanyInfo(param){
    return http.post('/admin/updateCompanyInfo', param);
}