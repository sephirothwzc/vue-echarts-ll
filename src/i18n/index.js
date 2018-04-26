/*
 * @Author: 吴占超
 * @Date: 2018-04-26 10:09:32
 * @Last Modified by: 吴占超
 * @Last Modified time: 2018-04-26 19:40:17
 */
import Vue from 'vue'
import configSetting from '@/config'
import VueI18n from 'vue-i18n'
import UtilHelper from '@/util/util-helper'
import localeList from '@/i18n/localeList'

Vue.use(VueI18n)

let messages = {}
localeList.language.forEach(p => {
  messages[p.value] = require(`./${p.value}/index`).default
})

const i18n = new VueI18n({
  locale: UtilHelper.getStorage('locale', configSetting.locale),
  silentTranslationWarn: true,
  messages
})
export default i18n
