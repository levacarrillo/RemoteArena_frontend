import axios from 'axios'

const ApiInstance = axios.create({
  baseURL: 'http://localhost:4000',
  crossDomain: true,
  crossOrigin: true,
  timeout: 180000,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json; charset=utf-8'
  },
  withCredentials: true
});

export default ApiInstance;