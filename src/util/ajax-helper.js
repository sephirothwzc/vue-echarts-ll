/* eslint-disable */
/**
 * axios 帮助类
 */
import axios from 'axios'
import Vue from 'vue'

// region axios filter
axios.interceptors.request.use(
  config => {
    // if (store.state.token) {
    //   // 判断是否存在token，如果存在的话，则每个http header都加上token
    //   config.headers.Authorization = `token ${store.state.token}`
    // }
    // 开启loading
    // Vue.prototype.$Loading.start()
    return config
  },
  err => {
    // Vue.prototype.$Loading.error()
    return Promise.reject(err)
  }
)

axios.interceptors.response.use(
  response => {
    // 响应拦截器
    if (response.data.state.toUpperCase() === 'SUCCESS') {
      // Vue.prototype.$Loading.finish()
      return response.data.data
    } else {
      // Vue.prototype.$Loading.error()
      // Message.error(response.data.msg)
      // 异常返回
      return Promise.reject(response.data.msg)
    }
  },
  error => {
    // Vue.prototype.$Loading.error()
    // Message.error(error.message)
    return Promise.reject(error)
  }
)
// endregion axios filter end

// region Promise.prototype.finally
/* eslint no-extend-native: ["error", { "exceptions": ["Object"] }] */
Promise.prototype.finally = function(callback) {
  let P = this.constructor
  return this.then(
    value => P.resolve(callback()).then(() => value),
    reason =>
    P.resolve(callback()).then(() => {
      throw reason
    })
  )
}
// endregion Promise.prototype.finally end
// region vue prototype settings
Vue.prototype.$ajax = axios
// endregion vue prototype settings end
