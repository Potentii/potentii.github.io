import {createRouter, createWebHistory} from 'vue-router';

// *Pages:
import VHomePage from "./pages/v-home-page.vue";
import V404Page from "./pages/v-404-page.vue";


// *Building the router:
const router = createRouter({

   history: createWebHistory(),

	strict: false,

   routes: [
      {
         path: '/',
			name: 'home-page',
         component: VHomePage,
      },
		{
			path: '/not-found',
			name: 'not-found-page',
			component: V404Page,
		},
		{
			path: '/:pathMatch(.*)*',
			redirect: to => ({ name: 'not-found-page', query: { p: to.path } }),
		},
   ]
});



export default router;
