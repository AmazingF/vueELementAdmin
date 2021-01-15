import request from '@/utils/request'
import Qs from 'qs';

export function login(data) {
  let a = request({
    url: '/login',
    method: 'post',
    data: Qs.stringify(data),
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
    }
  })
  return a
}

export function getInfo(token) {
  return request({
    url: '/vue-admin-template/user/info',
    method: 'get',
    params: { token }
  })
}

export function logout() {
  return request({
    url: '/vue-admin-template/user/logout',
    method: 'post'
  })
}
