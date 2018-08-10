import Vue from 'vue'
import Router from 'vue-router'
//导入组件，所有的import都应该在文件最上面
import Login from '@/views/Login'

import Home from '@/views/Home'

Vue.use(Router)

//配置路由
export default new Router({
  routes: [
    {name: 'Login', path: '/login', component: Login},
    {name: 'Home', paht: '/', component: Home},
    //嵌套路由
    {
      name: 'Home',
      path: '/',
      component: Home,
      children: [
        {name: 'users', path: '/users', component: Users}
      ]
    }
  ]
})
