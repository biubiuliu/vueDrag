import axios from 'axios';
import Qs from 'qs'

//配置默认的请求路径
axios.defaults.baseURL = 'https://result.eolinker.com/';
//请求带cookie
axios.defaults.withCredentials = true;

export default (url, data = {}, qs = true) => {
  return axios({
    method: 'post',
    url,
    data: qs ? Qs.stringify(data) : data,
    headers: {'X-Requested-With': 'XMLHttpRequest'},
  });
};
