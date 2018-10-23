import axios from 'axios'
import request from '../api/request'

let req = request('/api')
let loginReq = request('/user')
// req.defaults.baseURL = '/api';

// const baseApi = '/api'
// const baseUrl = 'http://adtest.mshare.cn/api/v1/userauth';

export default {
    getList (data) {
      return req.get('/resumes', {params: data})
    },
    getUserInfo (data) {
      return req.get('/userinfo', {params: data})
    },
    getCities(data) {
      return req.get('/cities', data)
    },
    gaLogin (data) {
      return loginReq.post('/gaLogin', data)
    },
    getAdPos (data) {
      return req.post('/adPos', data)
    }
}
// export default (requestType) => {
//   if(requestType === 'client') {
//     req.defaults.baseURL = 'http://adtest.mshare.cn/api/v1';
//     return {
//       login (data) {
//         // return req.post(`${baseUrl}/userauth`, data)
//         return req.post('/userauth', data)
//       }
//     }
//   } else {
//     return {
//         getList (data) {
//           return req.get(`${baseApi}/resumes`, {params: data})
//         },
//         getUserInfo (data) {
//           return req.get(`${baseApi}/userinfo`, {params: data})
//         },
//         getCities(data) {
//           return req.get(`${baseApi}/cities`, data)
//           // return req.get('https://hrtest.shixiseng.com/api/v1//interncityoptions', data)
//         }
//     }
//   }
// }
