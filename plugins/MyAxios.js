//Vue的插件
import axios from 'axios';

const MyAxios = {};
//插件必须提供一个install方法
MyAxios.install = function (Vue) {
    axios.defaults.baseURL = 'http://localhost:8888/api/private/v1/users?pagenum=1&pagesize=10';
    //给vue实例添加一个成员 $http
    Vue.prototype.$type = axios;    
};

export default MyAxios;