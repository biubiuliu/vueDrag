import axios from 'axios';
import Qs from 'qs'

//配置默认的请求路径
axios.defaults.baseURL = 'https://mall.mingdiao.com.cn/';
//请求带cookie
axios.defaults.withCredentials = true;

export default (url, data = {}, qs = true) => {
  return axios({
    method: 'get',
    url,
    data: qs ? Qs.stringify(data) : data,
    headers: {"Access-Control-Allow-Origin":"*"},
  });
};
