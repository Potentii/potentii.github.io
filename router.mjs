import {createRouter, createWebHistory} from 'vue-router';

// *Pages:
import VHomePage from "./pages/v-home-page.vue";


// *Building the router:
const router = createRouter({

   history: createWebHistory(),

	strict: false,

   routes: [
      {
         path: '/',
			name: 'home-page',
         component: VHomePage,
      }
   ]
});


export default router;
