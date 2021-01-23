import http from '@/api/http';

export function login(userid, password){
    return http.post('/admin/login', {
        userid,
        password
    });
}