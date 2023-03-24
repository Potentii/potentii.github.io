import Vuex from 'vuex';
import BlogPostsStore from "./blog-posts-store.mjs";


const VuexStore = Vuex.createStore({

	strict: false,


   state: () => ({

   }),


	mutations: {

	},


   modules: {
		blogPosts: BlogPostsStore,
   },

});


export default VuexStore;
