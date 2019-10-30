import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
  	{
  		path: '/',
  		component: () => import('@/components/Search'),
  		name: 'search'
  	},
  	{
  		path: '/add',
  		component: () => import('@/components/Add'),
  		name: 'add'
  	},
  	{
  		path: '/detail/:id',
  		component: () => import('@/components/Detail'),
  		name: 'detail'
  	}
  ],
  'mode': 'history'
})
