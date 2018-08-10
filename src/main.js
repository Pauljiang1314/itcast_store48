//入口模块，模块化语法。

// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
//导入element-ui
import ElementUI from 'element-ui'
// 导入全局样式
import "element-ui/lib/theme-chalk/index.css"
import '@/assets/css/index.css';
import myaxios from '@plugins/MyAxios';

Vue.config.productionTip = false

//注册插件，注册自定义全局组件
Vue.use(ElementUI);

//注册MyAxios的插件
Vue.use(myaxios);


//全局过滤器，格式化日期
Vue.filter('fmtDate', (value, fmtString) => {
  // return moment(value).format(fmtString);
});


axios.defaults.baseURL = 'http://localhost:8888/api/private/v1/';

//配置全局的axios
// Vue.prototype.$http = axios;

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
