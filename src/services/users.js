import http from './http'

export const fetchUser = (id) => http.get(`/users/${id}`)
