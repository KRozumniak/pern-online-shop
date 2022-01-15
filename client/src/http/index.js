import axios from "axios";

const server = 'http://localhost:5000/';

const $host = axios.create({
  baseURL: server
})

const $authHost = axios.create({
  baseURL: server
})

const authInterceptor = config => {
  config.headers.authorization = `Bearer ${localStorage.getItem('token')}`
  return config;
}

$authHost.interceptors.request.use(authInterceptor)

export {
  $host,
  $authHost
}