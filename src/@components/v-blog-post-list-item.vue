<template>
	<router-link
		class="v-blog-post-list-item"
		:to="{ name: 'blog-post-page', params: { blogPostId: blogPostUrlId } }"
		tag="div">

		<img class="-image" v-if="blogPost.previewImageUrl?.trim().length" :src="blogPost.previewImageUrl"/>

		<div class="-call">

			<span class="-type">{{ blogPost.type }}</span>

			<span class="-title">{{ blogPost.title }}</span>

			<span class="-description" v-if="blogPost.description">{{ blogPost.description }}</span>

		</div>

	</router-link>
</template>



<script>
import BlogPost from "../model/blog-post.mjs";

export default {

	name: 'v-blog-post-list-item',


	props: {
		/**
		 * @type {BlogPost}
		 */
		blogPost: {
			type: BlogPost,
			required: true,
		},
	},


	computed: {

		/**
		 * @return {string}
		 */
		blogPostUrlId(){
			return `${this.blogPost.id}-${this.blogPost.title.toLowerCase().replaceAll(/[^\w\d]/gi, '-')}`;
		}

	},

}
</script>



<style>
.v-blog-post-list-item{
	width: 280px;
	height: 340px;

	border-radius: 18px;
	overflow: hidden;
}
.v-blog-post-list-item::after{
	pointer-events: none;
	content: '';
	position: absolute;
	width: 100%;
	height: 100%;
	top: 0;
	left: 0;
	border-radius: 18px;
	box-shadow: inset 0 0 0 3px var(--theme-fg--1);
}

.v-blog-post-list-item > .-image{
	flex: 1 0 max-content;
	object-fit: cover;
}
.v-blog-post-list-item > .-call{
	position: absolute;

	display: flex;
	flex-direction: column;

	gap: 4px;

	width: 100%;

	max-height: 8em;
	bottom: 0;
	left: 0;
	padding: 20px;

	background-color: rgba(0,0,0,0.2);
}
.v-blog-post-list-item > .-call > .-type{
	opacity: 0.4;
	color: var(--theme-fg--1);
	font-size: 14px;
	/*font-weight: 500;*/
	margin-bottom: -4px;
}
.v-blog-post-list-item > .-call > .-title{
	color: var(--theme-fg--1);
	font-weight: 500;
}
.v-blog-post-list-item > .-call > .-description{
	opacity: 0.8;
	color: var(--theme-fg--1);
	font-size: 14px;

	display: -webkit-box;
	-webkit-line-clamp: 2;
	-webkit-box-orient: vertical;

	text-overflow: ellipsis;
	overflow: hidden;
}

</style>
