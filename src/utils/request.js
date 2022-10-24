//1.创建新的axios实例
//2.请求拦截器，如果有token进行头部携带
//3.响应拦截器：1.剥离无效数据  2.处理token失效
//4.导出一个函数，调用当前的axios实例发请求，返回值promise

import axios from 'axios'
import store from '@/store'
import router from '@/router'
//导出基准地址，原因：其他地方不是通过axios发请求的地方用上基准地址
export const baseURL = 'http://pcapi-xiaotuxian-front-devtest.itheima.net/'
const instance = axios.create({
        baseURL,
        timeout: 5000
    })
    //请求拦截器
instance.interceptors.request.use(config => {
    //拦截业务逻辑
    //进行请求配置的修改
    //如果本地有token就在头部携带
    // 1. 获取用户信息对象
    const { profile } = store.state.user
        // 2. 判断是否有token
    if (profile.token) {
        // 3. 有token进行头部携带,设置token
        config.headers.Authorization = `Bearer ${profile.token}`
    }
    return config
}, err => {
    //对请求错误做出的动作
    return Promise.reject(err)
})

//响应拦截器
instance.interceptors.response.use(res => res.data, err => {
    //res => res.data 取出data数据，将来调用接口的时候直接拿到的就是后台的数据
    //401 状态码，进入函数   err.response排除无响应状况
    if (err.response && err.response.status === 401) {
        //1.清空本地无效用户信息
        store.commit('user/setUser', {})
            //2.跳转到登录页码
            //3.跳转需要传参（当前路由地址）给登录页
            //跳转路由 ————导入路由
            //当前路由地址
            //组件里：`/user?a=10` $route.path === /user $route.fullPath === /user?a=10
            //js模块中：router.currentRoute.value.fullPath 就是当前路由地址
            //router.currentRoute是响应式数据，所以要加value
        const fullPath = encodeURIComponent(router.currentRoute.value.fullPath)
        router.push('/login?redirectUrl=' + fullPath)
    }
    return Promise.reject(err)
})


//请求工具函数
export default (url, method, submitData) => {
    //负责发请求：请求地址，请求方式，提交的数据
    //由axios发请求
    return instance({ //返回的是promise对象
        url,
        method,
        //1.如果是get请求，需要使用params来传递submitData
        //2.如果不是get请求，需要使用data来传递submitData
        //[] 设置一个动态的key，写js表达式，js表达式的执行结果当作key
        [method.toLowerCase() === 'get' ? 'params' : 'data']: submitData
    })
}