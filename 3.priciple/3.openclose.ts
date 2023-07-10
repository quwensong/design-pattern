/**
 * 每个知识点我一般会举2个例子，1例子是生活中的方便大家理解。2例会举前端开发中用到的例子
 */
import axios from 'axios';
const instance = axios.create();
// http://localhost:3000
//result={headers,data} 如果状态码是不是200的的话直接 报错
instance.interceptors.request.use(config => {
    if (config.url!.startsWith('http')) {
        config.url = 'http://localhost:3000' + config.url;
    }
    return config;
});
instance.interceptors.response.use(response => {
    if (response.status != 200) {
        return Promise.reject(response);
    }
    return response.data;
});
instance({
    url: '/api/users'
}).then(result => {
    console.log(result);
});