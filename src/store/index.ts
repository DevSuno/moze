import Vue from 'vue'
import Vuex from 'vuex'
import helper from '@/components/Record/Calendar/helper';

Vue.use(Vuex)

const date = helper.getNewDate(new Date())
const time = helper.getCurrentTime(new Date())
export default new Vuex.Store({
  state: {
      selectedDate: date.year + '-' + (date.month + 1) + '-' + date.day,
      currentTime: time.hours + ':' + time.minutes
  },
  mutations: {
      handleClickDay(state,day: {year: number; month: number; day: number}) {
          state.selectedDate = day.year+'-'+ (day.month+1) +'-'+day.day
      }
  },
  actions: {
  },
  modules: {
  }
})
