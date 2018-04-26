/*
 * @Author: 吴占超
 * @Date: 2018-04-26 09:39:34
 * @Last Modified by: 吴占超
 * @Last Modified time: 2018-04-26 13:51:45
 * @document vue全局帮助类[i,localStorage]
 */

import Vue from 'vue'
/**
 * @description string
 */
import inflector from 'i'

/**
 * 全局帮助类
 *
 * @export
 * @class UtilHelper
 */
export default class UtilHelper {
  /**
   * 字符串命名 titleize（首字母大写）、camelize（下划线改帕斯卡、false驼峰）
   *
   * @readonly
   * @static
   * @type {}
   * @memberof UtilHelper
   */
  static get i() {
    return inflector()
  }
  /**
   *
   *
   * @static
   * @param {any} key
   * @param {any} value
   * @memberof UtilHelper
   */
  static setStorage(key, value) {
    window.localStorage.setItem(key, JSON.stringify(value))
  }
  /**
   *
   *
   * @static
   * @param {any} key
   * @param {any} defaultValue
   * @returns
   * @memberof UtilHelper
   */
  static getStorage(key, defaultValue) {
    let value = window.localStorage.getItem(key)
    if (value === null || value === undefined || value === '') {
      return defaultValue
    }
    return JSON.parse(value)
  }
}
/**
 * 后退指令
 */
Vue.directive('back', (el, binding) => {
  el.onclick = () => window.history.go(-1)
})
