<template>
	<div class="v-blog-post-page --thin-scroll --large">

		<div class="-main">

			<span class="-kind">Blog Post</span>


			<header class="-title">{{ blogPost?.title }}</header>


			<section class="-authors">
				<div class="-author">
					<img class="-thumb" src="../assets/images/my_photo_thumb_001.jpeg"/>
					<span class="-name">Guilherme Reginaldo Ruella</span>
				</div>
			</section>


			<article class="-content" v-html="contentHtml"></article>


			<v-separator class="-separator"></v-separator>


			<section class="-tags-section">
				<span class="-title">Tags</span>
				<div class="-tags">
					<v-tag
						class="-tag"
						:name="tag"
						v-for="tag in blogPost.tags">
					</v-tag>
				</div>
			</section>

		</div>

	</div>
</template>



<script>
import {mapGetters} from "vuex";
import BlogPostContentRepo from "../repos/blog-post-content-repo.mjs";
import VSeparator from "../@components/v-separator.vue";
import VTag from "../@components/v-tag.vue";
import marked from "marked";
import * as DOMPurify from 'dompurify';


export default {

   name: 'v-blog-post-page',


	components: {VTag, VSeparator},


	data(){
		return {
			/**
			 * @type {?BlogPost}
			 */
			blogPost: null,

			/**
			 * @type {?string}
			 */
			content: null,
		};
	},


	computed: {

		...mapGetters('blogPosts', [ 'getBlogPostById' ]),

		/**
		 *
		 * @return {?string}
		 */
		contentHtml(){
			if(!this.content)
				return null;
			return DOMPurify.sanitize(marked.parse(this.content));
		},

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

		this.content = await BlogPostContentRepo.getBlogPostContent(this.blogPost.id);
	},

}
</script>



<style>
.v-blog-post-page{
	--var-h-min-padding: 5vh;

	display: flex;
	flex-direction: column;
	align-items: center;

	overflow-y: auto;
	overflow-x: hidden;
	width: 100%;

	/*padding-bottom: 10em;*/
	padding: 4em var(--var-h-min-padding) 10em var(--var-h-min-padding);
}

.v-blog-post-page > .-main{
	display: flex;
	flex-direction: column;
	align-items: stretch;

	max-width: 75em;
}



/*
 * ==========================================
 * Kind
 * ==========================================
 */
.v-blog-post-page > .-main > .-kind{
	opacity: 0.2;
	font-size: 32px;
	font-weight: 700;

	margin-bottom: 8px;
}



/*
 * ==========================================
 * Title
 * ==========================================
 */
.v-blog-post-page > .-main > .-title{
	font-size: 64px;
	font-weight: 600;

	line-height: 1.2em;

	margin-bottom: 16px;
}



/*
 * ==========================================
 * Authors
 * ==========================================
 */
.v-blog-post-page > .-main > .-authors{
	display: flex;
	flex-direction: row;
	align-items: center;
	flex-wrap: wrap;

	gap: 1em;

	margin-bottom: 16px;
}
.v-blog-post-page > .-main > .-authors > .-author{
	display: flex;
	flex-direction: row;
	align-items: center;

	gap: 12px;

	height: 40px;
	border-radius: 100px;
	padding: 0 16px 0 6px;
	overflow: hidden;
}
.v-blog-post-page > .-main > .-authors > .-author::before{
	opacity: 0.2;
	pointer-events: none;
	content: '';
	position: absolute;
	width: 100%;
	height: 100%;
	top: 0;
	left: 0;
	background-color: var(--theme-fg--1);
}
.v-blog-post-page > .-main > .-authors > .-author > .-thumb{
	width: 28px;
	height: 28px;
	object-fit: cover;
	border-radius: 50%;
}
.v-blog-post-page > .-main > .-authors > .-author > .-name{
	font-size: 14px;
}



/*
 * ==========================================
 * Content
 * ==========================================
 */
.v-blog-post-page > .-main > .-content{

}
.v-blog-post-page > .-main > .-content h2{
	font-size: 20px;
	font-weight: 500;
	line-height: 1.2em;
	text-align: justify;

	margin-top: 32px;
	margin-bottom: 8px;
}
.v-blog-post-page > .-main > .-content p{
	font-size: 16px;
	text-align: justify;
	white-space: pre-wrap;

	margin-top: 16px;
}



/*
 * ==========================================
 * Separator
 * ==========================================
 */
.v-blog-post-page > .-main > .-separator{
	opacity: 0.2;
	flex: 1 0 auto;
	margin: 4em 0;
}



/*
 * ==========================================
 * Tags
 * ==========================================
 */
.v-blog-post-page > .-main > .-tags-section{

}
.v-blog-post-page > .-main > .-tags-section > .-title{
	display: inline-block;
	font-size: 20px;
	font-weight: 500;

	margin-bottom: 16px;
}
.v-blog-post-page > .-main > .-tags-section > .-tags{
	display: flex;
	flex-direction: row;
	align-items: center;
	flex-wrap: wrap;

	gap: 16px;
}
.v-blog-post-page > .-main > .-tags-section > .-tags > .-tag{

}
.v-blog-post-page > .-main > .-tags-section > .-tags > .-tag > .-name{

}
</style>
