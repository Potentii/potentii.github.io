import {createRouter, createWebHistory} from 'vue-router';

// *Pages:
import VHomePage from "./pages/v-home-page.vue";
import VBlogPostPage from "./pages/v-blog-post-page.vue";


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
			path: '/posts/:blogPostId',
			name: 'blog-post-page',
			component: VBlogPostPage,
		}
   ]
});


export default router;
