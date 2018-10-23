import axios from 'axios'
import request from './request'

let req = request('http://adtest.mshare.cn/api/v1')
let loginReq = request('/user')
// req.defaults.baseURL = 'http://adtest.mshare.cn/api/v1';

const baseApi = '/api'

export default {
  // getList (data) {
  //   return req.get(`${baseApi}/resumes`, {params: data})
  // },
  // getUserInfo (data) {
  //   return req.get(`${baseApi}/userinfo`, {params: data})
  // },
  // login (data) {
  //   return req.post(`${baseApi}/login`, data)
  // },
  // getCities(data) {
  //   // return axios.get(`${baseApi}/cities`, data)
  //   return req.get('http://127.0.0.1:3333/api/cities', data)
  // },
  // gaLogin (data) {
  //   return req.post('/ga/login', data)
  // },
  login (data) {
    return req.post('/userauth', data)
  },
  gaLogin (data) {
    return loginReq.post('/gaLogin', data)
  },
}
