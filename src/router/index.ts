import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Total from '@/views/Total.vue';
import Record from '@/views/Record.vue';
import Statement from '@/views/Statement.vue';
import NotFound from '@/views/NotFound.vue';

Vue.use(VueRouter)

  const routes: Array<RouteConfig> = [
      {
          path:'/',
          name:'Root',
          redirect:'/total'
      },
      {
          path:'/total',
          name:'Total',
          component: Total
      },
      {
          path:'/record',
          name:'Record',
          component:Record
      },
      {
          path:'/statement',
          name:'Statement',
          component:Statement
      },
      {
          path:'*',
          name:'NotFound',
          component:NotFound

      }
]

const router = new VueRouter({
  routes
})

export default router
