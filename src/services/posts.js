import http from './http'

export const fetchPosts = () => http.get('/posts')
