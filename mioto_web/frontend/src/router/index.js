import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Mioto from '@/components/Mioto'
import MyProject from '@/components/MyProject'
import Paints from '@/components/Paints'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Mioto',
      component: Mioto
    },
    {
      path: '/index',
      name: 'Index',
      component: Index
    },
    {
      path: '/projects',
      name: 'MyProject',
      component: MyProject
    },
    {
      path: '/painting',
      name: 'Paints',
      component: Paints
    }
  ]
})
