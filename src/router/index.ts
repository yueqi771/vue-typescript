import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'index',
      component: () => import('@/pages/Index.vue'),
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('@/pages/About.vue'),
	},
	{
		path: '/index',
		name: 'index',
		component: () => import('@/pages/Index.vue'),
	},
	{
		path: '/home',
		name: 'home',
		component: () => import('@/pages/Home.vue'),
	},
  ],
});
