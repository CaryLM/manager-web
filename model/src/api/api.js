import axios from 'axios'
import qs from 'qs'
axios.defaults.baseURL='http://localhost:8080'
export const requestLogin=params=>{return axios.post('/manager/login',qs.stringify(params)).then(res=>res.data)}
