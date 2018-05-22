import Vue from 'vue'
import DateHelper from '@/util/date-helper.js'

Vue.filter('formatTimeStamp', DateHelper.formatTimeStamp)
Vue.filter('formatDate', DateHelper.formatDate)
