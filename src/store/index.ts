import Vue from 'vue'
import Vuex from 'vuex'
import helper from '@/components/Record/Calendar/helper';

Vue.use(Vuex)

function format(number: any) {
   return  number < 10 ? `0${number}`: number
}
const date = helper.getNewDate(new Date())
const time = helper.getCurrentTime(new Date())
export default new Vuex.Store({
  state: {
      selectedDate: date.year + '-' + (date.month + 1) + '-' + date.day,
      currentTime: format(time.hours) + ':' + format(time.minutes),
      recordList: localStorage.recordList?JSON.parse(localStorage.recordList):[]
  },
  mutations: {
      handleClickDay(state,day: {year: number; month: number; day: number}) {
          state.selectedDate = day.year+'-'+ (day.month+1) +'-'+day.day
      },
      updateRecordList(state , recordItem){
          state.recordList = state.recordList.concat(recordItem)
      },

  },
  actions: {
  },
  modules: {
  }
})
