<template>
	<div class="v-blog-post-page --thin-scroll --large">

		<v-page-bg class="-page-bg"></v-page-bg>

		<div class="-main">

			<div class="-page-type">
				<v-button
					class="-back"
					icon="arrow_back"
					v-if="false"
					:to-page="{ name: 'home-page' }"
					round
					size-l
					dont-focus-on-click>
				</v-button>
				<span class="-type --ui-label">{{ blogPost?.type }}</span>
			</div>


			<header class="-title">{{ blogPost?.title }}</header>


			<section class="-authors">
				<v-author class="-author"></v-author>
			</section>


			<article class="-content" ref="content" v-html="contentHtml"></article>


			<v-separator class="-separator"></v-separator>


			<section class="-tags-section" v-if="blogPost">
				<span class="-title --ui-label">Tags</span>
				<div class="-tags">
					<v-tag
						class="-tag"
						:name="tag"
						v-for="tag in blogPost?.tags || []">
					</v-tag>
				</div>
			</section>

		</div>


		<v-copyrights-notice class="-copyrights"></v-copyrights-notice>

	</div>
</template>



<script>
import {mapGetters} from "vuex";
import BlogPostContentRepo from "../repos/blog-post-content-repo.mjs";
import VSeparator from "../@components/v-separator.vue";
import VTag from "../@components/v-tag.vue";
import * as marked from "marked";
import Prism from 'prismjs';
import DOMPurify from 'dompurify';
import VAuthor from "../@components/v-author.vue";
import VCopyrightsNotice from "../@components/v-copyrights-notice.vue";
import VPageBg from "../@components/v-page-bg.vue";
import VButton from "../@components/v-button.vue";

export default {

   name: 'v-blog-post-page',


	components: {VButton, VPageBg, VCopyrightsNotice, VAuthor, VTag, VSeparator},


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

			contentLayoutDone: false,
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


	watch: {

		contentLayoutDone(newVal, oldVal){
			if(!newVal)
				return;
			Prism.highlightAllUnder(this.$refs.content);
		},

	},


	async beforeMount() {
		const blogPostId = /^(.+?)(-.*)?$/i.exec(this.$route.params.blogPostId)[1];
		if(!blogPostId)
			throw new Error(`Could not load blog post: ID not set`);

		const blogPost = this.getBlogPostById(blogPostId);
		if(!blogPost) {
			await this.$router.replace({ name: 'not-found-page', query: { 'p': this.$route.path }  })
			return;
		}

		this.blogPost = blogPost;

		this.content = await BlogPostContentRepo.getBlogPostContent(this.blogPost.id);

		const interval = setInterval(() => {
			this.contentLayoutDone = !!this.contentHtml?.trim().length && !!this.$refs.content?.children.length;
			if(this.contentLayoutDone)
				clearInterval(interval);
		}, 50);
	},

}
</script>



<style>
.v-blog-post-page{
	--var-h-min-padding: 5vh;

	/*flex: 1 1 auto;*/

	display: flex;
	flex-direction: column;
	align-items: center;

	overflow-y: auto;
	overflow-x: hidden;
	width: 100%;

	padding: 4em var(--var-h-min-padding) 0 var(--var-h-min-padding);
}

.v-blog-post-page > .-main{
	display: flex;
	flex-direction: column;
	align-items: stretch;

	max-width: 55em;
}



/*
 * ==========================================
 * Page type
 * ==========================================
 */
.v-blog-post-page > .-main > .-page-type{
	display: flex;
	flex-direction: row;
	align-items: center;
	gap: 1em;

	margin-bottom: 8px;
}
.v-blog-post-page > .-main > .-page-type > .-back{
	--v-button--fg: var(--theme-fg--1);
	--v-button--bg: var(--theme-bg--1);
}
.v-blog-post-page > .-main > .-page-type > .-type{
	opacity: 0.3;
	font-size: 2em;
	font-weight: 700;
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
	cursor: default;
	display: flex;
	flex-direction: row;
	align-items: center;
	flex-wrap: wrap;

	gap: 1em;

	margin-bottom: 16px;
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
.v-blog-post-page > .-main > .-content pre{
	font-family: 'Fira Code', monospace;
	font-size: 16px;

	margin-top: 16px;
	border-radius: 18px;
}
.v-blog-post-page > .-main > .-content code.language-javascript::before{
	user-select: none;
	content: 'Javascript';
	font-family: 'Poppins', sans-serif;
	display: block;
	font-size: 12px;
	opacity: 0.6;
	color: var(--theme-fg--1);

	font-weight: 500;
	margin-bottom: 8px;
}

.v-blog-post-page > .-main > .-content img{
	margin-top: 16px;
	width: 100%;
	height: auto;
	object-fit: cover;
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
