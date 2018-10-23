const sha1 = require('sha1')
const axios = require('axios')
const qs = require('qs')

const className = 'vueSsr'

const request = axios.create({
  // baseURL: 'http://d.apicloud.com/mcm/api'
  // baseURL: 'tvtest.shixiseng.com/api/app',
  // baseURL: 'https://hrtest.shixiseng.com/api/v1',
  baseURL: 'http://adtest.mshare.cn/api/v1',
  withCredentials: true
  // transformRequest: [function(data) {
  //     return qs.stringify(data)
  // }]
})

const loginRequest = axios.create({
  // baseURL: 'http://d.apicloud.com/mcm/api'
  baseURL: 'https://hrtest.shixiseng.com',
  // baseURL: 'http://sxsdev.com',
  // headers: {
  //   'Content-Type': 'application/x-www-form-urlencoded'
  // },
  withCredentials: true,
  transformRequest: [function(data) {
      data.ad_session = '121313'
      return qs.stringify(data)
  }]
})


const createError = (resp) => {
  // console.log('resp==========',resp,'============resp');
  const err = new Error(resp.message)
  err.code = resp.status
  return err
}

const handleRequest = (resp) => {
  // console.log('status==========',status,'============status');
  // console.log('resp==========', resp,'============resp');
  // console.log('rest==========',rest.headers['set-cookie'],'============rest');
  // console.log('rest==========',rest,'============rest');
  if(resp.status === 200) {
    return resp.data
  }
  else {
    return createError(resp)
  }
}


module.exports = (appId, appKey) => {
  // const getHeaders = () => {
  //   const now = Date.now()
  //   return {
  //     'X-APICloud-AppId': appId,
  //     'X-APICloud-AppKey': `${sha1(`${appId}UZ${appKey}UZ${now}`)}.${now}`
  //   }
  // }
  return {
    // async getAllTodo () {
    //   console.log(1212);
    //   return handleRequest(await request.get(`/${className}`, {
    //     headers: getHeaders()
    //   }))
    // },
    async getAllTodos () {
      return handleRequest(await request.get('/cityoptions', {

      }))
    },
    async addTodo (data) {
      console.log(data);
      return handleRequest(await loginRequest.post('/user/login', data))
    },
    async getResumes (data) {
      return handleRequest(await request.get('/resumes', data))
    },
    async gaLogin (data) {
      // return handleRequest(await loginRequest.post('/user/login', data))
      return handleRequest(await request.post('/ga/login', data))
    },
    async getCitys () {
      return handleRequest(await request.get('/interncityoptions'))
    },
    async getAdPos (data) {
      // data.ad_session = 'e3aee438-d167-442e-abfd-fa1136857f57'
      // console.log('ctxdata2324==============',data);
      console.log('***************=========',data);
      return handleRequest(await request.post('/getadpos', data))
    },
  }
}

