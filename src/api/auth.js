import http from '@/api/http';

export function login(email, password){
    return http.post('/admin/login', {
        email : email,
        password : password
    });
    // console.log('***************');
    // return http.post('/locations',{
    //     "latitude":"41.76484",
    //     "longitude":"123.3968636",
    //     "dist":"50"
    //   })
}