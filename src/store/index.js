import { createStore } from 'vuex'
import createPersistedState from 'vuex-persistedstate'
//三个模块
import cart from './modules/cart'
import user from './modules/user'
import category from './modules/category'

export default createStore({
    modules: {
        cart,
        user,
        category
    },
    //配置插件
    plugins: [ //默认存在在localStorage上
        createPersistedState({
            //本地存储名字
            key: 'eribbit-cilent-pc-01-store',
            //指定需要存储模块
            paths: ['user', 'cart']
        })
    ]
})



































































// const moduleA = {
//     state: {
//         username: 'moduleA'
//     },
//     getters: {
//         newName(state) {
//             return state.username + '!!!!!!!!!!!'
//         }
//     },
//     mutations: {
//         updateName(state) {
//             state.username = 'moduleAAAAA'
//         }
//     },
// }
// const moduleB = {
//     namespaced: true,
//     state: {
//         username: 'moduleB'
//     },
//     getters: {
//         newName(state) {
//             return state.username + '!!!!!!!!!!!'
//         }
//     },
//     mutations: {
//         updateName(state) {
//             state.username = 'moduleBBBBB'
//         }
//     },
//     actions: {
//         updateName(ctx) {
//             setTimeout(() => {
//                 ctx.commit('updateName')
//             }, 1000)
//         }
//     },
// }
// export default createStore({
//     modules: {
//         moduleA,
//         moduleB
//     }
// })





























//vue2.0 创建仓库  new Vuex.Store({})
//vue3.0 创建仓库 createStore({})
// export default createStore({
//     state: {
//         username: 'zs'
//     },
//     getters: {
//         newName(state) {
//             return state.username + '!!!'
//         }
//     },
//     mutations: {
//         updateName(state) {
//             state.username = 'ls'
//         }
//     },
//     actions: {
//         updateNameLs(ctx) {
//             setTimeout(() => {
//                 ctx.commit('updateName')
//             }, 1000)
//         }
//     },
//     modules: {}
// })