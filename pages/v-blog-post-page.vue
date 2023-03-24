<template>
	<div class="v-blog-post-page --thin-scroll --large">

		<span class="-title">{{ blogPost?.title }}</span>

	</div>
</template>



<script>

import {mapGetters} from "vuex";

export default {

   name: 'v-blog-post-page',


	data(){
		return {
			/**
			 * @type {?BlogPost}
			 */
			blogPost: null,
		};
	},


	computed: {
		...mapGetters('blogPosts', [ 'getBlogPostById' ]),
	},


	async beforeMount() {
		const blogPostId = this.$route.params.blogPostId;
		if(!blogPostId)
			throw new Error(`Coud not load blog post: ID not set`);

		const blogPost = this.getBlogPostById(blogPostId);
		if(!blogPost) {
			await this.$router.replace({ name: 'not-found-page', query: { 'p': this.$route.path }  })
			return;
		}

		this.blogPost = blogPost;
	}

}
</script>



<style>
.v-blog-post-page{
	--var-h-min-padding: 5vh;

	display: flex;
	flex-direction: column;
	align-items: stretch;


	overflow-y: auto;
	overflow-x: hidden;
	width: 100%;

	padding-bottom: 10em;
}


</style>
